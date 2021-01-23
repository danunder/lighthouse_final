import React from 'react';

export default function Logout(props) {
  const handleClick = () => {
    localStorage.clear();
    props.transition();
  };

  return <button onClick={handleClick}>Logout!</button>;
}
