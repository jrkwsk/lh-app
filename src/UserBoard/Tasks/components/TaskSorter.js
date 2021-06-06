import React from 'react'

export const TaskSorter = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <span className="m-1">Sort by:</span>
                </div>
                <div className="row mb-1">
                    <span className="badge badge-success m-1" onClick={()=>{}}>done</span>
                    <span className="badge badge-dark m-1" onClick={()=>{}}>in progress</span>
                    <span className="badge badge-danger m-1" onClick={()=>{}}>new</span>
                    <span className="badge badge-warning m-1" onClick={()=>{}}>review</span>
                </div>
            </div>
        </div>
    )
}

//reducers used here differently to practice dispatching actions