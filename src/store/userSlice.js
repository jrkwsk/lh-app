import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user-data",
    initialState: {
        nickname: "",
        email: "",
        password: "",
        error: { ok: undefined, notok: undefined }
    },
    reducers: {
        inputNickname: (state, action) => { state.nickname = action.payload },
        inputEmail: (state, action) => { state.email = action.payload },
        inputPassword: (state, action) => { state.password = action.payload },
        inputError: (state, action) => { state.error = action.payload },
    }
})

export const userReducer = userSlice.reducer;
// export action creators
export const { inputNickname, inputEmail, inputPassword, inputError } = userSlice.actions;