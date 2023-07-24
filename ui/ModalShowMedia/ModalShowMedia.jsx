import { useRef, useState } from 'react'

import { Modal, useWindowDimensions } from 'react-native'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Text } from 'react-native'
import { ScrollView } from 'react-native'
import {styles} from './styles'
import { Image } from 'react-native'
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { Animated } from 'react-native'
import { ResizeMode, Video } from 'expo-av'
import { ImageBackground } from 'react-native'




export default ModalShowMedia = ({modalVisible, setModalVisible, data, index})=>{
     
    const [active, setActive] = useState(index || 0)
    const handleDone = ()=>{
        setModalVisible(false)
    }
    console.log(data, "--------x");
    return (
        <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                >
                <View style={{backgroundColor:'black', top:0, left:0, right:0, bottom:0, flex:1}}>
                    <TouchableOpacity 
                        onPress={handleDone}
                        style={{ right:30, top:50, position:'absolute', zIndex:4, backgroundColor:'black', borderRadius:50}}
                    >
                        <IconAntDesign name='closecircleo' size={30} color={'white'}/>
                    </TouchableOpacity>
                    <ContentShow medias={data}/>
                    
                </View>
            </Modal>
        
    )
}

const ContentShow = ({medias})=>{
    const scrollX = useRef(new Animated.Value(0)).current;

    const {width: windowWidth} = useWindowDimensions();
    return(
        <View style={styles.scrollContainer}>
            <ScrollView
                horizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [
                    {
                    nativeEvent: {
                        contentOffset: {
                        x: scrollX,
                        },
                    },
                    },
                ],{useNativeDriver: false}   
                
                )}
                scrollEventThrottle={1}>
                {medias.map((media, imageIndex) => {
                    return (
                    <View style={{width: windowWidth}} key={imageIndex}>
                        {media.type === "IMAGE" ?
                        <ImageBackground source={{uri: media.uri}} resizeMode="contain" style={styles.card}>
                        </ImageBackground>:
                        <Video
                        style={styles.card}
                        source={{
                        uri: media.uri,
                        }}
                        useNativeControls
                        isLooping
                        resizeMode={ResizeMode.COVER}
                    />}
                    </View>
                    );
                })}
                </ScrollView>
                <View style={styles.indicatorContainer}>
                {medias.map((image, imageIndex) => {
                    const width = scrollX.interpolate({
                    inputRange: [
                        windowWidth * (imageIndex - 1),
                        windowWidth * imageIndex,
                        windowWidth * (imageIndex + 1),
                    ],
                    outputRange: [8, 16, 8],
                    extrapolate: 'clamp',
                    });
                    return (
                    <Animated.View
                        key={imageIndex}
                        style={[styles.normalDot, {width}]}
                    />
                    );
                })}
                </View>
            </View>
    )
}