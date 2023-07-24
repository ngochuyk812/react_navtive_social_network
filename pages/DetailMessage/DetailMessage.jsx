import { Animated, AppState, Button, Easing, FlatList, Image, Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import { useEffect, useRef, useState } from "react";
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import InputMessage from "../../ui/InputMessage/InputMessage";
import AnimatedText from "../../ui/AnimatedText/AnimatedText";
import ItemMessage from "../../ui/ItemMessage/ItemMessage";
import { addMessage, getMessageByPage } from "../../redux/slice/chatSlice";
import Loading from "../../ui/Loading/Loading";
import { stompClient } from "../../socket/useSocket";
import { TouchableWithoutFeedback } from "react-native";
import { KeyboardAwareScrollView, KeyboardAwareSectionList } from "react-native-keyboard-aware-scroll-view";

export default function DetailMessage({route}) {
    const video = useRef(null);
    let navigation = useNavigation()
    const [isEntering, setIsEntering] = useState(false)
    const scrollViewRef = useRef(null);
    const [statusVideo, setStatusVideo] = useState({});
    const [getMessage, setMessage] = useState([])
    const [getFriend, setFriend] = useState("")
    const _awarescrollView = useRef()
    console.log(route.params , );
    let ROOM = route.params.room 
    let getRoom = useSelector((state)=>state.chat.rooms)
    let userAuth =  useSelector((state)=>state.auth.user)
    let dispatch = useDispatch()
    useEffect(()=>{
        getRoom = getRoom.filter(tmp=>tmp.id === ROOM.id)[0]
        if(getRoom){
            setMessage(getRoom.messages||[])
            getFriendByRoom(getRoom)
        }
    },[getRoom])

    const getFriendByRoom = (room)=>{
        let arr = room.participants || []
        arr = arr.filter(tmp=>tmp.user.username !== userAuth.username)
        console.log(arr.length, "dsdsdsds");
        if(arr && arr.length === 1){
            setFriend(arr[0].user.fullName)
        }else{
            setFriend(ROOM.name)
        }
    }

  
    

    useEffect(()=>{
        if(stompClient){
            stompClient.subscribe("/queue/specific-user/"+userAuth.accessToken, (rs)=>{
                rs = JSON.parse(rs.body)
                if(rs.action === "ENTERING"){
                    console.log("-------- Đang nhập -----------");
                    setIsEntering(true)
                }
                if(rs.action === "BLUR"){
                    console.log("-------- Hủy nhập -----------");
                    setIsEntering(false)
                }
            })
        }

        
    },[stompClient])

    const handleScrollBottom = ()=>{
        scrollViewRef.current.scrollToEnd({ animated: true });
    }
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', handleScrollBottom);
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', handleScrollBottom);
        dispatch(getMessageByPage({idRoom: ROOM.id, page:0, token: userAuth.accessToken}))
        return () => {
          keyboardDidShowListener.remove();
          keyboardDidHideListener.remove();
        };
      }, []);
    return (
        <View >
            <View style={styles.main}>
            {!stompClient && <Loading/>}
            <View style={styles.mainHeader}>
                <TouchableOpacity style={styles.goBack}  >
                    <IconIonicons name="chevron-back" disabled size={25}/>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.mainTitle}>
                    <Image
                    style={styles.imageAvatar}
                    source={{uri:'https://2cafe.vn/wp-content/uploads/2018/06/061818_0252_Dkthpnh1.png'}} />
                    <View>
                        <Text style={styles.fullName} >{getFriend}</Text>
                        <Text style={styles.statusHeader} >Online</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuChat}  >
                    <IconIonicons name="md-menu-sharp" disabled size={25}/>
                </TouchableOpacity>
            </View>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <View style={{ flex: 1 }}>
        <FlatList
            
            ref={scrollViewRef}
            onContentSizeChange={handleScrollBottom}
            data={getMessage}
            keyExtractor={(item,index) => index}
            renderItem={({ item }) => (
            <ItemMessage  message={item.mediaMessages} me={item.user.username === userAuth.username} />
          )}
        />

        {isEntering && <AnimatedText text={"Entering..."}/> }
      </View>
      <View style={{ width:'100%'}}>
      <InputMessage  handleScrollBottom={handleScrollBottom} webSocket={stompClient} toRoom={ROOM.id}/>
      </View>
    </KeyboardAvoidingView>

    {/* <KeyboardAwareScrollView
            style={{padding:10}}
            ref={_awarescrollView}
            >
            <ScrollView ref={scrollViewRef} style={{ backgroundColor:'#d8dee7'}} onContentSizeChange={handleScrollBottom} >
                     <Video
                        ref={video}
                        style={{width:200, height:200}}
                        source={{
                        uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                        }}
                        useNativeControls
                        resizeMode={ResizeMode.CONTAIN}
                        isLooping
                        onPlaybackStatusUpdate={status => setStatusVideo(() => statusVideo)}
                    /> 
                    {getMessage.map((tmp,index)=>{
                    if(tmp !== '' )
                    return <ItemMessage key={index} message={tmp.mediaMessages} me={tmp.user.username === userAuth.username} />
                    })}
                   {isEntering && <AnimatedText text={"Composing..."}/>}

                </ScrollView>
                <View style={{position:'absolute', bottom:0, left:0, right:0, backgroundColor:'red'}}>
                        <InputMessage  handleScrollBottom={handleScrollBottom} webSocket={stompClient} toRoom={ROOM.id}/>
                </View>
                
                </KeyboardAwareScrollView> */}

            

            </View>
            
        </View>
    )
}

const styles2 = StyleSheet.create({
    container: {
 
    },
    inner: {
      padding: 24,
      flex: 1,
      justifyContent: 'space-around',
    },
    header: {
      fontSize: 36,
      marginBottom: 48,
    },
    textInput: {
      height: 40,
      borderColor: '#000000',
      borderBottomWidth: 1,
    },
    btnContainer: {
      backgroundColor: 'white',
      marginTop: 12,
    },
  });
  
