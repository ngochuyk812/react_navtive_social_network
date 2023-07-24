
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SockJS from "sockjs-client";
import { over } from "stompjs";

export var stompClient = null
export const connect = async (token, setConnected)=>{
    let stomp = null
    console.log(token, "dsdsdsd");
    let Sock = new SockJS('https://ddde-2405-4802-911e-5590-b001-9250-33b9-10fe.ngrok-free.app/ws');
    var headers = {
        'Authorization': 'Bearer ' + token 
      };
      stomp = over(Sock);
      stomp.connect( headers,()=>{
        stompClient = stomp
        setConnected(stomp)
        console.log("connect thanh cong");
      }, (err) =>console.log(err));
    
}      


export const disconnect = () =>{
    if(stompClient){
        console.log("Disconnect Socket");
        stompClient.disconnect()
    }
}
