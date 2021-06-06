import React, {useEffect} from 'react'
import { TaskItem } from './TaskItem'
import { useDispatch, useSelector } from "react-redux"
import {fetchTasks} from '../../../store/tasksSlice' 

export const TaskList = () => {
    const dispatch = useDispatch();
    const {tasks} = useSelector(state => state.tasks);

    //empty string as no query passed 
    useEffect(() => {
        dispatch(fetchTasks(""))        
    }, [dispatch])

    return (
        <div>
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
                
                    
                </tbody>
            </table>

        </div>
    )
}
