import React from 'react'
import { UsersList } from '../../Users/components/UsersList'

export const UsersView = () => {
    return (
        <div> 
            <div className="container">
                <h2>Choose User to see details</h2>
                <UsersList />
            </div>
        </div>
    )
}
