import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

function App() {
  return (
   <Router>
    <div className="App">
     
      <div className = "head">
  <h1>
    Friend Finder 
  </h1>
  </div>
<div className = "nav">
     <Link to ="/login">Login</Link>
      <Link to ="/friends">Friends List</Link>
  
      </div>


      <Switch>
        <PrivateRoute path ="/friends" component ={FriendsList}/>
        <PrivateRoute path ="/addfriend" component={AddFriend}/>
      <Route path= "/login" component ={LoginForm}/>
      <Route component ={LoginForm}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
