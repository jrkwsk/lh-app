import logo from './logo.svg';
import './App.css';
import {LoginForm} from './User/components/LoginForm'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Navigation} from './Main/components/Navigation'
import React from 'react';

function App() {
  return (
    <React.Fragment >
    <Navigation />
    <Router>
      <Route exact path="/" component={LoginForm}/>
       
    </Router>
    </React.Fragment>
  );
}

export default App;
