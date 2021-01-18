import React, { useState } from 'react';
import StarRatingShow from '../StarRatingShow'
import Like from '../Like'
import Dislike from '../Dislike'
import PhotoCarousel from '../PhotoCarousel'


// The button needs fixing to work as a form submitter

export default function ReviewShow(props) {
  const [ helpfulness, setHelpfulness ] = useState(null);
  const [ hover, setHover ] = useState(null);

  return ( <section classname="card">
    <div class='card'>
      <h5 class='card-header'>props.user's review</h5>
      <div class='card-body'>
        {/* <div>
        <PhotoCarousel />
        </div> */}
        <div class="property-review">
          <h5>Property Review</h5>
          <StarRatingShow />
          <p>Text props</p>
        </div>
        <div class="landlord-review">
          <h5>Landlord Review</h5>
          <StarRatingShow />
          <p>Text props</p>
        </div>
        <div class="neighbourhood-review">
          <h5>Property Review</h5>
          <StarRatingShow />
          <p>Text props</p>
        </div>
        {/* <p>Was this review helpful?</p>
        <div class='help'>
        <Like />
        <Dislike />
        </div> */}
      </div>
    </div>
  </section>
  )
}