import React, { useReducer, useState, useEffect } from 'react';
import axios from 'axios';

export default function useUserAuth(initial) {
  const SET_FIRST_NAME = 'SET_FIRST_NAME';
  const SET_LAST_NAME = 'SET_LAST_NAME';
  const SET_USER_NAME = 'SET_USER_NAME';
  const SET_EMAIL = 'SET_EMAIL';
  const SET_PASSWORD = 'SET_PASSWORD';
  const RESET = 'RESET';

  function reducer(state, action) {
    switch (action.type) {
      case SET_FIRST_NAME:
        return {
          ...state,
          firstName: action.firstName,
        };
      case SET_LAST_NAME:
        return {
          ...state,
          lastName: action.lastName,
        };
      case SET_USER_NAME:
        return {
          ...state,
          userName: action.userName,
        };
      case SET_EMAIL:
        return {
          ...state,
          email: action.email,
        };
      case SET_PASSWORD:
        return {
          ...state,
          password: action.password,
        };
      case RESET:
        return {
          initial,
        };

      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
  });

  const setFirstName = firstName =>
    dispatch({ type: SET_FIRST_NAME, firstName });
  const setLastName = lastName => dispatch({ type: SET_LAST_NAME, lastName });
  const setUserName = userName => dispatch({ type: SET_USER_NAME, userName });
  const setEmail = email => dispatch({ type: SET_EMAIL, email });
  const setPassword = password => dispatch({ type: SET_PASSWORD, password });
  const reset = () => dispatch({ type: RESET });

  const handleSignIn = async (onSuccess, onError) => {
    const username = state.userName;
    const password = state.password;
    // send the username and password to the server
    const response = await axios.post('http://localhost:3001/api/login', {
      username,
      password,
    });
    // console.log('RESPONES ', response.data);
    if (response.data.userName) {
      console.log('PASS ', response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      // handles transition to next view
      onSuccess();
    } else {
      console.log('sad')
      onError();
    }
  };

  const handleRegister = async (onSuccess, onError) => {
    const user = state;
    const response = await axios.post('http://localhost:3001/api/signup', user);
    if (response.data.userName) {
      localStorage.setItem('user', JSON.stringify(response.data));
      onSuccess();
    } else {
      onError()
    }
  };

  return {
    state,
    setFirstName,
    setLastName,
    setUserName,
    setEmail,
    setPassword,
    reset,
    handleSignIn,
    handleRegister,
  };
}
