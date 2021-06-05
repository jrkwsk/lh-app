import React from 'react'
import { useHistory } from "react-router-dom";


export const UserItem = (user) => {
    const { push } = useHistory() 

    return (
        <div className="card h-100" onClick={() => push('/user/' + user.user.id)}>
        <img src="http://simpleicon.com/wp-content/uploads/user1.svg" 
        className="card-img-top" alt={user.user.nickname} />
        <div className="card-body">
            <h5 className="card-title">{user.user.nickname}</h5>
        </div>
    </div>

    )
}
