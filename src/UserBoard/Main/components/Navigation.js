import React from 'react'
import { NavLink } from 'react-router-dom'


export const Navigation = () => {

return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <ul>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <li className="nav-item nav-link active">
      <NavLink className="nav-link" to="/MainUserView" activeClassName="nav-item-active">Home</NavLink>
      </li>
      </div>     

      <div className="navbar-nav">
      <li className="nav-item nav-link">
      <NavLink className="nav-link" to="/mainuserview/users">Users</NavLink>
      </li>  
      
      <li className="nav-item nav-link">
      <NavLink className="nav-link" to="/mainuserview/tasks">Tasks</NavLink>
      </li>
      
      <li className="nav-item nav-link">
      <NavLink className="nav-link" to="/mainuserview/kanban">Kanban</NavLink>
      </li>
      <li className="nav-item nav-link">
      <NavLink className="nav-link" to="/mainuserview/sprints">Sprints</NavLink></li>  
      </div>    
    
  </div>
  </ul>
</nav>
)
}