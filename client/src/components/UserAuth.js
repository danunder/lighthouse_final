import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserAuth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signupUser, singU] = useState('');
  const [signupPass, singP] = useState('');
  const [user, setUser] = useState();
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);
  // logout the user
  const handleLogout = () => {
    setUser('');
    setUsername('');
    setPassword('');
    localStorage.clear();
  };
  // login the user
  const handleSubmit = async e => {
    e.preventDefault();
    const user = { username, password };
    // send the username and password to the server
    const response = await axios.post('http://localhost:3001/api/login', user);
    // set the state of the user
    if (response.data.username) {
      setUser(response.data.username);
      // store the user in localStorage
      localStorage.setItem('user', JSON.stringify(response.data.id));
    }
  };

  const handleSignup = async e => {
    e.preventDefault();
    const user = { signupUser, signupPass };
    const response = await axios.post('http://localhost:3001/api/signup', user);
    setUser(response.data);
    localStorage.setItem('user', JSON.stringify(response.data));
  };
  // if there's a user show the message below
  if (user) {
    return (
      <div className='loggedIn'>
        {user} is loggged in
        <button onClick={handleLogout}>logout</button>
      </div>
    );
  }
  // if there's no user, show the login form
  return (
    <div className='userAuthForm'>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input
          type='text'
          value={username}
          placeholder='Enter Your Username'
          onChange={({ target }) => setUsername(target.value)}
        />
        <div>
          <label>Password: </label>
          <input
            type='password'
            value={password}
            placeholder='Enter Your Password'
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
      <form onSubmit={handleSignup}>
        <label>Username: </label>
        <input
          type='text'
          value={signupUser}
          placeholder='Enter Your Username'
          onChange={({ target }) => singU(target.value)}
        />
        <div>
          <label>Password: </label>
          <input
            type='password'
            value={signupPass}
            placeholder='Enter Your Password'
            onChange={({ target }) => singP(target.value)}
          />
        </div>
        <button type='submit'>Signup</button>
      </form>
    </div>
  );
};
export default UserAuth;
