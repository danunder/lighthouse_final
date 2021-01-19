import React from 'react';

// The button needs fixing to work as a form submitter

export default function Signup(props) {
  return (
    <section className='card'>
      <h5 className='card-header'>Welcome Back! ☺☺☺</h5>
      <form>
        <div class='form-group col-md-6'>
          <label for='inputAddress2'>Username</label>
          <input
            type='username'
            class='form-control'
            id='inputUsername'
            placeholder='Username'
          />
        </div>
        <div class='form-group col-md-6'>
          <label for='inputPassword4'>Password</label>
          <input
            type='password'
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
