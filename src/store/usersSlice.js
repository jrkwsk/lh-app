import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchUsers = createAsyncThunk(
    "all-users/fetch", 
    async () => {
      // Fetch the backend endpoint:
      const response = await fetch(
        `http://localhost:8000/users`
      );  
      // Get the JSON from the response:
      const resData = await response.json();       
      // Return result:
      return resData;
    }
)

  const usersSlice = createSlice({
    name: "all-users-data",
    initialState: {users:[]},
    // reducers: {
    //     logUser: (state, action) => {state.isAuthenticated = true}
    // },
    extraReducers:{
        [fetchUsers.fulfilled]: (state, { meta, payload }) => {
          state.users = payload
          }
          },
    }
  )
   

export const usersReducer = usersSlice.reducer;




