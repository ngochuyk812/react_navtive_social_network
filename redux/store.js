import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/authSlice'
import chatSlice from './slice/chatSlice'
import friendSlice from './slice/firendSlice'
import postSlice from './slice/postSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    chat: chatSlice,
    friend: friendSlice,
    post: postSlice

  },
})