import React from 'react';
import StarRating from '../StarRating'


// The button needs fixing to work as a form submitter

export default function ReviewForm(props) {

  return ( <section className="card float" >
    <div class='card'>
      <h5 class='card-header'>Rate this {props.promt}</h5>
      <div class='card-body'>
        <StarRating/>
        <div class="form-group">
          <textarea class="form-control" rows="5" id="comment" placeholder="Write a review"></textarea>
          <button type="submit" class="btn btn-outline-dark">Next Review{props.button}</button>
        </div>
      </div>
    </div>
  </section>)
}