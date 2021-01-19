import React from 'react';

// The button needs fixing to work as a form submitter

export default function Signup(props) {
  return (
    <section className='card'>
      <h5 className='card-header'>Create An Account</h5>
      <p>Please note that your personnal information will not be shared, though your username will appear when you add reviews.☺☺☺</p>
      <form>      
        <div class="form-group">
          <label for="inputEmail4">Email</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
          </div>       
          <div class="form-group col-md-6">
            <label for="inputAddress">Confirm Password</label>
            <input type="password" class="form-control" id="confirm_password" placeholder="*****"/>
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress2">Username</label>
          <input type="username" class="form-control" id="inputUsername" placeholder="Username"/>
        </div>
        {/* <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck"/>
            <label class="form-check-label" for="gridCheck">
              I am a landlord
            </label>
          </div>
        </div> */}
        <button type='submit' className='btn btn-outline-dark'>
          Create Account
        </button>
      </form>
    </section>
  );
}
