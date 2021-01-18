import React from 'react';
import AddReview from './AddReview';
import { FaStar } from 'react-icons/fa';
import { Card } from 'react-bootstrap';

export default function Reviews() {
  const fakeReview = [
    {
      name: 'Jared',
      stars: 4,
      review: 'So good',
    },
    {
      name: 'Jimmy',
      stars: 2,
      review: 'So bad',
    },
    {
      name: 'Dan',
      stars: 3,
      review: 'I love this hood!',
    },
    {
      name: 'Emily',
      stars: 5,
      review: 'I am going to live here forever!',
    },
  ];
  const mapData = fakeReview.map(data => {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          {/* <Card.Subtitle className='mb-2 text-muted'>5 Stars</Card.Subtitle> */}
          {[...Array(data.stars)].map((e, index) => (
            <FaStar />
          ))}
          <Card.Text>{data.review}</Card.Text>
          <Card.Link href='#'>View More</Card.Link>
        </Card.Body>
      </Card>
    );
  });
  return (
    <>
      {mapData}
      <AddReview />
    </>
  );
}
