import React, { useState } from 'react';
import useUserAuth from '../hooks/useUserAuth';
import { Card, Form, Button } from 'react-bootstrap'



export default function LoginCard(props) {

  const SELECT = "SELECT"
  const SIGN_IN = "SIGN_IN"
  const REGISTER = "REGISTER"
  const  [ mode, setMode ]  = useState(SELECT)
  const { state, setFirstName, setLastName, setUserName, setEmail, setPassword, reset, handleSignIn, handleRegister } = useUserAuth()

  return (
    <section className='card'>
      <div className='card'>
         <h5 className='card-header'>
          Sign in or register to continue adding your review
        </h5>
        <div className='card-body'>
          <Form
            onClick={() => {
              reset()
              setMode(SIGN_IN)
            }}
            onSubmit={() => handleSignIn()}
          >
            <h5>Sign in to an existing account</h5>
            {mode === SIGN_IN &&
              <>
                <Form.Group controlId="userName">
                  <Form.Label>Username</Form.Label>
                <Form.Control
                  type="userName"
                  placeholder="Enter Username"
                  value={state.userName}
                  onChange={(e) => setUserName(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={state.password}
                  onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
  
                <Button variant="primary" type="submit" >
                  Sign in
                </Button>
              </>}
          </Form>
          <br/>
          <Form
            onClick={() => {
              reset()
              setMode(REGISTER)
            }}
            onSubmit={() => handleRegister()}>
            <h5>Create a new account</h5>
            {mode === REGISTER &&
              <>
                <Form.Group controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={state.firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                </Form.Group>  
                <Form.Group controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={state.lastName}
                  onChange={(e) => setLastName(e.target.value)} />
                </Form.Group>  
                <Form.Group controlId="userName">
                  <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={state.userName}
                  onChange={(e) => setUserName(e.target.value)} />
                  <Form.Text className="text-muted">
                  Only your username will be attached to your reviews.
                  </Form.Text>
              </Form.Group>  
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={state.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                              We'll never share your name or email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={state.password}
                  onChange={(e) => setPassword(e.target.value)}/>
              </Form.Group>         
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </>}
          </Form>
          </div>    
                               
        </div>
       </section>
  );
}