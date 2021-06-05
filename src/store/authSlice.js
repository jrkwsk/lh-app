import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchUser = createAsyncThunk(
    "user/fetch", 
    async (loginData) => {
      // Fetch the backend endpoint:
      const response = await fetch(
        `http://localhost:8000/users?email=${loginData.email}&password=${loginData.password}`
      );
  
      // Get the JSON from the response:
      const resData = await response.json();
       
    // Check if status is not okay:
    if (response.status !== 200) {
        console.log("data: ", resData)
        logUser()
    }
      // Return result:
      return resData;
    }
)

//   export const selectAuthStatus = (state) =>
//   state.status;

  const authSlice = createSlice({
    name: "user-data",
    initialState: {isAuthenticated: false, status: "unknown"},
    // reducers: {
    //     logUser: (state, action) => {state.isAuthenticated = true}
    // },
    extraReducers:{
        [fetchUser.fulfilled]: (state, { meta, payload }) => {
            console.log(payload)
            if (payload.length>0) {
                state.isAuthenticated = true
            }
          else {
            state.status = "rejected"
            
          }
          },
    }

    });


export const authReducer = authSlice.reducer;
export const { logUser } = authSlice.actions;




