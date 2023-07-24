import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { getAllPost, uploadPost } from '../api/postApi';

const baseUrl = 'https://ddde-2405-4802-911e-5590-b001-9250-33b9-10fe.ngrok-free.app';
const getUserFromStorage = async()=>{
    let user = await AsyncStorage.getItem('user')
    console.log(user);
    return JSON.parse(user)
}
const initialState = {
  posts:[]
}

  export const createPost = createAsyncThunk(
    'post/create_post',
    async({ caption, audience, layout, medias })=>{
    let rs = await uploadPost({ caption, audience, layout, medias })
    return rs
    }
  )

  export const getAllPostThunk = createAsyncThunk(
    'post/get_all',
    async({pageNumber, pageSize})=>{
    let rs = await getAllPost(pageNumber, pageSize)
    return rs
    }
  )


export const postSlice = createSlice({
  name: 'postSlice',
  initialState, 
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder.addCase(createPost.fulfilled, (state, action) => {
      console.log(action.payload, "Done")
      state.posts = [action.payload,...state.posts]
    })  
    .addCase(getAllPostThunk.fulfilled, (state, action) => {
      console.log(action.payload, "Done")

      state.posts = [...state.posts, ...action.payload]
    })  
  }
})

// Action creators are generated for each case reducer function
export const {} = postSlice.actions

export default postSlice.reducer