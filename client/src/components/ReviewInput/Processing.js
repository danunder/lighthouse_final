import React from 'react';
import Spinner from '../Spinner'

// The button needs fixing to work as a form submitter

export default function ReviewForm(props) {
  return (
    <section className='card'>
      <div className='card'>
        <div className='card-body-processing'>
          <p></p>
          <h5>Processing{props.title}</h5>
          <Spinner />
        </div>
      </div>
    </section>
  );
}
