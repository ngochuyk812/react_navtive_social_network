import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';

export default function ItemUserOnline({data}){
    let navigation = useNavigation()

    return(
        <View style = {styles.itemStory }>
           <View style = {styles.containImg }>
           <Image
                style={styles.imageStory}
                source={{uri:data.avatar}} />
            <TouchableOpacity
            activeOpacity={0.8}
            style={styles.iconStatus}
            >
                <IconEntypo 
                    name='dot-single'
                    size={55}
                    color={'#6fdf54'}
                />
            </TouchableOpacity>    
           </View>
            <Text style={styles.nameUser} numberOfLines={1} ellipsizeMode="tail">{data.name}</Text>

        </View>

    )
}