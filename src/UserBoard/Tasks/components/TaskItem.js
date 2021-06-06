import React from 'react'

export const TaskItem = (task,index) => {
    return (
        <tr>
            <th scope="row" className="text-center"></th>
            <th>{task.task.title}</th>
            <th>{task.task.status}</th>
            <th>{task.task.sprintId}</th>
            <th>X</th>
        </tr>
    )
}

