

import { store } from './redux/store';
import { Provider, useSelector } from 'react-redux'
import Config from './Config';
import { StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  
  return (
    <Provider store={store}>
      <StatusBar style="black" />
      <SafeAreaView style={styles.AndroidSafeArea}>
      <Config/>
      </SafeAreaView>
    </Provider>
  );
}



const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
  }
});