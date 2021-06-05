import React from 'react'
import {UserItem} from '../../Users/components/UserItem'

export const UsersList = () => {
    const users = [
        {nickname: "aaa", id:"123"},
        {nickname: "bbb", id:"1234"},
        {nickname: "ccc", id:'1235'},
        {nickname: "ddd", id:'1236'},
        {nickname: "aaa", id:"123"},
        {nickname: "bbb", id:"1234"},
        {nickname: "ccc", id:'1235'},
    ]

    return (
        <div className="container">
        <div className="row no-gutters">
            {users.map(user => <div className="col-2" key={user.id}>
                <UserItem user={user} />
            </div>)}
        </div>
    </div>
    )
}
