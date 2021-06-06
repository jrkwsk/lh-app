import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchTasks = createAsyncThunk(
    "all-tasks/fetch", 
    async () => {
      // Fetch the backend endpoint:
      const response = await fetch(
        `http://localhost:8000/tasks`
      );  
      // Get the JSON from the response:
      const resData = await response.json();       
      // Return result:
      return resData;
    }
)

  const tasksSlice = createSlice({
    name: "all-tasks-data",
    initialState: {tasks:[]},

    extraReducers:{
        [fetchTasks.fulfilled]: (state, { meta, payload }) => {
          state.tasks = payload
          }
          },
    }
  )
   

export const tasksReducer = tasksSlice.reducer;

//api call aut of this file





