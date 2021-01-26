import React from 'react';

import { FaStar } from 'react-icons/fa';
import { Card } from 'react-bootstrap';

import './Reviews.css';
import BackCard from './BackCard';


export default function NeighbourhoodReviews(props) {
  const neighbourhoodReviewData = props.data;

  const mapData = neighbourhoodReviewData.map((data, i) => {
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
           
            {[...Array(data.rating)].map((e, index) => (
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
      <BackCard onBack={props.onBack} />
      {mapData}
      
    </div>
  );
}
