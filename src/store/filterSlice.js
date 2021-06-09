import { createSlice } from '@reduxjs/toolkit'

  const filterSlice = createSlice({
    name: "filter-tasks-data",
    initialState: {tasks:[]},
    reducers: {
      filterTasks: (state) => {
        state.tasks = state.tasks.filter(task => task.status == "done" )
      }
    }
  }
  )  


export const filterReducer = filterSlice.reducer;

//api call aut of this file





