import { Image, Text, TextInput, View } from 'react-native'
import { styles } from './styles'
export default function ItemComment({data}){
    
    return(
        <View style={{marginBottom:7}}>
            <View style={styles.titlePost} >
                <Image
                    source={{uri:data.user.avatar}}
                    style={styles.avatar}
                />
                <View style={{flex:1}}>
                    <View style={styles.rightComment}>
                        <Text style={styles.nameUser}>{data.user.name}</Text>
                        <Text style={{fontSize:13}}>{data.time}</Text>

                        <View style={styles.content}>
                            <Text >{data.comment}</Text>
                        </View>
                    </View>
                    <View style={styles.main_action}>
                    <Text style={styles.action_reply}>Like</Text>
                    <Text style={styles.action_reply}>Reply</Text>
                    </View>
                </View>
            </View>
            <View>
                
            </View>
        </View>
    )
}