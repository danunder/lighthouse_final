import React, { useState } from 'react';
import StarRatingShow from '../StarRatingShow'
import Like from '../Like'
import Dislike from '../Dislike'
import PhotoCarousel from '../PhotoCarousel'


// The button needs fixing to work as a form submitter

export default function ReviewShow(props) {
  const [ helpfulness, setHelpfulness ] = useState(null);
  const [ hover, setHover ] = useState(null);

  return ( <section className="card">
    <div className='card'>
      <h5 className='card-header'>props.user's review</h5>
      <div className='card-body'>
        {/* <div>
        <PhotoCarousel />
        </div> */}
        <div className="property-review">
          <h5>Property Review</h5>
          <StarRatingShow />
          <p>Text props</p>
        </div>
        <div className="landlord-review">
          <h5>Landlord Review</h5>
          <StarRatingShow />
          <p>Text props</p>
        </div>
        <div className="neighbourhood-review">
          <h5>Property Review</h5>
          <StarRatingShow />
          <p>Text props</p>
        </div>
        {/* <p>Was this review helpful?</p>
        <div className='help'>
        <Like />
        <Dislike />
        </div> */}
      </div>
    </div>
  </section>
  )
}