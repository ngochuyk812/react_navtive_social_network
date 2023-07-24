import { SafeAreaView } from 'react-native-safe-area-context';
import Routes from "./routes";

import { connect, disconnect } from './socket/useSocket';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { registerForPushNotificationsAsync } from "./notifications/config";
import { setTokenExpo } from "./redux/slice/authSlice";
import { AppState } from "react-native";


export default function Config(){
    let dispatch = useDispatch()

    useEffect(() => {
        registerForPushNotificationsAsync().then(token => {
            dispatch(setTokenExpo(token))
            console.log(token);
        });
    }, []); 

 
    return (
        <Routes/>

       
    )
}


