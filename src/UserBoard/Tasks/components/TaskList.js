import React, {useEffect} from 'react'
import { TaskItem } from './TaskItem'
import { useDispatch, useSelector } from "react-redux"
import {fetchTasks, filterTasks} from '../../../store/tasksSlice' 
// import { filterTasks } from '../../../store/filterSlice'



export const TaskList = () => {
    const dispatch = useDispatch();
    const {tasks} = useSelector(state => state.tasks);


    //empty string as no query passed 
    useEffect(() => {
        dispatch(fetchTasks(""))        
    }, [])

    const filterByDone = () => {
        dispatch(filterTasks({tasks}))
        console.log(tasks)       
    }            
        
    return (
        <div>
            <div>
            <div className="container">
                <div className="row">
                    <span className="m-1">Sort by:</span>
                </div>
                <div className="row mb-1">
                    <span className="badge badge-success m-1" onClick={filterByDone}>done</span>
                    <span className="badge badge-dark m-1" onClick={()=>{}}>in progress</span>
                    <span className="badge badge-danger m-1" onClick={()=>{}}>new</span>
                    <span className="badge badge-warning m-1" onClick={()=>{}}>review</span>
                </div>
            </div>
        </div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Task title</th>
                        <th>Status</th>
                        <th>Sprint</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                
                <tbody>
                    {tasks.map(task=> <TaskItem key={task.id} task={task} />)}
                    {tasks.map(task=> <TaskItem key={task.id} task={task} />)}
                
                    
                </tbody>
            </table>

        </div>
    )
}
