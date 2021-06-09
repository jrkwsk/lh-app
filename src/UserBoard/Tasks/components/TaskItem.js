import React from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';

export const TaskItem = (task,index) => {
    return (
        <tr>
            <th scope="row" className="text-center"></th>
            <th>{task.task.title}</th>

            {task.task.status==="done" && <th><span className="badge badge-success">Done</span></th>} 
            {task.task.status==="inprogres" && <th><span className="badge badge-dark">in progress</span></th>} 
            {task.task.status==="new" && <th><span className="badge badge-danger">new</span></th>} 
            {task.task.status==="review" && <th><span className="badge badge-warning">review</span></th>} 



            <th>{task.task.sprintId}</th>
            <th><HighlightOffIcon/>
            </th>
            <th>
            <EditIcon/></th>
        </tr>
    )
}

// add numbers to rows