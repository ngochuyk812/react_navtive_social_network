import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
const qs = require('qs');

const baseUrl = 'https://ddde-2405-4802-911e-5590-b001-9250-33b9-10fe.ngrok-free.app';
const getUserFromStorage = async()=>{
    let user = await AsyncStorage.getItem('user')
    console.log(user);
    return JSON.parse(user)
}
const initialState = {
  user: null,
  tokenExpo: null
}


const updateUserFromStorage = async () => {
  const userFromStorage = await getUserFromStorage();
  initialState.user = userFromStorage;
};

updateUserFromStorage();

export const signIn = createAsyncThunk(
    'users/signIn',
    async ({username, password, tokenExpo}) => {
        let data ={username, password, tokenExpo}
        console.log(data);
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: baseUrl+'/auth/sign_in',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
          };

        const response = await axios(config);
        return response.data
    }
  )

  export const test = createAsyncThunk(
    'post/test',
    async ({file}) => {
      let user = await AsyncStorage.getItem('user')
      user = JSON.parse(user)

      let token = user.accessToken

      const formData = new FormData();
      formData.append('image', {
        uri: file.uri,
        type: 'image/jpeg',
      });
        let config = {
            method: 'post',
            url: baseUrl+'/post/upload_post',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded',
              "Authorization": "Bearer " + token

            },
            data : {extension:'.jpg'}
          };
        let response = await axios(config)
        console.log(response.data);
         axios.put(response.data, file).then(rs=>{
          console.log(rs);
        }) .catch(function (error) {
          console.log(error);
        });
        return response.data
    }
  )


const savetUser = async(data)=>{
    await AsyncStorage.setItem('user', JSON.stringify(data) )
}
const removeUser = async(accessToken, tokenExpo)=>{
  await AsyncStorage.removeItem('user')

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: baseUrl+'/auth/un_register_expo',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded',
        "Authorization": "Bearer " + accessToken
      },
      data : {
        token:tokenExpo
      }
    };
    console.log(config);
    let res = await axios(config);
    console.log(res.data);

}
export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    logout:(state) => {
      console.log("Logout");
      removeUser(state.user.accessToken, state.tokenExpo)
      state.user = null

    },
    setTokenExpo:(state, action) => {
      state.tokenExpo = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
        let payload = action.payload
        savetUser(payload)
        state.user = payload
    })  
    builder.addCase(test.fulfilled, (state, action) => {
      
  })  
  }
})

// Action creators are generated for each case reducer function
export const { logout, setTokenExpo} = authSlice.actions

export default authSlice.reducer