import React from 'react';
import './App.css';
import { BrowserRouter as Roter, Route, Link, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import { Router } from 'express';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      
  <p>
    Friend Finder 
  </p>
      </header>
    
<LoginForm/>
      {/* <Link to ="/login">Login</Link>
      <Route path= "/login" component ={LoginForm}/>
      <Route component ={LoginForm}/> */}
    </div>


    </Router>
  );
}

export default App;
