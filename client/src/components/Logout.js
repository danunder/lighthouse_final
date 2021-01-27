import React from 'react';
import './Logout.css';
import Button from 'react-bootstrap/Button';

export default function Logout(props) {
  const handleLogout = () => {
    localStorage.clear();
    props.onLogout();
  };

  let username;
  if (localStorage.getItem('user')) {
    username = JSON.parse(localStorage.getItem('user')).userName;
  } else {
    username = null;
  }

  if (username) {
    return (
      <section className='logout-area'>
        <strong className='brandName'>Rental Rants</strong>
        <Button
          variant='primary'
          className='logout-button'
          onClick={handleLogout}
        >
          <strong>{username}</strong> Logout
        </Button>
      </section>
    );
  } else {
    return (
      <section className='logout-area'>
        <strong className='brandName'>Rental Rants</strong>
        <Button
          variant='primary'
          className='logout-button'
          onClick={props.onLogin}
        >
          Login
        </Button>
      </section>
    );
  }
}
