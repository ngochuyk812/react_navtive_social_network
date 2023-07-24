import { Animated, Easing, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { useEffect, useRef } from 'react';

export default function LoadongLazy(){
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1500,
                easing: Easing.linear,
      
                useNativeDriver: true,
              })
        ).start();
      }, [fadeAnim]);
      const spin = fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      })
    return(
        <View style = {styles.loading }>
            <Animated.View
                style={{transform:[{rotate:spin }]}}

            >
            <IconAntDesign 
                name='loading1' size={50} color={'black'}>
                </IconAntDesign>
            </Animated.View>
        </View>

    )
}