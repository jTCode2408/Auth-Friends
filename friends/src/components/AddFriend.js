//component to add friend
import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {Link} from 'react-router-dom'
import FriendsList from './FriendsList';
import PrivateRoute from './PrivateRoute';

class AddFriend extends React.Component {
  state = {
    friends: {
      username: '',
      password: '',
      age:'',
      id:''
    }
  };

  handleChange = e => {
    this.setState({
      friends: {
        ...this.state.friends,
        [e.target.name]: e.target.value
      }
    });
  };

  add = e => {
    e.preventDefault();
   
    axiosWithAuth()
      .post('http://localhost:5000/api/friends', this.state.friends)
      .then(res => {
          console.log('ADD friend res', res);
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/addfriends');
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
          <h3>Add Some Friends!</h3>

        <form onSubmit={this.add}>
          <input
            type="text"
            name="username"
            value={this.state.friends.username}
            onChange={this.handleChange}
            placeholder = "username"
          />
          <input
            type="password"
            name="password"
            value={this.state.friends.password}
            onChange={this.handleChange}
            placeholder="password"
          />
    
        
          <button><Link to= "/friends">Add a buddy</Link>
          <PrivateRoute path ="/friends" component ={FriendsList}/>
          </button>
       
        </form>
      </div>
    );
  }
}

export default AddFriend;