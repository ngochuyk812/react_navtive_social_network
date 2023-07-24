
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main:{
    height:'100%',
    width:'100%',
    display:'flex'

  },
  mainHeader:{
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:5,  
    flexDirection:'row',
    gap:15,
    paddingLeft:20,
    paddingRight:20,
    marginTop:5,
    borderBottomWidth:0.2,
    paddingBottom:10
  },
  menuChat:{
    fontSize:30,

  },
  goBack:{
    fontSize:30,

  },
  fullName:{
    fontSize:18,
    fontWeight:500

  },
  statusHeader:{
    fontSize:15,
    fontWeight:500,
    color:"#8e8e8e"

  },
  imageAvatar:{
    width:45,
    height:45,
    borderRadius:50
  },
  mainTitle:{
    display:'flex',
    flexDirection:'row',
    flex:2,
    gap:5,
    alignItems:'center'
  },

  inputKeyboard: {
    height: 40,
    fontSize: 16,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  });