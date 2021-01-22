import React from 'react';
import StarRatingShow from '../StarRatingShow';
// import Like from '../Like';
// import Dislike from '../Dislike';
// import PhotoCarousel from '../PhotoCarousel';

import './styles.css'

// The button needs fixing to work as a form submitter

export default function ReviewShow(props) {
  // const [ helpfulness, setHelpfulness ] = useState(null);
  // const [ hover, setHover ] = useState(null);

  const { tenancyID } = props;

  const reviewData = props.data.filter(data => data.tenancy_id === tenancyID);

  const findFullReview = () => {
    const reviewObj = {};
    for (let review of reviewData) {
      if (review.category_id === 1) {
        reviewObj.propertyReview = review;
      } else if (review.category_id === 2) {
        reviewObj.neighbourhoodReview = review;
      } else if (review.category_id === 3) {
        reviewObj.landlordReview = review;
      }
    }
    return reviewObj;
  };

  findFullReview();

  return (
    <section className='card-show'>
      <div className='card'>
        <div className='header'>
        <h5 className='card-title'>{reviewData[0].user}'s review</h5>
        <button
          type='button'
          className='close'
          aria-label='Close'
          onClick={props.onClose}
        >
          <span aria-hidden='true'>&times;</span>
        </button>
        </div>
        
        <div className='card-body'>
          {/* <div>
        <PhotoCarousel />
        </div> */}
          <div className='property-review'>
            <h5>Property Review</h5>
            <StarRatingShow rating={findFullReview().propertyReview.rating} />
            <p>{findFullReview().propertyReview.review}</p>
          </div>
          <p>
            {'---'}
          </p>
          <div className='landlord-review'>
            <h5>Landlord Review</h5>
            <StarRatingShow rating={findFullReview().landlordReview.rating} />
            <p>{findFullReview().landlordReview.review}</p>
          </div>
          <p>
            {'---'}
          </p>
          <div className='neighbourhood-review'>
            <h5>Neighbourhood Review</h5>
            <StarRatingShow
              rating={findFullReview().neighbourhoodReview.rating}
            />
            <p>{findFullReview().neighbourhoodReview.review}</p>
          </div>
          {/* <p>Was this review helpful?</p>
        <div className='help'>
        <Like />
        <Dislike />
        </div> */}
        </div>
      </div>
    </section>
  );
}
