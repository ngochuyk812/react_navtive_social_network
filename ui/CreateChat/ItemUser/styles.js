import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  friendItem:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:20,
    marginBottom:10,
    borderBottomWidth:0.2,
    paddingBottom:10

  },
  image:{
    width:50,
    height:50,
    borderRadius:50
  },
  name:{
    fontSize:17,
    fontWeight:600
  }
})