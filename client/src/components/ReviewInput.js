import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function ReviewInput() {
  return (
    <div className='review-input'>
      <Card>
        <Card.Header as='h5'>Review The Landlord</Card.Header>
        <Card.Body>
          <Wrapper>
            <input placeholder='Enter Your Review' />
            <Button variant='primary'>Skip</Button>
            <Button variant='primary'>Next</Button>
          </Wrapper>
        </Card.Body>
      </Card>
    </div>
  );
}
