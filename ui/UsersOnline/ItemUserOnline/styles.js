import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  itemStory:{
    marginRight:10,
    marginLeft:10,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:2,
    
  },
  imageStory:{
    width:66,
    height:66,
    borderRadius:50,

  },
  nameUser:{
    textAlign:'center',
    fontWeight:500,
    width:80
    
  },
  iconStatus:{
    position:'absolute',
    right:-17,
    bottom:-20,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    color:'#66ff78'
  },
  containImg:{
    width:66,
    height:66,
  }
})