import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {fetchTasks} from '../../../store/tasksSlice' 


export const SummaryView = () => {
    const loggedUser = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const {tasks} = useSelector(state => state.tasks);

    useEffect(() => {
        //fetch by useridid
        dispatch(fetchTasks(`userId=${loggedUser.loggedUser[0].id}`))        
    }, [dispatch, loggedUser.loggedUser])

    return (
        <div>
            <div className="container">
                <div className="row">
                    {loggedUser && <h2>Witaj {loggedUser.loggedUser[0].nickname}</h2>}
                </div>
                <div className="row">
                   <div className="col-3">
                       <h3>Your Tasks</h3>
                       <ul>
{tasks.map(task => <li key={task.id}>{task.title}</li>)}
                       </ul>
                       </div>
                   <div className="col-3">New Tasks</div>
                   <div className="col-3">Comments</div>
                </div>
            </div>
            
        </div>
    )
}
