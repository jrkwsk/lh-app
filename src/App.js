import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, {useEffect, useState} from 'react';
import {GuestBoardView} from './GuestBoard/containers/GuestBoardView'
import {MainUserView} from './UserBoard/Main/containers/MainUserView'
import {RegisterForm} from './GuestBoard/components/RegisterForm'
import {LoginForm} from './GuestBoard/components/LoginForm'
import {useSelector} from 'react-redux';

function App() {
  const newUser = useSelector(state => state.newUser)
  // const user = useSelector(state => state.user)
  // const [initial, setInitial] = useState(false)



  useEffect(() => {
    if (!newUser.newUser) { return }
    fetch('http://localhost:8000/users', {method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(
      {        
        "nickname": newUser.newUser.nickname,
        "email": newUser.newUser.email,
        "password": newUser.newUser.password,
        "createdAt": newUser.newUser.createdAt,
        "id": newUser.newUser.id      
      }
    )});    

  }, [newUser]);

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
