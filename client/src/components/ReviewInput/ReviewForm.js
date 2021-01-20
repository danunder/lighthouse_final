import React from 'react';
import StarRating from '../StarRating';

// The button needs fixing to work as a form submitter

export default function ReviewForm(props) {
  return (
    <section className='card'>
      <div className='card'>
        <h5 className='card-header'>Rate this {props.title}</h5>
        <div className='card-body'>
          <StarRating />
          <div className='form-group'>
            <input
              className='form-control'
              rows='5'
              value={props.review}
              id='comment'
              placeholder={`Write a review of this ${props.title}`}
              onChange={(e) => props.onChange(e.target.value)}
            ></input>
            <button className='btn btn-outline-dark' onClick={props.onBack}>
              Back
            </button>
            <button type='submit' className='btn btn-outline-dark' onClick={props.onNext}>
              {props.buttonName}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
