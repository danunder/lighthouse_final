import React from 'react';
import StarRating from '../StarRating'


export default function ReviewForm(props) {

  return ( <section classname="card">
    <div class='card'>
      <h5 class='card-header'>Rate this {props.category}</h5>
      <div class='card-body'>
        <StarRating/>
        <div class="form-group">
          <textarea class="form-control" rows="5" id="comment" placeholder="Write a review"></textarea>
          <button type="button" class="btn btn-outline-dark">Next Review{props.button}</button>
        </div>
      </div>
    </div>
  </section>)
}