
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainCreate:{
    height:'100%',
    width:'100%',
    padding:10
  },
  titlePost:{
    marginBottom:8,
    display:'flex',
    flexDirection:'row',
    gap:10,
    alignItems:'center',

  },
  avatar:{
    height:45,
    width:45,
    borderRadius:50
  },
  nameUser:{
    fontWeight:700,
    fontSize:17,

  },
  select:{
    paddingHorizontal:5,
    paddingVertical: 10,
    paddingLeft:0,
    
  },
  headerSelect:{
    backgroundColor:"#d6daddbd",
    top:0,
    left:0,
    right:0,
    paddingVertical:10,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  bodyModal:{
    position:'absolute',
    top:220,
    left:5,
    right:5,
    bottom:0,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    

  },
  centeredView:{
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    width:'100%',
  },
  closeModal:{
    position:'absolute',
    bottom:200,
    top:0,
    left:0,
    right:0,
    backgroundColor:'#a3a3a375'
  },
  audienceSelected:{
    paddingVertical:4,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    gap:5,
    backgroundColor:'#0b83e04d'
    
  },
  itemAudience:{
    display:'flex',
    flexDirection:'row',
    gap:10,
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:10,
    paddingBottom:10,
    borderBottomWidth: 0.5,
    borderColor:'lightgray'


  },
  titleAudient:{
    fontSize:18,
    fontWeight:700,
  },
  noteAudient:{
    fontSize:16,
    color:'#797878'
  },
  radioAudience:{
    width:20,height:20,
    backgroundColor:'white',
    borderRadius: 50,
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center'
  },
  contentAudient:{
    flex:1
  },
  selectedAudience:{
    width:12,height:12,
    backgroundColor:'#0582e2',
    borderRadius: 50,
  },
  activeRadio:{
    borderColor:'#0582e2',
    borderWidth:1.5,

  },
  done:{

    paddingVertical:10,
    backgroundColor:"#0582e2",
    marginHorizontal:20,
    borderRadius:10

  },
  doneText:{
    textAlign:'center',
    color:'white',
    fontWeight:700,
    fontSize:17
  },
  mainPost:{
    backgroundColor:'red'
  },
  mainModal:{
    width:'100%', 
  height:'100%',
   backgroundColor:'white', 
      borderWidth:1,
  borderColor:'#d6daddbd', 
  borderTopLeftRadius:20,
  borderTopRightRadius:20,
    display:'flex',
    justifyContent:'space-between',
    gap:20,
    paddingBottom:30
}
 
  
  });

  export const pickerStyle = StyleSheet.create({
    inputIOS: {
      fontSize: 14,
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderWidth: 0.3,
      borderRadius: 4,
      color: 'black',
  },
  inputAndroid: {
      fontSize: 14,
      paddingHorizontal: 5,
      paddingVertical: 10,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
  }
  })