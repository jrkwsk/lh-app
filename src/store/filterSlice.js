import { createSlice } from '@reduxjs/toolkit'

  const filterSlice = createSlice({
    name: "filter-tasks-data",
    initialState: {},
    reducers: {
      filterTasks: (state, action) => {        
        state.filter = action.payload.tasks.filter(p => p.status ==="done")
        //move to tasks slice and try to display it  
      }
    }
  }
  )  


export const filterReducer = filterSlice.reducer;
export const {filterTasks} = filterSlice.actions;

//api call aut of this file





