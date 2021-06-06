import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchComments = createAsyncThunk(
    "all-comments/fetch", 
    async (query) => {
      // Fetch the backend endpoint:
      const response = await fetch(
        `http://localhost:8000/comments?${query}`
      );  
      // Get the JSON from the response:
      const resData = await response.json();       
      // Return result:
      return resData;
    }
)

  const commentsSlice = createSlice({
    name: "all-comments-data",
    initialState: {comments:[]},

    extraReducers:{
        [fetchComments.fulfilled]: (state, { meta, payload }) => {
          state.comments = payload
          }
          },
    }
  )
   

export const commentsReducer = commentsSlice.reducer;

//api call aut of this file





