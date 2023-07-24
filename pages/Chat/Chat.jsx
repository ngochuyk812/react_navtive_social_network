import { Alert, AppState, Button, Image, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import { useEffect, useState } from "react";
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import UsersOnline from "../../ui/UsersOnline/UsersOnline";
import ListChat from '../../ui/ListChat/ListChat'
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import SockJS from "sockjs-client";
import { over } from "stompjs";
import { addMessage } from "../../redux/slice/chatSlice";
import { connect, disconnect, stompClient } from "../../socket/useSocket";
import { Modal } from "react-native";
import CreateChat from "../../ui/CreateChat/CreateChat";
import { TouchableWithoutFeedback } from "react-native";

export default function Chat() {
    let navigation = useNavigation()
    const [isConnect, setConected] = useState(false);
    let dispatch = useDispatch()
    let getUser =  useSelector((state)=>{
        return state.auth.user
        })
      
  
    useEffect(()=>{
        console.log("Connect----Chat");
        if(getUser){
            connect(getUser.accessToken, setConected)
        }
      },[getUser])

    useEffect(()=>{
        if(isConnect && getUser){
        console.log("Subcribes----Chat");

            stompClient.subscribe("/queue/specific-user/"+getUser.username, (rs)=>{
            rs = JSON.parse(rs.body)

            if(rs.action === 'SEND' &&rs.message.user.username !== getUser.username){

                dispatch(addMessage(rs.message))
            }   
            })
        }
      },[isConnect])
    useEffect(() => {
        let stateChange = AppState.addEventListener('change', nextAppState => {
            console.log(nextAppState, "sdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
            if(nextAppState.match(/inactive|background/)){
                disconnect()

            }else{
                connect(getUser.accessToken, setConected)
            }            
        });
        return ()=>{
            stateChange.remove()
            disconnect()

        }
       
      }, []);

      const [modalVisible, setModalVisible] = useState(false);
     console.log("Connnecttttttttttttttttttttt", stompClient);

    return (
        <View style={styles.main}>
             <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    >
                    <View  
                        style={styles.centeredView}>
                            <TouchableOpacity onPress={()=>{setModalVisible(false)}} style={styles.closeModal}>
                            </TouchableOpacity>

                            <View  style={styles.bodyModal}>
                                <CreateChat setModalVisible={setModalVisible}/>
                            </View>
                    </View>
                </Modal>
            <View style={styles.mainHeader}>
                <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)} style={styles.createMessage}  >
                    <IconFontAwesome name="user-plus" disabled size={20}/>
                </TouchableOpacity>
                <Text style={styles.title} >Message</Text>
            </View>
        <UsersOnline/>

        <ListChat/>
        </View>
    )
}


