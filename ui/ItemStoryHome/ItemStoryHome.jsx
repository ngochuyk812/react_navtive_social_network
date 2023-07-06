import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';

export default function ItemStoryHomee({data, create}){
    let navigation = useNavigation()

    return(
        <View style = {styles.itemStory }>
           <View style = {styles.containImg }>
           <Image
                style={styles.imageStory}
                source={{uri:data.avatar}} />
            <TouchableOpacity
            activeOpacity={0.8}
            style={create ? styles.itemAddStory : {display:'none'}}
            >
                <IconEntypo 
                    name='plus'
                    size={28}
                    color={'white'}
                />
            </TouchableOpacity>    
           </View>
            <Text style={styles.nameUser}>{create ? "You" : data.name}</Text>

        </View>

    )
}