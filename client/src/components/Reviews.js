import React from 'react';
import AddReview from './AddReview';
import { FaStar } from 'react-icons/fa';
import { Card } from 'react-bootstrap';

import './Reviews.css';
import SeeNeighbourhoodReviews from './SeeNeigbourhoodReviews';

export default function Reviews(props) {
  const reviewData = props.data;

  const findPropertyReviews = () => {
    const propertyReviews = [];
    for (let review of reviewData) {
      if (review.category_id === 1) {
        propertyReviews.push(review);
      }
    }
    return propertyReviews;
  };

  const averageStarRating = tenancy => {
    const ratingArr = [];
    let ratingSum = 0;
    for (let review of reviewData) {
      if (tenancy === review.tenancy_id) {
        ratingArr.push(review.rating);
      }
    }
    ratingArr.forEach(num => (ratingSum += num));
    let averageRating = Math.round(ratingSum / ratingArr.length);
    return averageRating;
  };

  const mapData = findPropertyReviews().map((data, i) => {
    return (
      <Card
        style={{ width: '18rem' }}
        id={data.id}
        className='review-card'
        key={i}
      >
        <Card.Body className='card-body'>
          <div>
            <Card.Title>{data.user}</Card.Title>
            {/* <Card.Subtitle className='mb-2 text-muted'>5 Stars</Card.Subtitle> */}
            {[...Array(averageStarRating(data.tenancy_id))].map((e, index) => (
              <FaStar key={index} />
            ))}
          </div>
          <div>
            <Card.Text className='text'>{data.review.substr(0, 80)}</Card.Text>
          </div>
          <div>
            <Card.Link
              onClick={() => props.onClick(data.tenancy_id)}
              className='link'
            >
              View More
            </Card.Link>
          </div>
        </Card.Body>
      </Card>
    );
  });
  return (
    <div className='reviews'>
      <AddReview onClick={props.addNew} />
      {mapData}
      <SeeNeighbourhoodReviews onClick={props.seeMore} />
    </div>
  );
}
