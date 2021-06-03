import { createSlice } from '@reduxjs/toolkit'

const newUserSlice = createSlice({
    name: "new-user-data",
    initialState: {},
    reducers: {
        // inputNickname: (state, action) => { state.nickname = action.payload },
        // inputEmail: (state, action) => { state.email = action.payload },
        // inputPassword: (state, action) => { state.password = action.payload },
        registerUser: (state, action) => {state.newUser = {...action.payload, createdAt: Date.now(), id: Date.now()}},
    }
})

export const newUserReducer = newUserSlice.reducer;
// export action creators
// export const { inputNickname, inputEmail, inputPassword, inputError } = userSlice.actions;
export const { registerUser } = newUserSlice.actions;
