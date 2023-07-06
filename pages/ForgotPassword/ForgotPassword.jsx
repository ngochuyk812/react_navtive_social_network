import { Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputForm from "../../ui/InputForm/InputForm";

export default function ForgotPassword({navigation }) {
    const [hover, setHover] = useState("")
    const hoverRef = (text) => {
        if(text === 'signup'){
            navigation.navigate("SignUp")
        }
        setHover(text)
        setTimeout(() => {
            setHover("")
        }, 200)
    }

    
    return (
        <View style={styles.mainLogin}>
            <Image
                style={styles.logo}
                source={require("../../assets/logo-forgotpassword.jpg")} />
            <View style={styles.content}>
                <Text style={{ fontSize: 30, marginBottom: 20, textAlign: 'center' }}>Forgot Password</Text>

                <View style={styles.form} >
                    <InputForm
                        placeholder="Email"
                    />
                    
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.appButtonContainer}
                    >
                        <Text style={styles.appButtonText}>Next</Text>
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

                    
                </View>
            </View>
        </View>
    )
}


