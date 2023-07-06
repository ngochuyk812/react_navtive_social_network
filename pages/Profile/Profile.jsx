import { Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputForm from "../../ui/InputForm/InputForm";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
    let navigation = useNavigation()
  const logout=()=>{
     AsyncStorage.removeItem('user').then(()=>{
        navigation.navigate("SignIn")
     })
  }

    
    return (
        <View style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100%', width:'100%'}}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={logout}
                    >
                        <Text style={styles.appButtonText}>Logout</Text>
                    </TouchableOpacity>
        </View>
    )
}


