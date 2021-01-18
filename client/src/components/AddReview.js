import React from 'react';
import { Card } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

export default function AddReview() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Add A Review</Card.Title>
        <Card.Link href='#'>
          <FaPlus size={50} />
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
