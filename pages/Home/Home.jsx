import { Button, FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "./styles";
import Icon from "react-native-vector-icons/EvilIcons";
import ItemStoryHomee from "../../ui/ItemStoryHome/ItemStoryHome";
import PostItem from "../../ui/PostItem/PostItem";
import { posts, users } from "./service";
import { useEffect, useState } from "react";
import Loading from "../../ui/Loading/Loading";
import * as Notifications from 'expo-notifications';

import { TabActions, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostThunk } from "../../redux/slice/postSlice";
export default function Home(props) {
    const PAGE_SIZE = 10;
    let totalImage = 0;
    const [loading, setLoading] = useState(true)
    const [pageNumber, setPageNumber] = useState(0)

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
    }
    const getPosts = useSelector(state => state.post.posts)
    let dispatch = useDispatch()
    useEffect(()=>{
        getPage()
        setLoading(false)
    },[])
    const getPage = ()=>{
        dispatch(getAllPostThunk({pageNumber:pageNumber, pageSize:PAGE_SIZE}))    
        setPageNumber(pageNumber + 1)
    }
    const schedulePushNotification= async()=> {
        console.log("dsdsdsd");
        await Notifications.scheduleNotificationAsync({
          content: {
            title: "You've got mail! 📬",
            body: 'Here is the notification body',
            data: { data: 'goes here' },
          },
          trigger: { seconds: 1 },
        });
      }
    return (
        <View style={{width:'100%', height:'100%'}}>

            
                    {loading ? <Loading/>:
""        }
            <View style={styles.homeMain}>
            <View style={styles.searchMain}>
                <TouchableOpacity
                activeOpacity={0.8}
                style={{ ...styles.itemNavbar, ...styles.iconSearch}}
                            >
                    <Icon.Button
                        backgroundColor={'rgba(206, 206, 206, 0)'}
                        color={'black'}
                        name={'search'}
                    />
                </TouchableOpacity>
                
                <TextInput
                    style = {styles.inputSearch}
                    placeholder="Search..."
                />
            </View>

            
            <View style={styles.listPost}>
                
                {/* <ScrollView  showsVerticalScrollIndicator={false}>
                        <View style={styles.listStory}>
                            <ScrollView   horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <ItemStoryHomee data={story} create = {true}/>
                                   {users.map((tmp,index)=>{
                                    return (<ItemStoryHomee key={index} data={tmp}  />)
                                   })}

                            </ScrollView>
                        </View>
                        

                </ScrollView> */}
                <FlatList
                            data={getPosts}
                            onEndReached={()=>{getPage()}}
                            onEndReachedThreshold={0.6}
                            renderItem={({item}) => <PostItem data={item} countImages={countImages} loadedImages ={loadedImages} />}
                            keyExtractor={(item,index) => index}
                        /> 
            </View>
        </View>
        </View>

        
        
    )
}


