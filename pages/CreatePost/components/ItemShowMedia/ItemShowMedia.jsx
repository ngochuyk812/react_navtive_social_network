import { ResizeMode, Video } from "expo-av";
import { useState } from "react";
import { Dimensions, Image, Modal, TouchableOpacity, View } from "react-native";
import {StyleSheet} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';

export default function ItemShowMedia({uri,type, handleDelete}){
    const [modalVisible, setModalVisible] = useState(false)

    return(
        <View style={styles.main}>

        <Modal
                visible={modalVisible}
                animationType="fade"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
            <View style={styles.modalContainer}>
            <Image
                source={{ uri: uri }}
                style={styles.fullImage}
                resizeMode='contain'
            />
            <TouchableOpacity style={{...styles.bgClose, top:35, right:30}} onPress={()=>setModalVisible(false)}>
                <IconAntDesign name="close" size={16}/>
            </TouchableOpacity>
            </View>
        </Modal>        
            {type === 'video' ?
            <Video
            style={styles.image}
            source={{
              uri: uri,
            }}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
          />
          :    
          <TouchableOpacity
          onPress={()=>{setModalVisible(true)}}
          
          >
            <Image
          source={{uri:uri}}
          style={{...styles.image,}}
          transition ={1000}
      />
          </TouchableOpacity>
        }
              {type === "image" &&  
              <TouchableOpacity style={styles.bgSize} onPress={()=>{setModalVisible(true)}}>
                    <IconEntypo name="resize-full-screen" size={16}/>
                </TouchableOpacity>}
            <TouchableOpacity style={styles.bgClose} onPress={handleDelete}>
                <IconAntDesign name="close" size={16}/>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    main:{
        marginTop:15
    },
    image:{
        height:250,
        width:100,
        marginHorizontal:5,
        borderWidth:0.2,
        borderRadius:10
        
    },
    bgClose:{
        position:'absolute',
        display:'flex',
        backgroundColor:'lightgray',
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        width:30,
        height:30,
        right:10,
        top:5
        
    },
    bgSize:{
        position:'absolute',
        display:'flex',
        backgroundColor:'lightgray',
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        width:30,
        height:30,
        left:10,
        top:5
        
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
      },
      fullImage: {
        width: Dimensions.get('window').width - 30,
        height: Dimensions.get('window').height,

      },
})