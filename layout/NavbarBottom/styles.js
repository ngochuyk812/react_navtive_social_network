
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
      mainNav:{
        display:'flex',
        height:75,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#373737',
        position:'absolute',
        bottom:0,
        left:0,
        right:0
      },
      subNav:{
        display:'flex',
        height:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        flex:2,
        paddingTop:15,
        
      },
      subNavL:{
        borderTopRightRadius:40
      }
      ,
      subNavR:{
        borderTopLeftRadius:40
      }
      ,
      centerNav:{
        flex:1,
        alignItems:'center',
        transform: [{translateY: -25}],

      },
      mainPlus:{
        backgroundColor:'#017CFE',
        padding:8,
        paddingRight:0,
        borderRadius:50,
        borderWidth:1,
        zIndex:2,
        borderColor:'lightgray',
        
      },

      
     });