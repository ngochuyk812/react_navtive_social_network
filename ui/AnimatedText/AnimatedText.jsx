import { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";

export default function AnimatedText({text, styles}){
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 1500,
                    useNativeDriver: true,
                    easing:Easing.inOut(Easing.linear) ,
          
                  }),
                  Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 1500,
                    useNativeDriver: true,
                    easing:Easing.inOut(Easing.linear) ,
          
                  }) 
            ])
        ).start()
        ;
      };
      useEffect(()=>{
        fadeIn()
      },[fadeAnim])

    return(
        <Animated.Text
        style={{...styles,opacity: fadeAnim}}>{text}</Animated.Text>
    )
}
