import React from 'react'
import { Navigation } from '../../Main/components/Navigation'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'


export const UserDetails = () => {
    const params = useParams();
    const {users} = useSelector(state => state.users)
    const actualUser = users.find(el => el.id == params.id) 

    return (
        <div>
            <Navigation />
            <div className="container">
                <h2>The details of user: {params.id}</h2>
                <div className="row">
                    <div className="col-3 card h-100">
                        <img src="http://simpleicon.com/wp-content/uploads/user1.svg"
                            className="card-img-top" alt={actualUser.nickname} />
                        <div className="card-body">
                            <h5 className="card-title">{actualUser.nickname}</h5>
                            <h5 className="card-title">{actualUser.email}</h5>
                            <h5 className="card-title">{actualUser.id}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
