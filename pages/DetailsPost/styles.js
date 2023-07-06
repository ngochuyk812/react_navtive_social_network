
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  detailPost:{
     backgroundColor:'white',
    padding:15,
    paddingTop:30,
  },
    
titlePost:{
      marginBottom:8,
      display:'flex',
      flexDirection:'row',
      gap:10,
      alignItems:'center',
  
    },
    avatar:{
      height:50,
      width:50,
      borderRadius:50
    },
    nameUser:{
      fontWeight:600,
      fontSize:17
    },
    imageShow:{
      height:270,
      resizeMode:"contain",
      marginBottom:5
    },
    actions:{
      
      height:40,
      width:'100%',
      backgroundColor:'#9f9e9ee3',
      
      marginBottom:10,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      paddingLeft:20,
      paddingRight:20,
      alignItems:'center',
      borderRadius:20
      
    },
    itemAction:{
      display:'flex',
      flexDirection:'row',
      color:'white'
    },
    textAction:{
      color:'white',
      fontSize:18
  
    },
    iconAction:{
      color:'white',
      fontSize:18
    }
  });