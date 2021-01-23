import React, { useState } from 'react';
import StarRatingShow from '../StarRatingShow';
import './styles.css'


export default function ReviewSubmit(props) {
  
  const checkDate = () => {
    const months = ["buffer", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const currentYear = Math.floor((new Date()).toString().split(' ')[3]);
    const currentMonth = months.indexOf((new Date()).toString().split(' ')[1]);
    const startYear = Math.floor((props.tenancyStartDate).split('-')[0]);
    const startMonth = Math.floor((props.tenancyStartDate).split('-')[1]);
    const endYear = Math.floor((props.tenancyEndDate).split('-')[0]);
    const endMonth = Math.floor((props.tenancyEndDate).split('-')[1]);
    console.log("Date now is: ", currentYear, currentMonth);
    console.log("Start date is: ", startYear, startMonth);
    console.log("Start end is: ", endYear, endMonth);
    // current month is index 1
    // current year is index 3
    // check if index of current month > to end-date month AND current year >= end-date year
    if (endYear >= currentYear && endMonth > currentMonth) {
      console.log('future!!')
    } else if (startYear >= endYear) {
      console.log('time traveler!!')
    } else {
      console.log('pass')
    }
    // check if index of end-date month >= to start-date month AND end-date year >= start-date year
  };

  return (
    <section className='card-show'>
      <div className='card'>
        <h5 className='header'>
          Full Review - tenant lived here between {props.tenancyStartDate} and{' '}
          {props.tenancyEndDate}
        </h5>
        <div className='card-body'>
          <div className='property-review'>
            <h5>Property Review {checkDate()}</h5>
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
          <button className='btn btn-outline-dark' onClick={props.onBack}>
            Back
          </button>
          <button className='btn btn-outline-dark' onClick={props.onSubmit}>
            Submit review
          </button>
        </div>
      </div>
    </section>
  );
}
