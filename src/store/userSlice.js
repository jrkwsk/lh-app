import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user-data",
    initialState: {},
    reducers: {
        // inputNickname: (state, action) => { state.nickname = action.payload },
        // inputEmail: (state, action) => { state.email = action.payload },
        // inputPassword: (state, action) => { state.password = action.payload },
        registerUser: (state, action) => {state.user = {...action.payload, createdAt: Date.now(), id: Date.now()}}
    }
})

export const userReducer = userSlice.reducer;
// export action creators
// export const { inputNickname, inputEmail, inputPassword, inputError } = userSlice.actions;
export const { registerUser } = userSlice.actions;
