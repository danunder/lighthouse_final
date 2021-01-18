import React from 'react';
import StarRating from '../StarRating';

// The button needs fixing to work as a form submitter

export default function ReviewForm(props) {
  return (
    <section className='card'>
      <div className='card'>
        <h5 className='card-header'>Rate this {props.promt}</h5>
        <div className='card-body'>
          <StarRating />
          <div className='form-group'>
            <textarea
              className='form-control'
              rows='5'
              id='comment'
              placeholder='Write a review'
            ></textarea>
            <button type='submit' className='btn btn-outline-dark'>
              Next Review{props.button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
