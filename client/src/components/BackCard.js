import React from 'react';
import { Card } from 'react-bootstrap';
import { FaChevronLeft } from 'react-icons/fa';

export default function BackCard(props) {
  return (
    <Card style={{ width: '18rem' }} className='review-card'>
      <Card.Body>
        <Card.Title>Go back</Card.Title>
        <Card.Link >
          <FaChevronLeft size={50} onClick={props.onBack} />
        </Card.Link>
        <div></div>
      </Card.Body>
    </Card>
  );
}
