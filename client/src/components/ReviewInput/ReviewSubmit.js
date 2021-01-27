import React, { useState } from 'react';
import StarRatingShow from '../StarRatingShow';
import './styles.css'


export default function ReviewSubmit(props) {

  return (
    <section className='card-show large'>
      <div className='card'>
        <h5 className='header'>
          Full Review - tenant lived here between {props.tenancyStartDate} and{' '}
          {props.tenancyEndDate}
        </h5>
        <div className='card-body  submit'>
          <div className='property-review'>
            <h5>Property Review</h5>
            <StarRatingShow rating={props.propertyRating} />
            <p>{props.propertyReview}</p>
          </div>
          <div className='landlord-review'>
            <h5>Landlord Review</h5>
            <StarRatingShow rating={props.landlordRating} />
            <p>{props.landlordReview}</p>
          </div>
          <div className='neighbourhood-review'>
            <h5>Property Review</h5>
            <StarRatingShow rating={props.neighbourhoodRating} />
            <p>{props.neighbourhoodReview}</p>
          </div>
        </div>
          <button className='btn btn-outline-dark' onClick={props.onBack}>
            Back
          </button>
          <button className='btn btn-outline-dark' onClick={props.onSubmit}>
            Submit review
          </button>
      </div>
    </section>
  );
}
