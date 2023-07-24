
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main:{
    height:'100%',
    width:'100%',
    
  },
  mainHeader:{
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:12,
  },
  createMessage:{
    fontSize:30,
    position:'absolute',
    top:0,
    bottom:0,
    right:20,
    justifyContent:'center'
    

  },
  title:{
    fontSize:20,
    fontWeight:500

  },
  bodyModal:{
    backgroundColor:'white',
    position:'absolute',
    top:90,
    left:5,
    right:5,
    bottom:0,
    borderWidth:0.3,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'

  },
  centeredView:{
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    width:'100%',
    height:'100%'
  },
  closeModal:{
    position:'absolute',
    bottom:90,
    top:0,
    left:0,
    right:0,
  }

  });