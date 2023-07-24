import { ScrollView, Text, View } from "react-native"
import ItemUserOnline from "./ItemUserOnline/ItemUserOnline"

export default function UsersOnline() {
    let users= [ {
        "name": "Namitha Salian",
        "avatar": "https://randomuser.me/api/portraits/women/16.jpg"
    },
    {
        "name": "Oscar Petersen",
        "avatar": "https://randomuser.me/api/portraits/men/16.jpg"
    },
    {
        "name": "Vittorio Thomas",
        "avatar": "https://randomuser.me/api/portraits/men/94.jpg"
    },
    {
        "name": "Lolit Padun",
        "avatar": "https://randomuser.me/api/portraits/men/65.jpg"
    },
    {
        "name": "Väinö Kangas",
        "avatar": "https://randomuser.me/api/portraits/men/64.jpg"
    },
    {
        "name": "Mika Schwanke",
        "avatar": "https://randomuser.me/api/portraits/men/53.jpg"
    },
    {
        "name": "Cléa Marchand",
        "avatar": "https://randomuser.me/api/portraits/women/36.jpg"
    },
    {
        "name": "Annette Ryan",
        "avatar": "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
        "name": "Liam Wittich",
        "avatar": "https://randomuser.me/api/portraits/men/6.jpg"
    },]
    return (
        <View style={{ backgroundColor:'white', paddingTop:10, paddingBottom:10}}>
            <Text style={{marginBottom:10, fontSize:18, fontWeight:500, marginLeft:10, }}>ONLINE USER</Text>
            <ScrollView   horizontal={true} showsHorizontalScrollIndicator={false}>
                   {users.map((tmp,index)=>{
                    return (<ItemUserOnline key={index} data={tmp}  />)
                   })}
            </ScrollView>
        </View>
    )
}