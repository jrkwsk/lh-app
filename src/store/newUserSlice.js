import { createSlice } from '@reduxjs/toolkit'

const newUserSlice = createSlice({
    name: "new-user-data",
    initialState: {},
    reducers: {
        registerUser: (state, action) => {state.newUser = {...action.payload, createdAt: Date.now(), id: Date.now()}},
    }
})



export const newUserReducer = newUserSlice.reducer;
export const { registerUser } = newUserSlice.actions;
