import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { createRoom } from "../../../redux/slice/chatSlice";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export default function ItemUser({friend, setModalVisible}){
    let dispatch = useDispatch()
    let room = null;
    let navigation = useNavigation()
    const handleCreateRoom = ()=>{
        dispatch(createRoom({usernames:[friend.username], callback:(rs)=>{
            room = rs
            console.debug(room);
            navigation.navigate("DetailMessage", {room})
            setModalVisible(false)
        }}))
    }
    
    return(
        <TouchableOpacity style={styles.friendItem} onPress={handleCreateRoom}>
            <Image
                style={styles.image}
                source={{uri:friend.avatar || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"}} />
            <Text style={styles.name}>{friend.fullName}</Text>
        </TouchableOpacity>
    )
}