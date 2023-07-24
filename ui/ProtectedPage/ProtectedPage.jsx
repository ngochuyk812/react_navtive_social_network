import { useEffect, useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View } from "react-native";
import SignIn from "../../pages/SignIn/SignIn";
import Loading from "../Loading/Loading";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export default function ProtectedPage(props){
        let navigation = useNavigation()
      const [isLoggedIn, setIsLoggedIn] = useState(false);
      const [loading, setLoading] = useState(true);

        let userAuth = useSelector((state)=>{
            return state.auth
        })
      const getUser  = () => {
        console.log(userAuth.user);
            setLoading(false)
            if(userAuth.user){
                setIsLoggedIn(true)
            }else{
                console.log("sdsdsd2222222222222222222222222222");
                navigation.navigate("SignIn")
            }
      }
    useEffect(()=>{
        console.log("sdsdsd");
            getUser()
    },[userAuth])
    const Page = props.page;
    const renderComponent = ()=>{
        if(props.layout){
            let Layout = props.layout
            return <Layout {...props} page={Page}/>
        }else{
            return <Page {...props} />
        } 
        
    }
    return (
       <>
       {loading? 
       <Loading/> :
       <>
       {isLoggedIn?
        renderComponent() :<Loading/>}</>
       }
       
       </>
    )
}