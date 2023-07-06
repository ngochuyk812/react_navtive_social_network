import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import PostItem from '../../ui/PostItem/PostItem';
import ShowComment from '../../ui/ShowComment/ShowComment';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconOcticons from 'react-native-vector-icons/Octicons';
export default function DetailsPost({route}){
    let navigation = useNavigation()
    let data= route.params
    // Ghi hoa chu cai dau sau bo di 
    function capitalizeFirstLetter(str) {
        var firstChar = str.charAt(0);
        var capitalizedChar = firstChar.toUpperCase();
        
        var capitalizedStr = capitalizedChar + str.slice(1);
        
        return capitalizedStr;
      }

    return(
        <ScrollView style={styles.detailPost}>
            <View style={styles.mainDetailPost}>
                <View style={styles.titlePost} >
                    <Image
                        source={{uri:data.user.avatar}}
                        style={styles.avatar}
                    />
                    <View>
                        <Text style={styles.nameUser}>{data.user.name}</Text>
                        <Text>{data.timePost}</Text>
                    </View>
                </View>
                <View >
                    <Text style={styles.contentPost}>
                    {capitalizeFirstLetter(data.caption.id)}
                    </Text>
                    <View style={{marginTop:10}}>
                    {data.image.map((tmp, index)=>{
                        return (
                            <Image
                            key={index}
                            style={{...styles.imageShow}}
                            source={{uri:tmp}}
                            />
                        )
                        
                    })}
                    </View>
                    <View style={styles.actions}>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                style={styles.itemAction}
                            >
                                <IconAntDesign style={styles.iconAction} name='like2'></IconAntDesign>
                                <Text style={styles.textAction}> Like</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={styles.itemAction}
                            >
                                <IconOcticons style={styles.iconAction} name='comment'></IconOcticons>
                                <Text style={styles.textAction}> Comment</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={styles.itemAction}
                            >
                                <IconOcticons style={styles.iconAction} name='share'></IconOcticons>
                                <Text style={styles.textAction}> Share</Text>
                            </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ShowComment/>
        </ScrollView>
    )
}