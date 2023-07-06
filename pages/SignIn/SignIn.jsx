import { Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputForm from "../../ui/InputForm/InputForm";
import { useNavigation } from "@react-navigation/native";

export default function SignIn({ }) {
    let navigation = useNavigation()
    const [hover, setHover] = useState("")
    const hoverRef = (text) => {
        if(text === 'signup'){
            navigation.navigate("SignUp")
        }
        if(text === 'forgot')
        navigation.navigate("ForgotPassword")
        setHover(text)
        setTimeout(() => {
            setHover("")
        }, 200)
    }

    const signIn = async()=>{
        await AsyncStorage.setItem('user', "ngochuy").then(()=>{
            navigation.navigate("Home")
        })
        
    }
    return (
        <View style={styles.mainLogin}>
            <Image
                style={styles.logo}
                source={require("../../assets/signin_logo.jpg")} />
            <View style={styles.content}>
                <Text style={{ fontSize: 30, marginBottom: 20, textAlign: 'center' }}>Sign In</Text>

                <View style={styles.form} >
                    <InputForm 
                        placeholder="Email"/>

                    <InputForm 
                        secureTextEntry={true}
                        placeholder="Password"
                    />
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.appButtonContainer}
                        onPress={signIn}
                    >
                        <Text style={styles.appButtonText}>Sign In</Text>
                    </TouchableOpacity>
                    <Text style={{ marginTop: 10 }}>or</Text>
                    <View style={styles.signInMedia}>

                        <Icon.Button
                            name="facebook"
                            backgroundColor="#3b5998"
                            onPress={this.loginWithFacebook}
                        >
                            Sign In
                        </Icon.Button>

                        <Icon.Button
                            name="google"
                            backgroundColor="#c94439"
                            onPress={this.loginWithFacebook}
                        >
                            Sign In
                        </Icon.Button>
                    </View>

                    <Text 
                    style={{ textAlign: 'center', marginTop: 30}}>
                        You are not have account?&nbsp;
                        <Text 
                        style={hover === "signup" ? { ...styles.buttonBold, ...styles.button_hover } : styles.buttonBold} 
                        onPress={() => { hoverRef("signup") }}>
                            Sign Up
                        </Text>
                    </Text>

                    <Text 
                    style={hover === "forgot" ? { ...styles.buttonBold, ...styles.button_hover } : styles.buttonBold} 
                    onPress={() => { hoverRef("forgot") }}>
                        Forgot Password
                    </Text>
                </View>
            </View>
        </View>
    )
}


