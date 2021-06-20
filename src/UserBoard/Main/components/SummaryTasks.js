import { useHistory } from "react-router-dom";

export const SummaryTasks = ({tasks}) => {

    const { push } = useHistory() 
    console.log("SummaryTasks")

    return (
        <div>

            <h3>All your tasks</h3>
            <ul className="list-group" onClick={() => push('/mainuserview/tasks')}>
                {tasks.map(task => <li className="list-group-item" key={task.id}>{task.title}</li>)}
            </ul>

        </div>
    )
}
