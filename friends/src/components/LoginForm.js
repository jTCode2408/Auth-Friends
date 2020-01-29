//itnial login form return token on click
import React from 'react';
// import {withFormik, Form, Field} from 'formik';
import axios from 'axios';

class LoginForm extends React.Component {
  state = {
    credentials: {
      username: '',
      password: '',
      age:'',
      id:''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
   
    axios
      .post('http://localhost:5000/api/login', this.state.credentials)
      .then(res => {
          console.log('login res', res);
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/friends');
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            placeholder = "username"
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            placeholder="password"
          />
          <button>Go</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;