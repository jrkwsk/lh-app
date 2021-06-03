import {configureStore} from '@reduxjs/toolkit'
import {authReducer} from './authSlice'
import {userReducer} from './userSlice'
import {newUserReducer} from './newUserSlice'




export const store = configureStore({
    reducer: {user: userReducer, auth: authReducer, newUser: newUserReducer}
})