import React from 'react';
import AddReview from './AddReview';
import { FaStar } from 'react-icons/fa';
import { Card } from 'react-bootstrap';

export default function Reviews(props) {
  const reviewData = props.data;

  const mapData = reviewData.map(data => {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{data.username}</Card.Title>
          {/* <Card.Subtitle className='mb-2 text-muted'>5 Stars</Card.Subtitle> */}
          {[...Array(data.rating)].map((e, index) => (
            <FaStar />
          ))}
          <Card.Text>{data.review}</Card.Text>
          <Card.Link href='#' onClick={props.onClick}>View More</Card.Link>
        </Card.Body>
      </Card>
    );
  });
  return (
    <>
      {mapData}
      <AddReview
      onClick={props.addNew}/>
    </>
  );
}
