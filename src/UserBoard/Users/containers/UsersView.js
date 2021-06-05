import React from 'react'
import { Navigation } from '../../Main/components/Navigation'
import { UsersList } from '../../Users/components/UsersList'

export const UsersView = () => {
    return (
        <div> 
            <Navigation />
            <div className="container">
                <h2>Choose User to see details</h2>
                <UsersList />
            </div>
        </div>
    )
}
