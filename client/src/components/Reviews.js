import React from 'react';
import AddReview from './AddReview';
import { FaStar } from 'react-icons/fa';
// import { Card } from 'react-bootstrap';

export default function Reviews() {
  const fakeReview = [
    {
      name: 'Jared',
      stars: 4,
    },
    {
      name: 'Jimmy',
      stars: 2,
    },
    {
      name: 'Dan',
      stars: 3,
    },
    {
      name: 'Emily',
      stars: 5,
    },
  ];
  const mapData = fakeReview.map(data => {
    return (
      <div className='review-block'>
        {/* <h1>*****</h1> */}
        <FaStar />
        <FaStar />
        <FaStar />
        <h1>{data.name}</h1>
        <p>View More ...</p>
      </div>
    );
  });
  return (
    <>
      {mapData}
      <AddReview />
    </>
    // <Card style={{ width: '18rem' }}>
    //   <Card.Body>
    //     <Card.Title>Jared F</Card.Title>
    //     <Card.Subtitle className='mb-2 text-muted'>5 Stars</Card.Subtitle>
    //     <Card.Text>
    //       Here we would input a snipped from the user's review of the property.
    //     </Card.Text>
    //     <Card.Link href='#'>View More</Card.Link>
    //   </Card.Body>
    // </Card>
  );
}
