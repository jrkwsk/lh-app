import {configureStore} from '@reduxjs/toolkit'
import {authReducer} from './authSlice'
import {newUserReducer} from './newUserSlice'
import {usersReducer} from './usersSlice'





export const store = configureStore({
    reducer: {auth: authReducer, newUser: newUserReducer, users: usersReducer }
})