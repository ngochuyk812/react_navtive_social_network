
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainSlideShow:{
    height:'100%',
    width:'100%',
    backgroundColor:'#202021'
  },
  actions:{
    height:40,
    width:'100%',
    marginBottom:10,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:20,
    paddingRight:20,
    alignItems:'center',
    borderTopWidth:1,
    borderColor:'#d3d3d354',
  },
  itemAction:{
    display:'flex',
    flexDirection:'row',
    color:'white'
  },
  textAction:{
    color:'white',
    fontSize:16,
    fontWeight:500


  },
  iconAction:{
    color:'white',
    fontSize:16,
  },
  goBack:{
    position:'absolute',
    left:10,
    top:38,
    padding:5,
    zIndex:9999
  },
  iconBack:{
    fontSize:24,
    color:'white'
  },
  header:{
    position:'absolute',
    padding:5,
    left:0,
    right:0,
    top:38,
  },
  titleHeader:{
    fontSize:21,
    textAlign:'center',
    color:'white',
    fontWeight:600
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerSlide:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
    height:'100%',
    gap:24,
    paddingBottom:20
  },
  scrollContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  showImage:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flex:2
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentMainSlideShow:{
     width:'100%',
     padding:10,
  },
  caption:{
    color:'white',
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
    fontSize:17,
    color:'white'
  },
  });