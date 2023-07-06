
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
      mainNav:{
        display:'flex',
        height:'100%',
        flexDirection:'row',
        justifyContent:'space-between',

      },
      subNav:{
        display:'flex',
        height:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'#017cfea6',
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

      },
      mainPlus:{
        backgroundColor:'#fff9',
        padding:8,
        paddingRight:0,
        borderRadius:50,
        borderWidth:1,
        zIndex:2,
        borderColor:'lightgray',
        
      },

      
     });