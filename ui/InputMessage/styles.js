import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  sendMess:{
    paddingBottom:0,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:12
  },
  inputMess: {
    borderWidth:0.4, padding:10, borderRadius:50,
    flex:2
  },
  showImagePicker: {
    display:'flex',
    flexDirection:'row',
    gap:10,
    marginBottom:10,
    padding:8,
    borderRadius:10,
    backgroundColor:'#e4e5ee'
  },
  itemShowImage:{
    width:80,
    height:80,
  },
  exitShowImage:{
    position:'absolute',
    top:5,
    right:5
  }
})