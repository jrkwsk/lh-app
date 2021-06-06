import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react';
import {GuestBoardView} from './GuestBoard/containers/GuestBoardView'
import {MainUserView} from './UserBoard/Main/containers/MainUserView'
import {RegisterForm} from './GuestBoard/components/RegisterForm'
import {LoginForm} from './GuestBoard/components/LoginForm'
import {UserDetails} from './UserBoard/Users/components/UserDetails'


function App() {

  return (
     <Router>
      <Switch>
      <Route exact path="/" component={GuestBoardView}/>
      <Route path="/register" component={RegisterForm}/>
      <Route path="/login" component={LoginForm}/>
      <Route path="/mainuserview" component={MainUserView}/>   
      <Route path="/userdetails/:id"> <UserDetails /></Route>
      </Switch>
    </Router>
    
  );
}

export default App;
