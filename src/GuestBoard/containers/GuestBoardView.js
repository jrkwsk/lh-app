import React from 'react';
import { Link } from 'react-router-dom';

export const GuestBoardView = () => {
    return (
        <div className="container h-100 m-5 p-5">
            <h1 className="text-center">Hello there! Let's start from here</h1>
            <div className="row d-flex justify-content-center">
                <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">                
                <Link to="/login"><button type="button" className="btn btn-outline-secondary">Log in</button></Link>
                <Link to="/register"> <button type="button" className="btn btn-outline-secondary">Sign in</button></Link>      
                </div>
            </div>
        </div>

    );
};



