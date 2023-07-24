import { useState } from 'react'

import { Modal } from 'react-native'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Text } from 'react-native'
import { ScrollView } from 'react-native'
import {styles} from '../../styles'
import { Image } from 'react-native'



export default ModalPostAudience = ({setModalVisible,modalVisible, setValue, audiences, selected})=>{
    
    const [active, setActive] = useState(selected || audiences[0])
    console.log(active);
    const handleDone = ()=>{
        setValue(active)
        setModalVisible(false)
    }
    return (
        <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                >
                <View  
                    style={styles.centeredView}>
                        <TouchableOpacity onPress={()=>{setModalVisible(false)}} style={styles.closeModal}>
                        </TouchableOpacity>
                        <View  style={styles.bodyModal}>
                        <View style={styles.mainModal}>
            {/* <Header title={"Post audience"} handleClose={()=>{setModalVisible(false)}}/> */}
            <View style={{...styles.headerSelect}}>
                <Text style={{textAlign:'center', fontSize:20, fontWeight:700}}>
                    Post audience
                </Text> 
            </View>
               
            <View style={{flex:1}}>
            <View style={{padding:10}}>
                <Text style={{fontSize:20, fontWeight:700,}}>Who can see this post</Text>
                <Text style={{fontSize:18, marginBottom:10}}>
                    Your post may show up in Feed, on your profile, in search results, and on Messager
                </Text>
                <Text style={{fontSize:18, marginBottom:10}}>
                    Your default audience is set to <Text style={{fontWeight:700}}>Public</Text>, but you can change the audience of this specific post.
                </Text>
                
            </View>
            <Text style={{fontWeight:700, padding:10, fontSize:18}}>Choose Audience</Text>
                <ScrollView style={{padding:10}}>
                {audiences.map((tmp,index)=>{
                    return <ItemAudience key={index} setActive={setActive} active={active} item={tmp} />
                })}
                </ScrollView>


            
            </View>
            <TouchableOpacity onPress={handleDone} style={styles.done}>
                <Text style={styles.doneText}>Done</Text>
            </TouchableOpacity>
        </View>
                        </View>
                </View>
            </Modal>
        
    )
}






const ItemAudience = ({item, setActive, active})=>{
    let IconType = item.icon.type
    return (
        <TouchableOpacity onPress={()=>{setActive(item)}} style={styles.itemAudience}>
                    <IconType name={item.icon.name}  disabled size={22}/>
                    <View style={styles.contentAudient}>
                        <Text style={styles.titleAudient}>
                        {item.title}
                        </Text>
                        <Text style={styles.noteAudient}>
                        {item.detail}
                        </Text>
                    </View>
                    <View style={active.title === item.title ? {...styles.radioAudience, ...styles.activeRadio} : {...styles.radioAudience}}>
                        <View style={active.title  === item.title  && {...styles.selectedAudience} }>
                        </View>                                
                    </View>
                </TouchableOpacity>
    )
}

