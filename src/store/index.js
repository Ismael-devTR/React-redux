import { configureStore, createSlice } from '@reduxjs/toolkit'
import users from './slices/users';

 export default configureStore({
     reducer: {
        users
     }
 })
