import { Button, Image, Keyboard, KeyboardAvoidingView, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles, pickerStyle } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useEffect, useRef, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputForm from "../../ui/InputForm/InputForm";
import Header from "../../layout/Header/Header";
import RNPickerSelect from "react-native-picker-select";
import { useNavigation } from "@react-navigation/native";
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import LayoutBaner from '../../assets/layout1.png'
import LayoutDefault from '../../assets/layout2.png'
import LayoutLine from '../../assets/layout3.png'
import * as ImagePicker from 'expo-image-picker';
import ItemShowMedia from "./components/ItemShowMedia/ItemShowMedia";
import KeyboardAvoidingCustom from "../../ui/KeyboardAvoidingCustom/KeyboardAvoidingCustom";
import ModalLayout from "./components/ModalLayout/ModalLayout";
import ModalPostAudience from "./components/ModalPostAudience/ModalPostAudience";
import { ResizeMode, Video } from "expo-av";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/slice/postSlice";

export default function CreatePost() {
    let audiences = [
        {id:0, title:'Public', detail:'Anyone on or off Social', icon: {type: IconAntDesign, name: "earth"}},
        {id:1, title:'Friends', detail:'Your friends on Facebook', icon: {type: IconEntypo, name: "users"}},
        {id:2, title:'Only me', detail:'Only me', icon: {type: IconFontAwesome5, name: "user-lock"}}
    ]
    let layout = [
        {id:0, title:'Layout Default', detail : 'The shapes are arranged in intersecting squares', image:LayoutDefault },
        {id:1, title:'Layout Banner', detail : 'A main image and sub-images', image: LayoutBaner },
        {id:2, title:'Layout Line', detail : 'Arrangements are in the same row', image: LayoutLine }
    ]
    const [pickedImagePath, setPickedImagePath] = useState([]);
    const [caption, setCaption ] = useState("");
    const [audienceSelect, setAudienceSelect ] = useState(audiences[0]);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleLayout, setModalVisibleLayout] = useState(false);
    const [layoutSelected, setLayoutSelected] = useState(layout[0])
    const refInputContent = useRef(null)
    let navigation = useNavigation()
    let dispatch = useDispatch()

    let IconType = audienceSelect.icon.type
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
    const deleteImagePicker = (index) =>{
        let arr = pickedImagePath;
        arr.splice(index, 1)
        setPickedImagePath([...arr])
     }

    const handleCreatePost = ()=>{
        dispatch(createPost({caption:caption, audience: audienceSelect, layout:layoutSelected, medias:pickedImagePath }))
    }

    useEffect(() => {
        if (refInputContent.current) {
          refInputContent.current.focus();
        }
        
      }, []);

    const info = {
        "name": "Herman Walters",
        "avatar": "https://randomuser.me/api/portraits/men/82.jpg"
    }

          return (
        <View>
            <ModalPostAudience setModalVisible={setModalVisible} 
                            setValue={setAudienceSelect}
                            modalVisible={modalVisible}
                            selected={audienceSelect}
                            audiences={audiences}/>
            <ModalLayout
            setModalVisible={setModalVisibleLayout} 
            value={layoutSelected}
            setValue={setLayoutSelected}
            modalVisible={modalVisibleLayout}
            data={layout}
            />

            <Header title={"Create Post"} handleClose={()=>{navigation.goBack()
            }}>
                <TouchableOpacity onPress={handleCreatePost} style={{position:'absolute', right:20, top:0,bottom:0, display:'flex', justifyContent:'center', alignItems:'center'}} >
                    <Text style={{fontSize:16, backgroundColor:'#0b83e04d', color:"#087bd4", paddingHorizontal:20, paddingVertical:5, borderRadius:30, fontWeight:700}}>Post</Text>
                </TouchableOpacity>

            </Header>
            <View style={styles.mainCreate}>
                <View style={styles.titlePost} >
                    <Image
                        source={{uri:info.avatar}}
                        style={styles.avatar}
                    />
                    <View>
                        <Text style={styles.nameUser}>{info.name}</Text>
                        <View style={styles.select}>
                            <TouchableOpacity style={styles.audienceSelected} onPress={()=>{setModalVisible(true)}}>
                                <IconType name={audienceSelect.icon.name}  disabled color={"#087bd4"}/>
                                <Text style={{textAlign:'center', color:'#087bd4', fontWeight:700}}>{audienceSelect.title}</Text>
                                <IconAntDesign name={"caretdown"}  disabled color={"#087bd4"} size={9}/>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                </View>

                    <KeyboardAvoidingCustom >
                        <TextInput style={{maxHeight:150,fontSize:18, borderBottomWidth:0.3}} multiline ref={refInputContent} value={caption} onChangeText={setCaption} placeholder="What's on your mind?"/>
                        
                        {pickedImagePath.length > 0 && 
                        <TouchableOpacity style={{...styles.audienceSelected, backgroundColor:"#d3d3d38f",  marginTop:10, }} onPress={()=>{setModalVisibleLayout(true)}}>
                            <IconAntDesign name="layout" size={18} color={'black'}/>
                            <Text style={{textAlign:'center', color:'black', fontWeight:700}}>Select Layout</Text>
                        </TouchableOpacity> }
                        
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {pickedImagePath.map((tmp,index)=>{
                                return <ItemShowMedia handleDelete = {()=>deleteImagePicker(index)} type={tmp.type} key={index} uri={tmp.uri}/>
                            })}
                        </ScrollView>
                            
                        <View style={{marginTop:10, display:'flex', flexDirection:'row', gap:20}}>
                        <TouchableOpacity style={{...styles.audienceSelected, backgroundColor:"#1f883d8f", width:120}} onPress={showImagePicker}>
                            <IconEntypo name="image" size={18} color={'green'}/>
                            <Text style={{textAlign:'center', color:'green', fontWeight:700}}>Image/Video</Text>
                        </TouchableOpacity> 

                        <TouchableOpacity style={{...styles.audienceSelected, backgroundColor:"#ce3b3b80", width:120}} onPress={openCamera}>
                            <IconEntypo name="camera" size={18} color={'#ed4a4a'}/>
                            <Text style={{textAlign:'center', color:'#ed4a4a', fontWeight:700}}>Camera</Text>
                        </TouchableOpacity> 

                        </View>   
                    </KeyboardAvoidingCustom>

            </View>
        </View>
    )
}

//Friends Your friends on Facebook
// Only me: Only me



