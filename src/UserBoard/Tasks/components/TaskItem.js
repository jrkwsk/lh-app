import React from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';

export const TaskItem = (task,index) => {
    return (
        <tr>
            <th scope="row" className="text-center"></th>
            <th>{task.task.title}</th>

            {task.task.status==="done" && <th><span class="badge badge-success">Done</span></th>} 
            {task.task.status==="inprogres" && <th><span class="badge badge-light">In progress</span></th>} 
            {task.task.status==="canceled" && <th><span class="badge badge-danger">Canceled</span></th>} 
            {task.task.status==="tests" && <th><span class="badge badge-warning">Tests</span></th>} 



            <th>{task.task.sprintId}</th>
            <th><HighlightOffIcon/>
            </th>
            <th>
            <EditIcon/></th>
        </tr>
    )
}

// add numbers to rows