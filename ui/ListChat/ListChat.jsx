import { ScrollView, TextInput, View } from 'react-native'
import { styles } from './styles'
import ItemChat from './ItemChat/ItemChat'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getRoom } from '../../redux/slice/chatSlice'
export default function ListChat({stompClient}){
    let rooms = useSelector(state=>state.chat.rooms)
    let user = useSelector(state=>state.auth.user)

    let dispatch = useDispatch()
    useEffect(()=>{
        if(user){
            dispatch(getRoom({token:user.accessToken}))
        }
    },[user])
    return(
                <ScrollView  style={styles.listMessage} showsVerticalScrollIndicator={false}>
                    {rooms.map((tmp,index)=>{
                        return <ItemChat stompClient={stompClient} key={index} room={tmp}/>
                    })}
                    {/* <ItemChat username ={'ngochuymobile'} name={"Ngọc Huy Mobile"}/>
                    <ItemChat />
                    <ItemChat />
                    <ItemChat />
                    <ItemChat />
                    <ItemChat />
                    <ItemChat />
                    <ItemChat />
                    <ItemChat />
                    <ItemChat />
                    <ItemChat /> */}

                </ScrollView>
    )
}