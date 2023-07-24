import { useState } from 'react'

import { Modal } from 'react-native'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Text } from 'react-native'
import { ScrollView } from 'react-native'
import {styles} from '../../styles'
import { Image } from 'react-native'




export default ModalLayout = ({modalVisible, setModalVisible, setValue, value, data})=>{
     
    const [active, setActive] = useState(value || 0)
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
                    Layout
                </Text> 
            </View>
               
            <View style={{flex:1}}>
            <View style={{padding:10}}>
                <Text style={{fontSize:20, fontWeight:700,}}>Layout for displaying images and videos</Text>
                <Text style={{fontSize:18, marginBottom:10}}>
                Choose your post's video image display layout
                </Text>
                <Text style={{fontSize:18, marginBottom:10}}>
                    Your default layout is set to <Text style={{fontWeight:700}}>Default</Text>, but you can change the layout of this specific post.
                </Text>
                
            </View>
            <Text style={{fontWeight:700, padding:10, fontSize:18}}>Choose Layout</Text>
                <ScrollView style={{padding:10}}>
                {/* Data */}
                {data.map((tmp,index)=>{
                   return <ItemLayout 
                    key={index}
                    item={tmp} 
                    active={active}
                    setActive={setActive}/>
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


const ItemLayout = ({item, setActive, active})=>{
    return (
        <TouchableOpacity onPress={()=>{setActive(item)}} style={styles.itemAudience}>
                    <Image resizeMode="contain" source={item.image} style={{width:70, height:70}}/>
                    <View style={styles.contentAudient}>
                        <Text style={styles.titleAudient}>
                        {item.title}
                        </Text>
                        <Text style={styles.noteAudient}>
                        {item.detail}
                        </Text>
                    </View>
                    <View style={active.id === item.id ? {...styles.radioAudience, ...styles.activeRadio} : {...styles.radioAudience}}>
                        <View style={active.id  === item.id  && {...styles.selectedAudience} }>
                        </View>                                
                    </View>
                </TouchableOpacity>
    )
}