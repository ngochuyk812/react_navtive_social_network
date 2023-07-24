import { Image, Platform, TextInput, TouchableOpacity ,View} from 'react-native'
import { styles } from './styles'
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import * as ImagePicker from 'expo-image-picker';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, sendMessage } from '../../redux/slice/chatSlice';



export default function InputMessage({webSocket, toRoom, handleScrollBottom}){
    const [paddingInput, setPaddingInput ] = useState(10)
    const [mess, setMess] = useState("")
    const [pickedImagePath, setPickedImagePath] = useState([]);
    let dispatch = useDispatch()
    let user = useSelector(state=>state.auth.user)
    const showImagePicker = async () => {
        // Ask the user for the permission to access the media library 
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("You've refused to allow this appp to access your photos!");
          return;
        }
    
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 0.1,
            allowsMultipleSelection:true,
            selectionLimit:10


        });
    
        // Explore the result
    
        if (!result.canceled) {
            setPickedImagePath([...pickedImagePath, ...result.assets]);

        }
    }

    const openCamera = async () => {
        // Ask the user for the permission to access the camera
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync(
            {
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                quality: 1,
            }
        );
    
        if (permissionResult.granted === false) {
          alert("You've refused to allow this appp to access your camera!");
          return;
        }
    
        const result = await ImagePicker.launchCameraAsync();
    
        if (!result.canceled) {
            setPickedImagePath([...pickedImagePath, result.assets[0]]);
            console.log(result.assets[0].type);
        }
    }


    const createMedia= (text, medias)=>{
        let rs = []
        if(text !== ""){
            rs.push({
                "src": text,
                "type": "TEXT"
            })
        }
        if(medias.length !== 0){
            medias.map(tmp=>{
                rs.push({
                    "src": tmp.uri,
                    "type": tmp.type === "video" ? "VIDEO" : "IMAGE"
                })
            })
        }

        return rs;
    }

    const sendMess = ()=>{
        console.log(mess);
        let medias =[]
        pickedImagePath.map(tmp=>{
            let uri = tmp.uri
            if (Platform.OS === "android" && uri[0] === "/") {
                uri = uri.replace(/%/g, "%25");
             }

            console.log(tmp);
            medias.push({type:tmp.type, uri, name: "image" })
        })
        dispatch(sendMessage({medias, text:mess, token: user.accessToken, action:'SEND', idRoom: toRoom}))
        dispatch(addMessage({
            "room": toRoom,
            "user": {
                "username": user.username,
                "fullName": user.fullName,
            },
            "mediaMessages": createMedia(mess, medias)
        }))
        // webSocket.send("/app/chat/user/"+toRoom, JSON.stringify({message: mess, media: media, action:'SEND'}))
        setMess("") 
        setPickedImagePath([])
        handleScrollBottom()
     }
     const focusInput = ()=>{
        setPaddingInput(60)
         webSocket.send("/app/chat/user/"+toRoom, JSON.stringify({message: mess,action:'ENTERING'}))
    }
     const blurInput = ()=>{
        setPaddingInput(10)

        webSocket.send("/app/chat/user/"+toRoom, JSON.stringify({message: mess,action:'BLUR'}))
    }

    
     const deleteImagePicker = (index) =>{
        let arr = pickedImagePath;
        arr.splice(index, 1)
        setPickedImagePath([...arr])
     }


    return(
            <View style={{paddingBottom:paddingInput, paddingTop:10, paddingHorizontal:10, backgroundColor:'white'}}>
                <View style={pickedImagePath.length >0 && styles.showImagePicker}>
                    {pickedImagePath.map((tmp, index)=>
                        <View key={index} style={styles.itemShowImage}>
                            <Image
                            style={{width:80,height:80}}
                            source={{uri:tmp.uri}} />
                        <TouchableOpacity style={styles.exitShowImage} onPress={()=>{deleteImagePicker(index)}}>
                            <IconAntDesign name="close" size={24} color={"red"}/>
                        </TouchableOpacity>
                        </View>
                    )}
                </View>
                <View style={styles.sendMess}>
                
                    <TouchableOpacity style={styles.touchSend} onPress={showImagePicker}>
                            <IconMaterialIcons name="perm-media" size={25} color={"#5790DF"}/>
                        </TouchableOpacity>
                    <TouchableOpacity style={styles.touchSend} onPress={openCamera}>
                            <IconAntDesign name="camerao" size={25} color={"#5790DF"}/>
                        </TouchableOpacity>
                    <TextInput placeholder="Message..." onFocus={focusInput} onBlur={blurInput} onChangeText={setMess} value={mess} style={styles.inputMess}/>
                    <TouchableOpacity style={styles.touchSend} onPress={sendMess}>
                            <IconIonicons name="send" size={25} color={"#5790DF"}/>
                        </TouchableOpacity>
            </View>
            </View>
    )
}