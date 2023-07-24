import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function ItemChat({ room}){
    let user = useSelector(state=>state.auth.user)
    let getRoom = useSelector((state)=>state.chat.rooms)
    getRoom = getRoom.filter(tmp=>tmp.id === room.id)[0]
    let listMess =getRoom.messages ||[]

    let navigation = useNavigation()
    const handleOpenDetailMessage = ()=>{
        navigation.navigate("DetailMessage", {room})
    }
    const getNameFriend = ()=>{
        let arr = room.participants || []
        arr = arr.filter(tmp=>tmp.user.username !== user.username)
        console.log(user.username,arr[0].user.fullName, "Chat get name friend");

        return arr
    }
    let avatar = getNameFriend()[0].user.avatar || "https://2cafe.vn/wp-content/uploads/2018/06/061818_0252_Dkthpnh1.png"

    const getMessageUnseen =(listMess)=>{
        let arr = listMess ||[]
        let arrUnSeen = arr.filter(tmp=>!tmp.status).reverse()
        console.log("Re_Show Message");
        if(arrUnSeen.length ===0)
            return arr.reverse()

        return arrUnSeen
    }
    const getDetailMessageUnseen =(itemMessage)=>{
        let message = []
        if(itemMessage){
            message = itemMessage.mediaMessages
        }
        if(message.length === 0)
        return ""
        let text = message.filter(tmp=>tmp.type === "TEXT")
        if(text.length !==0)
            return text[0].src

    }
    
    return(
        <TouchableOpacity style = {styles.itemMessage } onPress={handleOpenDetailMessage}>
           <View style = {styles.containImg }>
           <Image
                style={styles.imageStory}
                source={{uri:avatar}} />
            <TouchableOpacity
            activeOpacity={0.8}
            style={styles.iconStatus}
            >
             
                <View>
                    <Text style={{fontSize:15, color:'white'}}>
                        02
                    </Text>
                </View>
            </TouchableOpacity>    
           </View>
           <View style ={styles.titleMessage}>
           <Text style={styles.nameUser} numberOfLines={1} ellipsizeMode="tail">{room.type === 0 ? getNameFriend()[0].user.fullName : room.name}</Text>
           <Text style={styles.message} numberOfLines={1} ellipsizeMode="tail">{getDetailMessageUnseen(getMessageUnseen(listMess)[0])}</Text>
           </View>
            <Text>
                08:20PM
            </Text>
        </TouchableOpacity>

    )
}