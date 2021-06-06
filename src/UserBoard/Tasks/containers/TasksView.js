import React from 'react'
import { TaskList } from '../../Tasks/components/TaskList'


export const TasksView = () => {

    return (
        <div> 
            <div className="container">
                <h2>Choose Task to see details</h2>
                <TaskList />
            </div>
        </div>
    )
}
