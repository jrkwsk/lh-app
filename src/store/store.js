import {configureStore} from '@reduxjs/toolkit'
import {authReducer} from './authSlice'
import {newUserReducer} from './newUserSlice'
import {usersReducer} from './usersSlice'
import {tasksReducer} from './tasksSlice'





export const store = configureStore({
    reducer: {auth: authReducer, newUser: newUserReducer, users: usersReducer, tasks: tasksReducer }
})