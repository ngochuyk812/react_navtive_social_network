import { Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';

export default function ItemNavbar({style, ...props}){
    let navigation = useNavigation()

    const handleNav = ()=>{
        navigation.navigate(props.to)
    }
    return(
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleNav}
            style={{...style, ...styles.itemNavbar}}
            {...props}
        >
        </TouchableOpacity>

    )
}