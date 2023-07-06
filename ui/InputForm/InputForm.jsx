import { TextInput } from 'react-native'
import { styles } from './styles'
export default function InputForm({style, ...props}){
    return(
        <TextInput
                        style={{...style, ...styles.textInput}}
                        {...props}
                    />
    )
}