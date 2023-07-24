import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import ItemNavbar from "../../ui/ItemNavbar/ItemNavbar";
import {styles} from './styles'
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { useState } from "react";

export default function Navbar({active}){
    let navigation = useNavigation()
    const handleCreatePost = ()=>{
        console.log("sdsd");
        navigation.navigate("CreatePost")
    }
    return(
        <View style={styles.mainNav}>
            <View style={{...styles.subNav, ...styles.subNavL}}>
                <ItemNavbar to={'Home'}  >
                    <IconFeather.Button
                                name="home"
                                backgroundColor={'rgba(206, 206, 206, 0)'}
                                disabled
                                color={active === "Home" ? '#017CFE' : 'white'}
                                suppressHighlighting={true}
                            />
                </ItemNavbar>
                <ItemNavbar to={'Message'} >
                    <IconAntDesign.Button
                                name="message1"
                                disabled
                                backgroundColor={'rgba(206, 206, 206, 0)'}
                                color={active === "Message" ? '#017CFE' : 'white'}
                            />
                </ItemNavbar>
            </View>
            <View style={styles.centerNav} >
                <TouchableOpacity style={styles.mainPlus} onPress={handleCreatePost}>
                    <IconFeather.Button
                                    name="plus"
                                    disabled
                                    style={styles.iconPlus}
                                    backgroundColor={'rgba(206, 206, 206, 0)'}
                                    color={'white'}
                                />
                </TouchableOpacity>
                
                
            </View>
            
            <View style={{...styles.subNav, ...styles.subNavR}}>
                <ItemNavbar to={'Notify'} >
                    <IconIonicons.Button
                                name="ios-notifications-outline"
                                disabled
                                backgroundColor={'rgba(206, 206, 206, 0)'}
                                color={active === "Notify" ? '#017CFE' : 'white'}
                            />
                </ItemNavbar>
                <ItemNavbar to={'Profile'} >
                    <IconFeather.Button
                                name="user"
                                disabled
                                backgroundColor={'rgba(206, 206, 206, 0)'}
                                color={active === "Profile" ? '#017CFE' : 'white'}
                            />
                </ItemNavbar>
            </View>


        </View>
    )
}


