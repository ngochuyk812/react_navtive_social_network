import { View } from 'react-native'
import {styles} from './styles'
import { Image, Text, TouchableOpacity } from 'react-native'
import { ResizeMode, Video } from 'expo-av'

const StyleLine = ({data, onPress})=>{
    let size = data.length
    let superfluous = 0
    let withImage = 0
    let dataRs = data
    if(size > 3){
        superfluous = size-4
        withImage = 23
        dataRs = dataRs.slice(0, 4)

    }else{
        withImage = (100 / size) - 1;

    }
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
                            <TouchableOpacity onPress={()=>{tmp.type === "IMAGE" ? console.log("IMAGE") : console.log("CIDEWo");}} key={index} style={{...styleAll}}>
                                {tmp.type === "IMAGE" ? 
                                <Image
                                style={{width:'100%', ...styles.style1}}
                                source={{uri:tmp.uri || tmp.src}}
                                /> :
                                <Video
                                    style={{width:'100%', ...styles.style1}}
                                    source={{
                                    uri: tmp.uri || tmp.src,
                                    }}
                                    useNativeControls
                                    resizeMode={ResizeMode.CONTAIN}
                                />
                                  }
                                <View style={styles.viewSuperfluous}><Text style={styles.textSuperfluous}>+{data.length - dataRs.length }</Text></View>
                            </TouchableOpacity>
                            )
                    }else{
                        return(
                            <TouchableOpacity key={index}  style={styleAll}
                                onPress={()=>{tmp.type === "IMAGE" ? onPress(index): console.log("CIDEWo");}}>
                                {tmp.type === "IMAGE" ? 
                                <Image
                                style={{width:'100%', height:'100%', borderRadius:10}}
                                source={{uri:tmp.uri|| tmp.src}}
                                /> :
                                <Video
                                    style={{width:'100%', height:'100%', borderRadius:10}}
                                    source={{
                                    uri: tmp.uri|| tmp.src,
                                    }}
                                    useNativeControls
                                    isLooping={true}
                                    resizeMode={ResizeMode.CONTAIN}
                                />
                                  }

                            </TouchableOpacity>
                            
                            )
                    }
                    
                })
            }
                
        </View>
    )
}

const StyleGrid = ({data, onPress})=>{
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
                        {tmp.type === "IMAGE" ? 
                                <Image
                                    style={styleAll}
                                    source={{uri:tmp.uri}}
                                />  :
                                <Video
                                    style={styleAll}
                                    source={{
                                    uri: tmp.uri,
                                    }}
                                    useNativeControls
                                    resizeMode={ResizeMode.CONTAIN}
                                />
                                  }
                         
                        
                    })
                }

            </View>
        )
}

const StyleDefault = ({data, onPress,})=>{
    let withImage = 0
    let size = data.length
    let superfluous = 0
    let dataRs = data
    if(size > 3){
        superfluous = size-4
        dataRs = dataRs.slice(0, 4)
            withImage = 49
    }else{
        withImage = (100 / (size- 1)) - 1 ;
        if(withImage ===  Infinity)
        withImage = 100
    }

    return(
        <View style={{...styles.container}}>
            {
                dataRs.map((tmp,index)=>{
                    let styleAll 
                    styleAll = {...styles.styleDefault, width:`${withImage}%`}
                    if(data.length - 1 === 2 && index === 2){
                        styleAll = {...styles.styleDefault,  width:'100%'}
                    }
                   
                    if(index === 3 && superfluous > 0){
                        return(
                            <TouchableOpacity onPress={()=>{tmp.type === "IMAGE" ? onPress(index) : ""}} key={index} style={{...styleAll, }}>
                                {tmp.type === "IMAGE" ? 
                                <Image
                                style={{width:'100%',height:150,}}
                                source={{uri:tmp.uri || tmp.src }}
                                />:
                                <Video
                                    style={{width:'100%',height:150,}}
                                    source={{
                                    uri: tmp.uri || tmp.src,
                                    }}
                                    useNativeControls
                                    resizeMode={ResizeMode.CONTAIN}
                                />
                                  }  
                                <View style={styles.viewSuperfluous}><Text style={styles.textSuperfluous}>+{data.length - dataRs.length }</Text></View>
                            </TouchableOpacity>
                            )
                    }else{
                        return(
                            <TouchableOpacity onPress={()=>{tmp.type === "IMAGE" ? onPress(index) : "" }} key={index} style={{...styleAll, }}>

                                {tmp.type === "IMAGE" ? 
                                <Image
                                style={{...styleAll, width:'100%'}}
                                source={{uri:tmp.uri || tmp.src}}
                            />  :
                                <Video
                                style={{...styleAll, width:'100%'}}
                                    source={{
                                    uri: tmp.uri || tmp.src,
                                    }}
                                    useNativeControls
                                    resizeMode={ResizeMode.CONTAIN}
                                />
                                  }  
                            
                            </TouchableOpacity>

                            )
                    }
                })
            }
                
        </View>
    )
}

const StyleBanners = ({data, onPress})=>{
    let withImage = 0
    let size = data.length
    let superfluous = 0
    let dataRs = data
    if(size > 4){
        superfluous = size-5
        dataRs = dataRs.slice(0, 5)
        withImage = 23
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
                                onPress={()=> {tmp.type  ? onPress( index) : ""} }
                            >
                                {tmp.type === "IMAGE" ? 
                                <Image
                                style={{width:'100%',height:150}}
                                source={{uri:tmp.uri || tmp.src}}
                                />:
                                <Video
                                    style={{width:'100%',height:150}}
                                    source={{
                                    uri: tmp.uri || tmp.src,
                                    }}
                                    useNativeControls={true}
                                    resizeMode={ResizeMode.CONTAIN}
                                />
                                  }  
                                
                                <View style={styles.viewSuperfluousNotRadius}><Text style={styles.textSuperfluous}>+{data.length - dataRs.length }</Text></View>
                            </TouchableOpacity>
                            )
                    }else{
                        return(
                            <TouchableOpacity
                                style={styleAll}
                                key={index}

                                onPress={()=> {tmp.type === "IMAGE" ? onPress( index) : ""} }>
                                {tmp.type === "IMAGE" ? 
                                <Image
                                style={{height:'100%', width:'100%'}}
                                source={{uri:tmp.uri || tmp.src}}
                                />:
                                <Video
                                    style={{height:'100%', width:'100%'}}
                                    source={{
                                    uri: tmp.uri || tmp.src,
                                    }}
                                    useNativeControls
                                    resizeMode={ResizeMode.CONTAIN}
                                />
                                  }  
                              
                            </TouchableOpacity>

                            )
                    }
                    
                })
            }
                
        </View>
    )
}

export {StyleLine, StyleBanners, StyleDefault, StyleGrid}