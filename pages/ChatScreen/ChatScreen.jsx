import React, { useState } from 'react';
import { View, FlatList, TextInput, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import { useDispatch } from 'react-redux';
import { test } from '../../redux/slice/authSlice';
import * as ImagePicker from 'expo-image-picker';

const ChatScreen = () => {
  let dispatch = useDispatch()
  const callApi = ()=>{
  }

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


    });

    // Explore the result

    if (!result.canceled) {
        dispatch(test({file:result.assets}))

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


  return (
    <View style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity onPress={showImagePicker}>
          <Text>Call</Text>
        </TouchableOpacity>
    </View>
  );
};

export default ChatScreen;
