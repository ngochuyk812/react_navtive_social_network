import { TextInput, View } from 'react-native'
import {styles} from './styles'
import { Image, Text, TouchableOpacity } from 'react-native'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFriend } from '../../redux/slice/firendSlice'
import ListUser from './ListUser/ListUser'
import Icon from "react-native-vector-icons/EvilIcons";

export default function CreateChat({setModalVisible}){
    let dispatch = useDispatch()
    let friends = useSelector(state=> state.friend.friends)
    useEffect(()=>{
        dispatch(getFriend())
    },[])

    return(
        <View style={styles.mainCreateChat} >
            <Text style={{textAlign:'center', marginTop:15, fontSize:18, fontWeight:'bold'}}>Create Chat</Text>
            <View style={styles.searchMain}>
                <TouchableOpacity
                activeOpacity={0.8}
                style={{ ...styles.itemNavbar}}
                            >
                    <Icon.Button
                        backgroundColor={'rgba(206, 206, 206, 0)'}
                        color={'black'}
                        style={styles.iconSearch}
                        name={'search'}
                    />
                </TouchableOpacity>
                
                <TextInput
                    style = {styles.inputSearch}
                    placeholder="Search..."
                />
            </View>
            <Text style={{marginTop:10,marginBottom:10, marginLeft:20, fontWeight:600, color:'#c3c2c2'}}>List Friend</Text>
            <ListUser friends={friends} setModalVisible={setModalVisible}/>

        </View>
    )
}
