import React from 'react'
import { useHistory } from "react-router-dom";


export const SummaryComments = ({comments}) => {
    const { push } = useHistory() 

    const sortedComments = comments.slice().sort((a, b) => b.createdAt - a.createdAt)

    return (
        <div>
            <h3>Newest comments</h3>
            <ul className="list-group" onClick={() => push('/mainuserview/comments')}>

                {sortedComments.map(comment => <li className="list-group-item" key={comment.id}>{comment.content} <span className="badge badge-dark">{new Date(comment.createdAt).toLocaleDateString()}
                </span></li>)}
            </ul>

        </div>
    )
}
