import { Text, View } from "react-native"
import { styles } from './styles'
import { Image } from "react-native"
import { StyleBanners, StyleDefault, StyleLine } from "../ImageGallery/ImageGallery"
import { useState } from "react"
import { useEffect } from "react"
import ModalShowMedia from "../ModalShowMedia/ModalShowMedia"


export default function ItemMessage ({message, color, me}){
    const [text, setText] = useState([])
    const [media, setMedia] = useState([])
    const [modalShow, setModalShow] = useState(false)
    const [indexActive, setIndexActive] = useState(0)

    const randomStyle = (data)=>{
        let rd = Math.floor(Math.random() * 10)
        if(rd %2 === 0){
           return (<StyleLine data={data}  handleSlideShow={(index)=>{
        console.log(index);
      }}
      loadedImages={(index)=>{
      }} />)
        }else{
           return (<StyleBanners data={data}  handleSlideShow={(index)=>{
        console.log(index);
      }}
      loadedImages={(index)=>{
      }} />)

        }
    }
                
    useEffect(()=>{
      let m = []
      message.map((element, index) => {
        if(element.type === "TEXT")
        setText([...text, element])
        else{
          console.log(element, "--------------------------");
          m.push({uri:element.src, type: element.type})
        }
      });
      setMedia(m)

    },[])
    return(
        <View style={me ? {...styles.container, ...styles.me }: {...styles.container, ...styles.notMe}}>
          <ModalShowMedia setModalVisible={setModalShow} modalVisible={modalShow} data={media}/>
      <View style={me ? {...styles.customView, ...styles.customViewMe }: {...styles.customView, ...styles.customViewNotMe}} >
      <View style={styles.mediaShow}>
      {<StyleLine data={media}  onPress={(index)=>{
          setIndexActive(index || 0)
          setModalShow(true)
      }} />}
      </View>
      {text.map((tmp,index)=>{
                return <Text key={index} style={me ? {...styles.text, ...styles.textMe }: {...styles.text, ...styles.textNotMe}}>{tmp.src}</Text>
              
        })}

        
      </View>
    </View>
    )
}