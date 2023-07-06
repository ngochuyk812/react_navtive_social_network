import { useEffect, useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View } from "react-native";
import SignIn from "../../pages/SignIn/SignIn";
import Loading from "../Loading/Loading";
import { useNavigation } from "@react-navigation/native";

export default function ProtectedPage(props){
        let navigation = useNavigation()
      const [isLoggedIn, setIsLoggedIn] = useState(false);
      const [loading, setLoading] = useState(true);
      const getUser  = async () => {
        AsyncStorage.getItem('user').then(rs=>{
            setLoading(false)
            if(rs){
                setIsLoggedIn(true)
            }else{
                navigation.navigate("SignIn")
            }
        })
      }
    useEffect(()=>{
        navigation.addListener('focus', () => {
            getUser()
          });
    },[isLoggedIn])
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