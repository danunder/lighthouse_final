import { React, useState } from 'react';
import StarRating from '../StarRating';

// The button needs fixing to work as a form submitter

export default function ReviewForm(props) {

  const [errorMessage, setErrorMessage] = useState('')

  const validateReview = (rating, review) => {
    if (!rating || review === "") {
      setErrorMessage(<div className='alert alert-danger'>Something is missing! You need to add a review <b>AND</b> a rating to continue.</div>);
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    } else {
      props.onNext()
    }
  };

  return (
    <section className='card-show'>
      <div className='card'>
        <h5 className='card-header'>Rate this {props.title}</h5>
        <div className='card-body'>
          <StarRating
            onRatingClick={props.onRatingChange}
            rating={props.rating}/>
            {errorMessage}
          <div className='form-group'>
            <p>{props.previewWarning}</p>
            <textarea
              className='form-control'
              rows='3'
              value={props.review}
              id='comment'
              placeholder={`Write a review of this ${props.title} ${props.title === 'property'? "including shared spaces. You'll get a chance to review your landlord and neighbourhood next." : "." }`}
              onChange={(e) => props.onChange(e.target.value)}
            ></textarea>
            <button className='btn btn-outline-dark' onClick={props.onBack}>
              Back
            </button>
            <button type='submit' className='btn btn-outline-dark' onClick={() => validateReview(props.rating, props.review)}>
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
