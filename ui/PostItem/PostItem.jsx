import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconOcticons from 'react-native-vector-icons/Octicons';
import {StyleBanners, StyleDefault, StyleLine, StyleGrid} from '../ImageGallery/ImageGallery'
import {styles} from './styles'

// Ghi hoa chu cai dau sau bo di 
function capitalizeFirstLetter(str) {
    var firstChar = str.charAt(0);
    var capitalizedChar = firstChar.toUpperCase();
    
    var capitalizedStr = capitalizedChar + str.slice(1);
    
    return capitalizedStr;
  }



export default function PostItem({data, countImages, loadedImages}){
    let navigation = useNavigation()
    
    const handleSlideShow =( indexActive) =>{
        navigation.navigate('Slideshow',{data, indexActive})
    }

    const getLayout = (data)=>{
        if(data.layout === 0){
            return <StyleDefault data={data.medias}  handleSlideShow = {handleSlideShow} loadedImages = {loadedImages}/>
        }else{
            if(data.layout === 1){
               return (<StyleBanners data={data.medias} handleSlideShow = {handleSlideShow} loadedImages = {loadedImages} />)
            }else{
               return (<StyleLine data={data.medias} handleSlideShow = {handleSlideShow} loadedImages = {loadedImages} />)

            }
        }
                  
    }
    const handleDetails = ()=>{
        navigation.navigate("DetailsPost", data)
    }
    return(
        <View style={{backgroundColor:'white', marginBottom:10}}>
                    <TouchableOpacity  style = {styles.postItem } 
        activeOpacity={0.8}
        onPress={handleDetails}>
            <View style={styles.titlePost} >
                <Image
                    source={{uri:'https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien-600x600.jpg'}}
                    style={styles.avatar}
                />
                <View>
                    <Text style={styles.nameUser}>{data.userDTO ? data.userDTO.fullName  : "No name"}</Text>
                    <Text>{data.createAt}</Text>
                </View>
            </View>

            <View >
                <Text style={styles.contentPost}>
                {data.caption}
                </Text>
                {/* Style Show Images */}
                <View style={{minHeight:45}}>
                        {getLayout(data)}
                        
                </View>
            </View>
            
        </TouchableOpacity >
        
        <View style={styles.showReaction}>
        <TouchableOpacity
            activeOpacity={0.6}
            style={styles.itemShowReaction}
        >
            <IconAntDesign style={styles.iconShowReaction} name='like2'></IconAntDesign>
            <Text style={styles.textShowReaction}> 300</Text>
        </TouchableOpacity>
        <TouchableOpacity
            activeOpacity={0.6}
            style={styles.itemShowReaction}
        >
            <Text style={styles.textShowReaction}> 15 bình luận</Text>
        </TouchableOpacity>
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

    )

}



