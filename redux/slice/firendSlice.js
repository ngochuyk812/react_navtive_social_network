import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const baseUrl = 'https://ddde-2405-4802-911e-5590-b001-9250-33b9-10fe.ngrok-free.app';

const initialState = {
  friends: [],
}


export const getFriend = createAsyncThunk(
    'chat/firendSlice',
    async () => {
        console.log('chat/firendSlice');
        let user = await AsyncStorage.getItem("user")
        let token
        if(user){
          token = JSON.parse(user).accessToken
        }
        console.log(user, token);

        let config = {
            method: 'get',
            url: baseUrl+'/friend/get_friend',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization':'Bearer ' + token
            }
          };

        const response = await axios(config);
        
        return response.data
    }
  )




export const friendSlice = createSlice({
  name: 'friendSlice',
  initialState,
  reducers: {
    // addMessage:(state, action) => {
    //   let newMessage = action.payload
    //   let rooms = state.rooms
    //   rooms.forEach((tmp, index)=>{
    //     if(tmp.id === newMessage.room){
    //         rooms[index] = {...tmp, messages:[...tmp.messages, newMessage]}
    //     }
    //   })
    //   state,rooms = rooms;
    //   console.log("Cập nhập tin nhắn ");
    // },

  
  },
  extraReducers: (builder) => {
    builder
    .addCase(getFriend.fulfilled, (state, action) => {
      let payload = action.payload
      console.log("Friened:", payload);
    
      state.friends = payload
  }) 
      
  }
})

export const {} = friendSlice.actions

export default friendSlice.reducer