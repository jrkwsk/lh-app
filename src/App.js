import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react';
import {GuestBoardView} from './GuestBoard/containers/GuestBoardView'
import {MainUserView} from './UserBoard/Main/containers/MainUserView'
import {RegisterForm} from './GuestBoard/components/RegisterForm'
import {LoginForm} from './GuestBoard/components/LoginForm'
import {UsersView} from './UserBoard/Users/containers/UsersView'
import {UserItem} from './UserBoard/Users/components/UserItem'
import {UsersList} from './UserBoard/Users/components/UsersList'


function App() {

  return (
     <Router>
      <Switch>
      <Route exact path="/" component={GuestBoardView}/>
      <Route path="/register" component={RegisterForm}/>
      <Route path="/login" component={LoginForm}/>
      <Route path="/MainUserView" component={MainUserView}/>   
      <Route path="/users" component={UsersView}/>  
      <Route path="/useritem" component={UserItem}/>  
      <Route path="/userslist" component={UsersList}/>  

      </Switch>
    </Router>
    
  );
}

export default App;
