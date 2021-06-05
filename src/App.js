import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react';
import {GuestBoardView} from './GuestBoard/containers/GuestBoardView'
import {MainUserView} from './UserBoard/Main/containers/MainUserView'
import {RegisterForm} from './GuestBoard/components/RegisterForm'
import {LoginForm} from './GuestBoard/components/LoginForm'

function App() {

  return (
    <React.Fragment >
     <Router>
      <Route exact path="/" component={GuestBoardView}/>
      <Route exact path="/register" component={RegisterForm}/>
      <Route exact path="/login" component={LoginForm}/>
      <Route exact path="/MainUserView" component={MainUserView}/>   
    </Router>
    </React.Fragment>
  );
}

export default App;
