import React from 'react';
import axios from 'axios';

// The button needs fixing to work as a form submitter

export default class Signup extends React.Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
    };
    axios.post(`http://localhost:3001/api/login`, { user }).then(res => {
      console.log(res.data[0]);
    });
  };

  render() {
    return (
      <section className='card'>
        <h5 className='card-header'>Welcome Back! ☺☺☺</h5>
        <form onSubmit={this.handleSubmit}>
          <div class='form-group col-md-6'>
            <label for='inputAddress2'>Username</label>
            <input
              onChange={this.handleChange}
              type='username'
              name='username'
              class='form-control'
              id='inputUsername'
              placeholder='Username'
            />
          </div>
          <div class='form-group col-md-6'>
            <label for='inputPassword4'>Password</label>
            <input
              onChange={this.handleChange}
              type='password'
              name='password'
              class='form-control'
              id='inputPassword4'
              placeholder='Password'
            />
          </div>
          <button type='submit' className='btn btn-outline-dark'>
            Login
          </button>
        </form>
      </section>
    );
  }
}
