import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, {useEffect} from 'react';
import {GuestBoardView} from './GuestBoard/containers/GuestBoardView'
import {MainUserView} from './UserBoard/Main/containers/MainUserView'
import {RegisterForm} from './GuestBoard/components/RegisterForm'
import {LoginForm} from './GuestBoard/components/LoginForm'
import {useSelector} from 'react-redux';

function App() {
  const user = useSelector(state => state.user)
  let initial = false;

  useEffect(() => {
    if (initial !== true ) {return }
    fetch('http://localhost:8000/users', {method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(
      {        
        "nickname": user.user.nickname,
        "email": user.user.email,
        "password": user.user.password,
        "createdAt": user.user.createdAt,
        "id": user.user.id      
      }
    )});    
    console.log(JSON.stringify(user));
    initial = true;
    // return () => {
    //   cleanup
    // }
  }, [user]);

  

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
