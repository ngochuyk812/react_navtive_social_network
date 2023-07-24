import { Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useEffect, useState } from "react";
import InputForm from "../../ui/InputForm/InputForm";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/slice/authSlice";

export default function SignIn({ }) {
    let navigation = useNavigation()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    let dispatch = useDispatch()
    let authState = useSelector((state)=>{
        return state.auth
    })
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
    useEffect(()=>{
        console.log(authState);

        if(authState.user)
        navigation.navigate("Home")
    }, [authState.user])

    const handleSignIn = ()=>{
        dispatch(signIn({username, password, tokenExpo: authState.tokenExpo}))
       
        
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
                        value ={username}
                        change ={setUsername}
                        placeholder="Email"/>

                    <InputForm 
                        value ={password}
                        change ={setPassword}
                        secureTextEntry={true}
                        placeholder="Password"
                    />
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.appButtonContainer}
                        onPress={handleSignIn}
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


