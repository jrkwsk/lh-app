import { createSlice } from '@reduxjs/toolkit'

const modeSlice = createSlice({
    name: "mode",
    initialState: {
        mode: 'guest'
    },
    reducers: {
        viewMode: (state, action) => { state.mode = action.payload },
       }
})

export const reducer = modeSlice.reducer;
// export action creators
export const { viewMode } = modeSlice.actions;