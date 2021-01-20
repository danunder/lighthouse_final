import React from 'react';
import { Container } from 'react-bootstrap';
import Reviews from './Reviews';
import ReviewForm from './ReviewInput/ReviewForm';
import useVisualMode from '../hooks/useVisualMode';
import {
  setUserID,
  setPlace,
  setPlaceReviewData,
  setNewReview,
} from '../hooks/useApplicationData';
import { setReview } from '../hooks/useReviewBuilder';

export default function VisualModeBox(props) {
  const containerStyle = {
    width: '100%',
    position: 'absolute',
    top: '60vh',
    zIndex: '1',
  };

  const LOG_IN = 'LOG_IN';
  const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
  const SHOW_REVIEWS = 'SHOW_REVIEWS';
  const SHOW_FULL_REVIEW = 'SHOW_FULL_REVIEW';
  const CREATE_TENANCY = 'CREATE_TENANCY';
  const CREATE_PROPERTY_REVIEW = 'CREATE_PROPERTY_REVIEW';
  const CREATE_LANDLORD_REVIEW = 'CREATE_LANDLORD_REVIEW';
  const CREATE_NEIGHBOURHOOD_REVIEW = 'CREATE_NEIGHBOURHOOD_REVIEW';
  const SUBMIT_REVIEW = 'SUBMIT_REVIEW';

  const { mode, transition, back } = useVisualMode(SHOW_REVIEWS);

  return (
    <Container style={containerStyle}>
      {mode === SHOW_REVIEWS && props.selectedPlace && (
        <Reviews
          data={props.reviewData}
          addNew={() => transition(CREATE_TENANCY)}
        />
      )}
      {mode === CREATE_TENANCY && (
        <ReviewForm
          header='Tenancy'
          buttonName='Next'
          back={() => back()}
          onClick={() => transition(CREATE_PROPERTY_REVIEW)}
        />
      )}
      {mode === CREATE_PROPERTY_REVIEW && (
        <ReviewForm
          header='Property'
          buttonName='Next'
          back={() => back()}
          onClick={() => transition(CREATE_LANDLORD_REVIEW)}
        />
      )}
      {mode === CREATE_LANDLORD_REVIEW && (
        <ReviewForm
          header='Landlord'
          buttonName='Next'
          back={() => back()}
          onClick={() => transition(CREATE_NEIGHBOURHOOD_REVIEW)}
        />
      )}
      {mode === CREATE_NEIGHBOURHOOD_REVIEW && (
        <ReviewForm
          header='Neighbourhood'
          buttonName='Review'
          back={() => back()}
        />
      )}
    </Container>
  );
}
