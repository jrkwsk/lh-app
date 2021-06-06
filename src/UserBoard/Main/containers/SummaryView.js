import React from 'react'
import { useSelector } from 'react-redux';


export const SummaryView = () => {
    const loggedUser = useSelector(state => state.auth)

    return (
        <div>
            <div className="container">
                <div className="row">
                    {loggedUser && <h2>Witaj {loggedUser.loggedUser[0].nickname}</h2>}
                </div>
                <div className="row">
                   <div className="col-3">Your Tasks</div>
                   <div className="col-3">New Tasks</div>
                   <div className="col-3">Comments</div>
                </div>
            </div>
            
        </div>
    )
}
