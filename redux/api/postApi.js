import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { uploadImageToAws, uploadMediasToAws } from "./awsApi";
const baseUrl = 'https://ddde-2405-4802-911e-5590-b001-9250-33b9-10fe.ngrok-free.app';

const getTokenFromStorage = async()=>{
    let user = await AsyncStorage.getItem('user')
    console.log(user);
    user = JSON.parse(user)
    return user.accessToken
}

export const uploadPost =async({caption, audience, layout, medias}) => {
        let token = await getTokenFromStorage()
        let linkMediaAws = await uploadMediaPost( medias)
        let dataUploadPost = {
            medias: linkMediaAws,
            caption,
            audience: audience.id,
            layout: layout.id
        }
        console.log(dataUploadPost);
        let config = {
              method: 'post',
              url: baseUrl+'/post/upload_post',
              headers: { 
                  'Content-Type': 'application/json',
                  "Authorization": "Bearer " + token
              },
              data : dataUploadPost
            };
        let response = await axios(config)
        return response.data

}

export const getAllPost = async (pageNumber, pageSize)=>{
    let token = await getTokenFromStorage()
    let config = {
        method: 'get',
        url: baseUrl+'/post/get_all?pageNumber='+pageNumber+'&pageSize=' + pageSize,
        headers: { 
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + token
        }
      };

  let response = await axios(config)
  return response.data
}

const uploadMediaPost = async(medias)=>{
    let token = await getTokenFromStorage()
    let extensions = []
    medias.map(tmp=>{
      tmp.type === "video" ? extensions.push('.mp4') : ""
      tmp.type === "image" ? extensions.push('.jpg') : ""
    })
    console.log(extensions);
    let config = {
          method: 'post',
          url: baseUrl+'/post/init_prisigned_urls',
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',
            "Authorization": "Bearer " + token
          },
          data : {extensions: JSON.stringify(extensions)}
        };
    let response = await axios(config)
    let presignenUrls = response.data
    let linkMediaAws = await uploadMediasToAws(presignenUrls, medias)
    return linkMediaAws
}
