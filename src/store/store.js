import {configureStore} from '@reduxjs/toolkit'
import {authReducer} from './authSlice'
import {newUserReducer} from './newUserSlice'




export const store = configureStore({
    reducer: {auth: authReducer, newUser: newUserReducer}
})