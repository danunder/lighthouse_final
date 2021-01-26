import React from 'react';
import { Card } from 'react-bootstrap';
import { BiLocationPlus } from 'react-icons/fa';

export default function SeeNeighbourhoodReviews(props) {
  return (
    <Card style={{ width: '18rem' }} className='review-card'>
      <Card.Body>
        <Card.Title>See Neighbourhood reviews</Card.Title>
        <Card.Link >
          <BiLocationPlus size={50} onClick={props.onClick} />
        </Card.Link>
        <div></div>
      </Card.Body>
    </Card>
  );
}
