import { Animated, Button, Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles'
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconIonicons from 'react-native-vector-icons/Ionicons';

import { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";


export default function SlideShow({route}) {
    let navigation = useNavigation()

   const [maxHeightText, setMaxHeightText] = useState(null)
    let data= route.params.data
    let images = data.image

    const goBack = ()=>{
        navigation.goBack()
    }
    const [isOverflow, setIsOverflow] = useState(false);
    const textRef = useRef(null);

      const handleLayout = (e)=>{
        if(e.nativeEvent.lines.length > 4){
            setMaxHeightText(4 );
        }
      }
      const more = ()=>{
        console.log("More");
        console.log(route.params.data);
      navigation.navigate("DetailsPost", { ...route.params.data})
      }
    return (
        <View style={styles.mainSlideShow}>
             <TouchableOpacity  style={styles.header}>
                <Text style={styles.titleHeader}>Post</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goBack} style={styles.goBack}>
                <IconIonicons style={styles.iconBack} disabled name='arrow-back'></IconIonicons>
            </TouchableOpacity>
            <View style={styles.centerSlide}>
                <View style={styles.showImage}>
                <ContentShow images={images}/>
                </View>
                <View style={styles.contentMainSlideShow}>
                <View style={styles.titlePost} >
                    <Image
                        source={{uri:data.user.avatar}}
                        style={styles.avatar}
                    />
                    <View>
                        <Text style={styles.nameUser}>{data.user.name}</Text>
                        <Text style = {{color:'lightgray'}}>{data.timePost}</Text>
                    </View>
                </View>
                <Text style={styles.caption}  numberOfLines={maxHeightText} ellipsizeMode="tail" onTextLayout={handleLayout}>{data.caption.id} </Text>
                {maxHeightText === 4 && <Text onPress={more} style={{color:'white', marginTop:5,marginBottom:5, fontWeight:700}}>Read More</Text>}
                </View>
                <View style={styles.actions}>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                style={styles.itemAction}
                            >
                                <IconAntDesign style={styles.iconAction} name='like2'></IconAntDesign>
                                <Text style={styles.textAction}> Like</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={styles.itemAction}
                            >
                                <IconOcticons style={styles.iconAction} name='comment'></IconOcticons>
                                <Text style={styles.textAction}> Comment</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={styles.itemAction}
                            >
                                <IconOcticons style={styles.iconAction} name='share'></IconOcticons>
                                <Text style={styles.textAction}> Share</Text>
                            </TouchableOpacity>
                </View>
            </View>
            
            
        </View>
    )
}


const ContentShow = ({images})=>{
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
                {images.map((image, imageIndex) => {
                    return (
                    <View style={{width: windowWidth}} key={imageIndex}>
                        <ImageBackground source={{uri: image}} resizeMode="contain" style={styles.card}>
                        
                        </ImageBackground>
                    </View>
                    );
                })}
                </ScrollView>
                <View style={styles.indicatorContainer}>
                {images.map((image, imageIndex) => {
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