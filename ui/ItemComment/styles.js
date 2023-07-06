import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({

  titlePost:{
    marginBottom:8,
    display:'flex',
    flexDirection:'row',
    gap:10,
    
  },
  avatar:{
    height:40,
    width:40,
    borderRadius:50
  },
  nameUser:{
    fontWeight:600,
    fontSize:17
  },
  content:{
    marginTop:10
  },
  rightComment:{
    backgroundColor:'#efefef',
    padding:10,
    borderRadius: 15,
    flex:2
  },
  action_reply:{
    fontSize:14,
    color:'#8b8888',
    fontWeight:700
  },
  main_action:{
    display:'flex',
    flexDirection:'row',
    gap:20,
    paddingLeft:10,
    marginTop:2,

  }

  
})