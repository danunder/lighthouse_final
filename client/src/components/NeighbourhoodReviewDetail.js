import { React } from 'react';
import StarRating from './StarRating';

// The button needs fixing to work as a form submitter

export default function NeighbourhoodReviewDetail(props) {

  const { tenancyID } = props;

  const reviewData = props.data.filter(data => data.tenancy_id === tenancyID);
  console.log(reviewData)

  

  return (
    <section className='card-show'>
      <div className='card'>
        <h5 className='card-header'>{reviewData[0].user} said this about the neighbourhood...</h5>
        <div className='card-body'>
          <StarRating
            rating={reviewData[0].rating}/>
          <div className='form-group'>
            
            <p>{reviewData[0].review}</p>
            <button className='btn btn-outline-dark' onClick={props.onClose}>
              Back
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
}
