import { useHistory } from "react-router-dom";

export const SummaryLastTasks = ({tasks}) => {
    const { push } = useHistory() 


    const sortedTasks = tasks.slice().sort((a, b) => b.createdAt - a.createdAt)

  

    return (
        <div>

            <h3>Your last 3 tasks</h3>
            <ul className="list-group" onClick={() => push('/mainuserview/tasks')}>
                {sortedTasks.slice(0, 3).map(task => <li className="list-group-item" key={task.id}>{task.title} <span className="badge badge-dark">{new Date(task.createdAt).toLocaleDateString()}</span></li>)}
            </ul>
        </div>
    )
}
