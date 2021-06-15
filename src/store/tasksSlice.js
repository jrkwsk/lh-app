import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchTasks = createAsyncThunk(
    "all-tasks/fetch", 
    async (query) => {
      // Fetch the backend endpoint:
      const response = await fetch(
        `http://localhost:8000/tasks?${query}`
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
    reducers: {
      filterTasks: (state, action) => {        
        state.tasks = action.payload.tasks.filter(p => p.status ==="done")
        //move to tasks slice and try to display it  
      }
    },
    extraReducers:{
        [fetchTasks.fulfilled]: (state, { meta, payload }) => {
          state.tasks = payload
    }
    }        
  })  


export const tasksReducer = tasksSlice.reducer;
export const {filterTasks} = tasksSlice.actions;


//api call aut of this file





