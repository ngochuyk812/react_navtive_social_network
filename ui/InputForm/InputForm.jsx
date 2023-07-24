import { TextInput } from 'react-native'
import { styles } from './styles'
export default function InputForm({style, ...props}){
    return(
        <TextInput
                        onChangeText={props.change}
                        value={props.value}
                        style={{...style, ...styles.textInput}}
                        {...props}
                    />
    )
}