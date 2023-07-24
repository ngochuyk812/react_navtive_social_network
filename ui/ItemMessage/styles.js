
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom:10
    
  },
  me:{
    flexDirection:'row-reverse',

  },
  notMe:{
    flexDirection:'row',

  },
  customView: {
    padding: 12,
  },
  customViewMe:{
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20,
    borderTopRightRadius:20,
    backgroundColor:'#5790DF'
  },
  customViewNotMe:{
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    borderTopLeftRadius:20,
    backgroundColor:'white'

  },
  textMe:{
    color:'white'
  },
  mediaShow:{
    marginBottom:5
  }
  });