import { Button, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "./styles";
import Icon from "react-native-vector-icons/EvilIcons";
import ItemStoryHomee from "../../ui/ItemStoryHome/ItemStoryHome";
import PostItem from "../../ui/PostItem/PostItem";
import { posts, users } from "./service";
import { useEffect, useState } from "react";
import Loading from "../../ui/Loading/Loading";
import { TabActions, useNavigation } from "@react-navigation/native";
export default function Home(props) {
    let totalImage = 0;
    const [loading, setLoading] = useState(true)
    const [loadingSuscess, setLoadingSuscess] = useState(0)
    let navigation = useNavigation()
    let story = {
        fullName: "Ngọc Huy",
        avatar:"https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/5/9/804111/Dep-Trai-Nhat-The-Gi-05.jpg"
    }
    let postsRs = posts.slice(0,10)
    postsRs.map(tmp=>{
        totalImage+= tmp.image.length
    })
    postsRs.forEach((tmp, index)=>{
        postsRs[index] = {...tmp, type: Math.floor(Math.random() * 2)}
    })

    const countImages =(total)=>{
    }
    const loadedImages =(total)=>{
        totalImage = totalImage -total
        console.log(totalImage);
    }
    const init = ()=>{
        postsRs.map(tmp=>{
            totalImage+= tmp.image.length
        })

    }
    useEffect(()=>{
        console.log('Home focused');
            if(totalImage === 0){
                console.log("hoan thanh", loadingSuscess);
                setTimeout(()=>{setLoading(false)}, 500)
                
            }
        // navigation.addListener('focus',()=>{

        // })

        // navigation.addListener('blur',()=>{
        //     setLoading(true)

        // })

    },[])
    return (
        <View style={{width:'100%', height:'100%'}}>
                    {loading ? <Loading/>:
""        }
            <View style={styles.homeMain}>
            <View style={styles.searchMain}>
                <TouchableOpacity
                activeOpacity={0.8}
                style={{ ...styles.itemNavbar}}
                            >
                    <Icon.Button
                        backgroundColor={'rgba(206, 206, 206, 0)'}
                        color={'black'}
                        style={styles.iconSearch}
                        name={'search'}
                    />
                </TouchableOpacity>
                
                <TextInput
                    style = {styles.inputSearch}
                    placeholder="Search..."
                />
            </View>

            
            <View style={styles.listPost}>
                
                <ScrollView  showsVerticalScrollIndicator={false}>
                        <View style={styles.listStory}>
                            <ScrollView   horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <ItemStoryHomee data={story} create = {true}/>
                                   {users.map((tmp,index)=>{
                                    return (<ItemStoryHomee key={index} data={tmp}  />)
                                   })}

                            </ScrollView>
                        </View>

                        {postsRs.map((tmp,index)=>{
                          return (<PostItem key={index} data={tmp} countImages={countImages} loadedImages ={loadedImages} />)
                        })}
                        

                </ScrollView>
            </View>
        </View>
        </View>

        
        
    )
}


