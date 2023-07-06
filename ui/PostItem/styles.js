import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  postItem:{
    backgroundColor:'white',
    width:'100%',
    borderRadius:15,
    paddingTop:10,
    paddingLeft:10,
    paddingRight:10,

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
  style1:{
    height:300,
    borderRadius:10,
    resizeMode:'cover'
  },
  styleBanner:{
    height:150,
    width:'100%',

    
  },
  styleSubBanner:{
    height:150,

  },
  styleDefault:{
    height:150
  },
  viewSuperfluous:{
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#4341409c',
    borderRadius:10

  },
  viewSuperfluousNotRadius:{
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#4341409c',

  },
  textSuperfluous:{
    fontSize:30,
    color:'white'
  },
  style1_2:{
    marginTop:10
  },
  contentPost:{
    marginBottom:10
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "space-around",
    gap:5
  },
  style2_1:{
    height:300,
    width:'45%'
  },
  style2_2:{
    height:150,
    width:'45%'
  },
  style2_3:{
    height:150,
    width:'30%'
  },
  actions:{
    marginTop:10,
    height:40,
    width:'100%',
    backgroundColor:'#9f9e9ec7',
    marginBottom:10,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:20,
    paddingRight:20,
    alignItems:'center',
    borderRadius:20,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  showReaction:{
    width:'100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:10,
    paddingRight:10,

  },
  itemShowReaction:{
    display:'flex',
    flexDirection:'row',
    marginTop:20,
  },
  iconShowReaction:{
    color:'blue',
    fontSize:16,
    fontWeight:0

  },
  textShowReaction:{
    color:'black',
    fontSize:16,
    fontWeight:600

  },
  itemAction:{
    display:'flex',
    flexDirection:'row',
    color:'white'
  },
  textAction:{
    color:'white',
    fontSize:17,
    fontWeight:600

  },
  iconAction:{
    color:'white',
    fontSize:17
  }
})