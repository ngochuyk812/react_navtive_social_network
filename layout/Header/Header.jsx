import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import ItemNavbar from "../../ui/ItemNavbar/ItemNavbar";
import {styles} from './styles'
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';

export default function Header({title,handleClose, children}){
    let navigation = useNavigation()
 
    return(
        <View style={styles.mainHeader}>
            <TouchableOpacity style={styles.iconClose}  onPress={handleClose}>
            <IconAntDesign name="close" disabled size={22}/>

            </TouchableOpacity>
            {children}
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}