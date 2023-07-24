import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  itemMessage:{
    marginRight:10,
    marginLeft:10,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    gap:10,
    marginBottom:10,
    borderBottomWidth:0.2,
    paddingBottom:7
  },
  titleMessage:{
    flex:2
  },
  imageStory:{
    width:66,
    height:66,
    borderRadius:50,

  },
  message:{
    fontWeight:500,
    fontSize:16,
    
  },
  nameUser:{
    fontWeight:600,
    fontSize:18,
    marginBottom:2

    
  },
  iconStatus:{
    
    position:'absolute',
    right:1,
    bottom:2,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'red',
    padding:2,
    
    borderRadius:50
  },
  containImg:{
    width:66,
    height:66,
  }
})