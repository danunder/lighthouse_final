import React, { useState } from 'react';
import useUserAuth from '../hooks/useUserAuth';
import { Form, Button } from 'react-bootstrap';
import './ReviewInput/styles.css';

export default function LoginCard(props) {
  // render error message function

  const SELECT = 'SELECT';
  const SIGN_IN = 'SIGN_IN';
  const REGISTER = 'REGISTER';
  const [mode, setMode] = useState(SELECT);
  const [loginError, setLoginError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const {
    state,
    setFirstName,
    setLastName,
    setUserName,
    setEmail,
    setPassword,
    handleSignIn,
    handleRegister,
  } = useUserAuth();

  const { onSuccess, onBack } = props;

  const showLoginError = () => {
    if (loginError) {
      return (
        <div className='alert alert-danger'>Incorrect username or password</div>
      );
    }
  };

  const onLoginError = () => {
    setLoginError(true);
    setTimeout(() => {
      setLoginError(false);
    }, 3000);
  };


  const onRegisterError = () => {
    if (!state.firstName || !state.lastName) {
      console.log('name error')
      setNameError(true);
      setTimeout(() => {
        setNameError(false);
      }, 3000);
    };
    if (!state.userName) {
      console.log('username error')
      setUsernameError(true);
      setTimeout(() => {
        setUsernameError(false);
      }, 3000);
    };
    if (!state.email) {
      console.log('email error')
      setEmailError(true);
      setTimeout(() => {
        setEmailError(false);
      }, 3000);
    };
    if (!state.password) {
      console.log('password error')
      setPasswordError(true);
      setTimeout(() => {
        setPasswordError(false);
      }, 3000);
    }
  };

  const showRegisterError = (state, errorType) => {
    if (state && errorType === 'name') {
      return (
        <div className="alert alert-danger">Name and last name cannot be blank</div>
      );
    };
    if (state && errorType === 'username') {
      return (
        <div className="alert alert-danger">You need a username to register -- Your username is the only thing other users will see</div>
      );
    };
    if (state && errorType === 'email') {
      return (
        <div className="alert alert-danger">Invalid email</div>
      );
    };
    if (state && errorType === 'password') {
      return (
        <div className="alert alert-danger">Invalid password</div>
      );
    };
  };

  return (
    <section className='card-show'>
      <div className='card'>
        <div className='header'>
          <h5 className='card-title'>{props.title}</h5>
          <button
            type='button'
            className='close'
            aria-label='Close'
            onClick={onBack}
          >
            <span aria-hidden='true'>&times;</span>
          </button>
        </div>
        <div className='card-body'>
          <Form
            onClick={() => setMode(SIGN_IN)}
            onSubmit={(e) => {
              e.preventDefault();
              handleSignIn(onSuccess, onLoginError)
            }}
          >
            <h5>Sign in to an existing account</h5>
            {showLoginError()}
            {mode === SIGN_IN && (
              <>
                <Form.Group controlId='formUserName'>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type='userName'
                    placeholder='Enter Username'
                    value={state.userName}
                    onChange={e => setUserName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId='formBasicPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Password'
                    value={state.password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button variant='danger' type='button' onClick={onBack}>
                  Cancel
                </Button>
                <Button variant='primary' type='submit'>
                  Sign in
                </Button>
              </>
            )}
          </Form>
          <h4>or</h4>
          <br />
          <Form
            onClick={() => {
              setMode(REGISTER);
            }}
            onSubmit={(e) => {
              e.preventDefault();
              handleRegister(onSuccess, onRegisterError())
            }}
          >
            <h5>Create a new account</h5>
            {showRegisterError(nameError, 'name')}
            {mode === REGISTER && (
              <>
                <Form.Group controlId='firstName'>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder=''
                    value={state.firstName}
                    onChange={e => setFirstName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId='lastName'>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder=''
                    value={state.lastName}
                    onChange={e => setLastName(e.target.value)}
                  />
                </Form.Group>
                  {showRegisterError(usernameError, 'username')}
                <Form.Group controlId='userName'>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder=''
                    value={state.userName}
                    onChange={e => setUserName(e.target.value)}
                  />
                  <Form.Text className='text-muted'>
                    Only your username will be attached to your reviews.
                  </Form.Text>
                </Form.Group>
                {showRegisterError(emailError, 'email')}
                <Form.Group controlId='email'>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Enter email'
                    value={state.email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <Form.Text className='text-muted'>
                    We'll never share your name or email with anyone else.
                  </Form.Text>
                </Form.Group>
                {showRegisterError(passwordError, 'password')}
                <Form.Group controlId='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Password'
                    value={state.password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button variant='danger' type='button' onClick={onBack}>
                  Cancel
                </Button>
                <Button variant='primary' type='submit'>
                  Submit
                </Button>
              </>
            )}
          </Form>
        </div>
      </div>
    </section>
  );
}
