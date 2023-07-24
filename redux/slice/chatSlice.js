import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
const qs = require('qs');

const baseUrl = 'https://ddde-2405-4802-911e-5590-b001-9250-33b9-10fe.ngrok-free.app';

const initialState = {
  rooms: [],
  status: ""
}


export const getRoom = createAsyncThunk(
    'chat/getRoom',
    async ({token}) => {
        console.log('chat/getRoom');
        let config = {
            method: 'get',
            url: baseUrl+'/chat/get_room_by_user',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization':'Bearer ' + token
            }
          };

        const response = await axios(config);
        console.log(response.data);
        return response.data
    }
  )

  export const sendMessage = createAsyncThunk(
    'chat/sendMessage',
    async ({medias, text, token, action, idRoom}) => {
        const data = new FormData();
        medias.map(tmp=>{
          data.append('files', tmp);
        })
        data.append('message', text);
        data.append('action', action);
        data.append('idRoom', idRoom);

        console.log('chat/sendMessage', data);

        let config = {
            method: 'POST',
            url: baseUrl+'/chat/send_message',
            data,
            headers: { 
              'Content-Type': 'multipart/form-data; ',
              'Authorization':'Bearer ' + token
            }
          };

        const response = await axios(config);
        
        return response.data
    }
  )

export const getMessageByPage = createAsyncThunk(
    'chat/getMessageByPage',
    async ({idRoom, page, token}) => {
        console.log('chat/getMessageByPage');
        let config = {
            method: 'get',
            url: baseUrl+'/chat/get_detail_message_page?room='+idRoom+'&page='+page,
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization':'Bearer ' + token
            }
          };
        
        const response = await axios(config);
        console.log("Data get message: ", response.data);
        return {data:response.data, page}
    }
  )

export const createRoom = createAsyncThunk(
    'chat/createRoom',
    async ({usernames, callback}) => {
        let user = await AsyncStorage.getItem('user')
        user = JSON.parse(user)
        let token = user.accessToken
        usernames = [...usernames, user.username]
        console.log('chat/createRoom', usernames);

        let config = {
            method: 'post',
            url: baseUrl+'/chat/create_room',
            data:{usernames: JSON.stringify(usernames)},
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization':'Bearer ' + token
            }
          };
        
        const response = await axios(config);
        callback(response.data)
        console.debug("Create room", response.data.participants);
        return response.data
    }
  )


export const chatSlice = createSlice({
  name: 'chatSlice',
  initialState,
  reducers: {
    addMessage:(state, action) => {
      console.log("Cập nhập tin nhắn --------------------------------------------");

      let newMessage = action.payload
      let rooms = state.rooms
      rooms.forEach((tmp, index)=>{
        if(tmp.id === newMessage.room){
            rooms[index] = {...tmp, messages:[...tmp.messages, newMessage]}
        }
      })
      state,rooms = rooms;
    },

  
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRoom.fulfilled, (state, action) => {
          let payload = action.payload
          console.log("Rooms:");
          payload.forEach((tmp,index)=>{
            tmp.messages.reverse()
          })
          state.rooms = payload
      }) 
      .addCase(sendMessage.fulfilled, (state, action) => {
        let payload = action.payload
        console.log("Upload:");
        
    }) 
    .addCase(createRoom.pending, (state, action) => {
      state.status = ""
      
  })
    .addCase(createRoom.fulfilled, (state, action) => {
      let payload = action.payload
      state.rooms = [...state.rooms, action.payload]
      state.status = "craeteRoom"

      console.log("Create Room:", payload);
      
  }) 
      .addCase(getMessageByPage.fulfilled, (state, action) => {
        let payload = action.payload.data
        if(!payload || payload.length ===0 )
          return

        let page = action.payload.page
        let rooms = state.rooms
        rooms.forEach((tmp,index)=>{
          if(tmp.id === payload[0].room)
            if(page === 0){
              tmp.messages = payload.reverse()
            }else{
              tmp.messages = [...tmp.messages, payload.reverse()]

            }
        })
        state.rooms = rooms
    }) 
  }
})

export const {addMessage} = chatSlice.actions

export default chatSlice.reducer