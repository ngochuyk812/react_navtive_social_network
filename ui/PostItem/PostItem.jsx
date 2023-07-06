import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconOcticons from 'react-native-vector-icons/Octicons';

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

    const randomStyle = (data)=>{
        if(data.type === 0){
            return <StyleDefault data={data.image}  handleSlideShow = {handleSlideShow} loadedImages = {loadedImages}/>
        }else{
            let rd = Math.floor(Math.random() * 10)
            if(rd %2 === 0){
               return (<StyleLine data={data.image} handleSlideShow = {handleSlideShow} loadedImages = {loadedImages} />)
            }else{
               return (<StyleBanners data={data.image} handleSlideShow = {handleSlideShow} loadedImages = {loadedImages} />)

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
                {/* Style Show Images */}
                <View style={{minHeight:45}}>
                        {randomStyle(data)}
                        
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


const StyleLine = ({data, handleSlideShow, loadedImages})=>{
    let size = data.length
    let superfluous = 0
    let withImage = 0
    let dataRs = data
    if(size > 3){
        superfluous = size-4
        withImage = 24
        dataRs = dataRs.slice(0, 4)
        loadedImages(data.length - dataRs.length)

    }else{
        withImage = (100 / size) - 1;

    }
    console.log(superfluous);
    return(
        <View style={styles.container }>
            {
                dataRs.map((tmp,index)=>{
                    let styleAll 
                    if(index % 2 === 0){
                        styleAll = {...styles.style1, ...styles.style1_1, width:`${withImage}%`}
                    }else{
                        styleAll = {...styles.style1, ...styles.style1_2, width:`${withImage}%`}

                    }
                    if(index === 3 && superfluous > 0){
                        return(
                            <TouchableOpacity onPress={()=>{handleSlideShow( index)}} key={index} style={{...styleAll}}>
                                <Image
                                style={{width:'100%', ...styles.style1}}
                                source={{uri:tmp}}
                                onLoad={loadedImages(1)}
                                />  
                                <View style={styles.viewSuperfluous}><Text style={styles.textSuperfluous}>+{data.length - dataRs.length }</Text></View>
                            </TouchableOpacity>
                            )
                    }else{
                        return(
                            <TouchableOpacity key={index}  style={styleAll}
                                onPress={()=>{handleSlideShow( index)}}>
                                <Image
                                style={{width:'100%', height:'100%', borderRadius:10}}
                                onLoad={loadedImages(1)}
                                source={{uri:tmp}}
                                />  
                            </TouchableOpacity>
                            
                            )
                    }
                    
                })
            }
                
        </View>
    )
}

const StyleGrid = ({data, countImages})=>{
        return(
            <View style={styles.container }>
                {
                    data.map((tmp,index)=>{
                        let styleAll 
                        if(index % 2 === 0){
                            styleAll = {...styles.style1, ...styles.style1_1, width:`${withImage}%`}
                        }else{
                            styleAll = {...styles.style1, ...styles.style1_2, width:`${withImage}%`}
    
                        }
                        return(
                        <Image
                            style={styleAll}
                            source={{uri:tmp}}
                        />  
                        )
                    })
                }

            </View>
        )
}

const StyleDefault = ({data, handleSlideShow, loadedImages})=>{
    let withImage = 0
    let size = data.length
    let superfluous = 0
    let dataRs = data
    if(size > 3){
        superfluous = size-4
        dataRs = dataRs.slice(0, 4)
        loadedImages(data.length - dataRs.length)
            withImage = 49
    }else{
        withImage = (100 / (size- 1)) - 1 ;
    }
    

    return(
        <View style={styles.container }>
            {
                dataRs.map((tmp,index)=>{
                    let styleAll 
                    styleAll = {...styles.styleDefault, width:`${withImage}%`}
                    if(data.length - 1 === 2 && index === 2){
                        styleAll = {...styles.styleDefault,  width:'100%'}
                    }
                   
                    if(index === 3 && superfluous > 0){
                        return(
                            <TouchableOpacity onPress={()=>{handleSlideShow(index)}} key={index} style={{...styleAll}}>
                                <Image
                                style={{width:'100%',height:150,}}
                                onLoad={loadedImages(1)}

                                source={{uri:tmp}}
                                />  
                                <View style={styles.viewSuperfluous}><Text style={styles.textSuperfluous}>+{data.length - dataRs.length }</Text></View>
                            </TouchableOpacity>
                            )
                    }else{
                        return(
                            <TouchableOpacity onPress={()=>{handleSlideShow(index)}} key={index} style={{...styleAll}}>

                            <Image
                                style={{...styleAll, width:'100%'}}
                                onLoad={loadedImages(1)}
                                source={{uri:tmp}}
                            />  
                            </TouchableOpacity>

                            )
                    }
                })
            }
                
        </View>
    )
}

const StyleBanners = ({data, handleSlideShow, loadedImages})=>{
    let withImage = 0
    let size = data.length
    let superfluous = 0
    let dataRs = data
    if(size > 4){
        superfluous = size-5
        dataRs = dataRs.slice(0, 5)
        loadedImages(data.length - dataRs.length)
        withImage = 24
    }else{
        withImage = (100 / (size- 1)) - 1 ;
    }

    return(
        <View style={styles.container }>
            {
                dataRs.map((tmp,index)=>{
                    if(index=== 0){
                        styleAll = {...styles.styleBanner}
                    }else{
                        styleAll = {...styles.styleSubBanner,  width:`${withImage}%`}
                    }
                    if(index === 4 && superfluous > 0){
                        return(
                            <TouchableOpacity
                            key={index} style={{...styleAll}}
                                onPress={()=> handleSlideShow( index) }
                            >
                                <Image
                                onLoad={loadedImages(1)}
                                style={{width:'100%',height:150}}
                                source={{uri:tmp}}
                                />  
                                <View style={styles.viewSuperfluousNotRadius}><Text style={styles.textSuperfluous}>+{data.length - dataRs.length }</Text></View>
                            </TouchableOpacity>
                            )
                    }else{
                        return(
                            <TouchableOpacity
                                style={styleAll}
                                key={index}

                                onPress={()=> handleSlideShow( index) }>
                            <Image
                                style={{height:'100%', width:'100%'}}
                                onLoad={loadedImages(1)}
                                source={{uri:tmp}}
                            />  
                            </TouchableOpacity>

                            )
                    }
                    
                })
            }
                
        </View>
    )
}

