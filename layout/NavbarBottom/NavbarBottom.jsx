import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import ItemNavbar from "../../ui/ItemNavbar/ItemNavbar";
import {styles} from './styles'
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';

export default function Navbar(){
    const handleNav = ()=>{
        console.log("sdsd");
    }
    return(
        <View style={styles.mainNav}>
            
            <View style={{...styles.subNav, ...styles.subNavL}}>
                <ItemNavbar to={'Home'}>
                    <IconFeather.Button
                                name="home"
                                onPress={handleNav}
                                backgroundColor={'rgba(206, 206, 206, 0)'}
                                disabled
                                color={'white'}
                                suppressHighlighting={true}
                            />
                </ItemNavbar>
                <ItemNavbar to={'Messsage'}>
                    <IconAntDesign.Button
                                name="message1"
                                disabled
                                backgroundColor={'rgba(206, 206, 206, 0)'}
                                color={'white'}
                            />
                </ItemNavbar>
            </View>
            <View style={styles.centerNav}>
                <View style={styles.mainPlus}>
                    <IconFeather.Button
                                    name="plus"
                                    style={styles.iconPlus}
                                    backgroundColor={'rgba(206, 206, 206, 0)'}
                                    color={'#017cfea6'}
                                />
                </View>
                
                
            </View>
            
            <View style={{...styles.subNav, ...styles.subNavR}}>
                <ItemNavbar to={'Notify'}>
                    <IconIonicons.Button
                                name="ios-notifications-outline"
                                disabled
                                backgroundColor={'rgba(206, 206, 206, 0)'}
                                color={'white'}
                            />
                </ItemNavbar>
                <ItemNavbar to={'Profile'}>
                    <IconFeather.Button
                                name="user"
                                disabled
                                backgroundColor={'rgba(206, 206, 206, 0)'}
                                color={'white'}
                            />
                </ItemNavbar>
            </View>


        </View>
    )
}