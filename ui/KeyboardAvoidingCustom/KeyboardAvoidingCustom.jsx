import React, { useEffect, useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  ScrollView,
} from 'react-native';

const KeyboardAvoidingCustom = (props) => {
  const [heightKeyboard, setHeightKeyboard] = useState(0)

    useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (e)=>{
          setHeightKeyboard(e.endCoordinates.height + 55)
      });
      const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', (e)=>{
          setHeightKeyboard(0)
      });
      return () => {
        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove()
      };
    }, []);

  return (
    <ScrollView style={{marginBottom:heightKeyboard, height:'100%'}}>
        {props.children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  inner: {
    padding: 24,
    flex: 1,

  },
  header: {
    fontSize: 36,
  },
  textInput: {
    borderColor: '#000000',
    borderBottomWidth: 1,
  },
  btnContainer: {
    backgroundColor: 'white',
  },
});

export default KeyboardAvoidingCustom;