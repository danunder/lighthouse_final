import React from 'react';
import { Container } from 'react-bootstrap';
import Reviews from './Reviews';

export default function VisualModeBox(props) {

  const containerStyle = {
    width: '100%',
    position: 'absolute',
    top: '60vh',    
    zIndex: '1',
    }
  return (
    <Container style={containerStyle} >
      <Reviews data={props.reviewData} />
    </Container>
  )
}