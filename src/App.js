import logo from './logo.svg';
import './App.css';
import {LoginForm} from './User/components/LoginForm'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route exact path="/" component={LoginForm}/>
       
    </Router>
  );
}

export default App;
