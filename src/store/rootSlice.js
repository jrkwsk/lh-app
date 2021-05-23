import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        nickname: "",
        email: "",
        password: "",
    },
    reducers: {
        inputNickname: (state, action) => { state.nickname = action.payload },
        inputEmail: (state, action) => { state.email = action.payload },
        inputPassword: (state, action) => { state.password = action.payload },
    }
})

export const reducer = rootSlice.reducer;
// export action creators
export const { inputNickname, inputEmail, inputPassword } = rootSlice.actions;