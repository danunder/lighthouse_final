import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import StarRating from '../StarRating'

import React from 'react';
// import StarRating from 'react-bootstrap-star-rating';


export default function ReviewForm(props) {

  return ( <section classname="card">
    <Card>
      <Card.Header as="h5">Rate this property</Card.Header>
      <Card.Body>
      <Card.Title><StarRating/>
        </Card.Title>

        <Form>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Next Review
          </Button>
        </Form>

      </Card.Body>
    </Card>
  </section>)
}