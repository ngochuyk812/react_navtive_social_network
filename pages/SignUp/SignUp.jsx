import { Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles'

import { useState } from "react";
import InputForm from "../../ui/InputForm/InputForm";

export default function SignUp({navigation}) {
    const [hover, setHover] = useState("")
    const hoverRef = (text) => {
        
        setHover(text)
        if(text === 'signIn'){
            navigation.navigate("SignIn")

        }
        if(text === 'forgot')
        navigation.navigate("ForgotPassword")
        setTimeout(() => {
            setHover("")
        }, 200)
    }
    return (
        <View style={styles.mainLogin}>
            <Image
                style={styles.logo}
                source={require("../../assets/logoSignUp.jpg")} />
            <View style={styles.content}>
                <Text style={{ fontSize: 30, marginBottom: 20, textAlign: 'center' }}>Sign Up</Text>

                <View style={styles.form} >
                    <InputForm
                        placeholder="Full Name"
                    />
                    <InputForm
                        placeholder="Email"
                    />

                    <InputForm
                        secureTextEntry={true}
                        placeholder="Password"
                    />
                    <InputForm
                        secureTextEntry={true}
                        placeholder="Re-Password"
                    />

                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.appButtonContainer}
                    >
                        <Text style={styles.appButtonText}>Sign Up</Text>
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
                        You are have account?&nbsp;
                        <Text 
                        style={hover === "signIn" ? { ...styles.buttonBold, ...styles.button_hover } : styles.buttonBold} 
                        onPress={() => { hoverRef("signIn") }}>
                             Sign In
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


