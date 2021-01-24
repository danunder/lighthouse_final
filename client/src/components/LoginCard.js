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
  const [error, setError] = useState(false);

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

  const { onSuccess } = props;

  // setTimeout(function(){ alert("Hello"); }, 3000);

  const showError = () => {
    if (error) {
      return (
        <div className='alert alert-danger'>Incorrect username or password</div>
      );
    }
  };

  const onError = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 3000);
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
            onClick={props.onClose}
          >
            <span aria-hidden='true'>&times;</span>
          </button>
        </div>
        <div className='card-body'>
          <Form
            onClick={() => setMode(SIGN_IN)}
            onSubmit={() => handleSignIn(onSuccess, onError)}
          >
            <h5>Sign in to an existing account</h5>
            {showError()}
            {mode === SIGN_IN && (
              <>
                <Form.Group controlId='userName'>
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
            onSubmit={() => handleRegister(onSuccess)}
          >
            <h5>Create a new account</h5>
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
                <Form.Group controlId='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Password'
                    value={state.password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </Form.Group>
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
