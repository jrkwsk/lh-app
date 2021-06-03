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
  const user = useSelector(state => state.user)
  const [initial, setInitial] = useState(false)

  console.log(newUser)


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
    console.log(JSON.stringify("newuser: ", newUser));
    // initial = true;
    // return () => {
    //   cleanup
    // }
  }, [newUser]);


  useEffect(() => {

    if (!user.user) { return }
    console.log(user.user.email)


    // debugger

    let query = `?email=${user.user.email}&password=${user.user.password}`
    console.log(query)
    fetch(`http://localhost:8000/users${query}`, {method: 'GET', headers: { 'Content-Type': 'application/json' }}) 
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
    // setInitial(true)
    // return () => {
    //   cleanup
    // }
  }, [initial, user]);

  

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
