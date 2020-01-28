import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';


function App() {
  return (
   
    <div className="App">
     
      
  <h1>
    Friend Finder 
  </h1>
     
<LoginForm/>
      <Link to ="/login">Login</Link>
      <Route path= "/login" component ={LoginForm}/>
      <Route component ={LoginForm}/>
    </div>

  );
}

export default App;
