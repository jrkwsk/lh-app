import React from 'react'
import { NavLink } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom' 
import { useDispatch, useSelector } from "react-redux";
// import { viewMode } from '../../store/modeSlice'


export const Navigation = () => {
  // const mode = useSelector(state => state.mode)
  // const dispatch = useDispatch()
  const mockmode = 'user-view'



return (
  <Router>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <ul>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      {mockmode === 'guest-view' && <div className="guest-view">
      <div className="navbar-nav">
      <li className="nav-item nav-link active">
      <NavLink className="nav-link" to="/" activeClassName="nav-item-active">Home</NavLink>
      </li>
      <li className="nav-item nav-link">
      <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      </div>
      </div>}

      {mockmode === 'user-view' && <div className="user-view">

      <div className="navbar-nav">
      <li className="nav-item nav-link">
      <NavLink className="nav-link" to="/users">Users</NavLink>
      </li>  
      
      <li className="nav-item nav-link">
      <NavLink className="nav-link" to="/tasks">Tasks</NavLink>
      </li>
      
      <li className="nav-item nav-link">
      <NavLink className="nav-link" to="/kanban">Kanban</NavLink>
      </li>
      <li className="nav-item nav-link">
      <NavLink className="nav-link" to="/sprints">Sprints</NavLink></li>  
      </div>    
    </div>}
  </div>
  </ul>
</nav>
</Router>
)
}