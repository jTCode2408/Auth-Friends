//component to add friend
import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Loader from 'react-loader-spinner';
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
          {/* <input
            type="age"
            name="age"
            value={this.state.friendCredentials.age}
            onChange={this.handleChange}
            placeholder="age"
          /> */}
    
        
          <button>Go</button>
          {this.props.fetchingData && (
          <div className="key spinner">
            <Loader type="Puff" color="#204963" height="60" width="60" />
            <p>Loading Data</p>
          </div>
        )}
        </form>
      </div>
    );
  }
}

export default AddFriend;