import {useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import {SummaryLastTasks} from '../components/SummaryLastTasks'
import {SummaryTasks} from '../components/SummaryTasks'
import {SummaryComments} from '../components/SummaryComments'
import {fetchTasks} from '../../../store/tasksSlice'
import {fetchComments} from '../../../store/commentsSlice'


export const SummaryView = () => {
    const loggedUser = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const {tasks} = useSelector(state => state.tasks);
    const {comments} = useSelector(state => state.comments);


    useEffect(() => {
        //fetch by useridid
        dispatch(fetchTasks(`userId=${loggedUser.loggedUser[0].id}`))        
    }, [dispatch, loggedUser.loggedUser])

    useEffect(() => {
        //fetch by useridid
        dispatch(fetchComments(`userId=${loggedUser.loggedUser[0].id}`))        
    }, [dispatch, loggedUser.loggedUser])

    return (
        <div>
            <div className="container">
                <div className="row">
                    {loggedUser && <h2>Welcome {loggedUser.loggedUser[0].nickname}!</h2>}
                </div>
                <div className="row">
                   <div className="col-3">
                        <SummaryTasks tasks={tasks}/>   
                    </div>
                    <div className="col-3">                       
                        <SummaryLastTasks  tasks={tasks}/>                  
                    </div>
                    <div className="col-3">
                        <SummaryComments comments={comments} />
                    </div>
                   </div>
            </div>
            </div>
            
        
    )
}
