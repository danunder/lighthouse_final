import React from 'react';
import './Logout.css';
import Button from 'react-bootstrap/Button';

export default function Logout(props) {
  const handleClick = () => {
    localStorage.clear();
    // props.transition();
  };

  return (
    <section className='logout-area'>
      <Button variant='primary' className='logout-button' size="sm" onClick={handleClick}>
        Logout
      </Button>
    </section>
  );
}
