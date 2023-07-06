
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    mainLogin: {
      display: 'flex',
      justifyContent:'center',
      width:"100%",
      height:"100%",
      alignItems:'center',
      paddingTop:20,
      gap:30
    },
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    logo:{
      flex:1,
      width: "100%"
      
    },
    buttonMedia:{
      padding:8,
      paddingLeft:10,
      paddingRight:10
    },
    appButtonContainer:{
      backgroundColor:"#5790DF",
      padding: 10,
      borderRadius:10,
    },
    appButtonText:{
      textAlign: 'center',
      color: 'white'
    },
    content:{
      flex:2,
      width:'100%',
      paddingLeft:30,
      paddingRight: 30
    },
    signInMedia:{
      display:'flex',
      flexDirection:'row',
      width:"100%",
      justifyContent:'space-around'
    },
    button_hover: {
      opacity:0.3
    },
    buttonBold:{color:'black', fontWeight:"bold", textAlign:'center', marginTop:10}
  });