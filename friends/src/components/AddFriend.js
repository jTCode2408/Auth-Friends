//component to add friend
import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {Link} from 'react-router-dom'
import FriendsList from './FriendsList';
import PrivateRoute from './PrivateRoute';

class AddFriend extends React.Component {
  state = {
    add: {
      name: '',
      age:'',
      email: '',
      id:Date.now()
    }
  };

  handleChange = e => {
    this.setState({
      add: {
        ...this.state.add,
        [e.target.name]: e.target.value
      }
    });
  };

  add = e => {
    e.preventDefault();
   
    axiosWithAuth()
      .post('http://localhost:5000/api/friends', this.state.add)
      .then(res => {
          console.log('ADD friend res', res);
          this.setState({add: [...res.data]})
        this.props.history.push('/friends');
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
            name="name"
            value={this.state.add.name}
            onChange={this.handleChange}
            placeholder = "name"
          />
          <input
            type="age"
            name="age"
            value={this.state.add.age}
            onChange={this.handleChange}
            placeholder="age"
          />
          <input
            type="email"
            name="email"
            value={this.state.add.email}
            onChange={this.handleChange}
            placeholder="email"
          />
    
        
          <button >Add a buddy
          </button>
       
        </form>
      </div>
    );
  }
}

export default AddFriend;