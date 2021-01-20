import React from 'react';
import { Container } from 'react-bootstrap';
import Reviews from './Reviews';
import ReviewForm from './ReviewInput/ReviewForm';
<<<<<<< HEAD
import useVisualMode from '../hooks/useVisualMode'

import useReviewBuilder from '../hooks/useReviewBuilder'
import TenancyForm from './ReviewInput/TenancyForm';
=======
import useVisualMode from '../hooks/useVisualMode';
import {
  setUserID,
  setPlace,
  setPlaceReviewData,
  setNewReview,
} from '../hooks/useApplicationData';
import { setReview } from '../hooks/useReviewBuilder';
>>>>>>> 144b9b18c872e57da568b2b495288b1fc9abb31e

export default function VisualModeBox(props) {
  const containerStyle = {
    width: '100%',
    position: 'absolute',
    top: '60vh',
    zIndex: '1',
  }

  
  const LOG_IN = "LOG_IN";
  const CREATE_ACCOUNT = "CREATE_ACCOUNT";
  const SHOW_REVIEWS = "SHOW_REVIEWS";
  const SHOW_FULL_REVIEW = "SHOW_FULL_REVIEW";
  const CREATE_TENANCY = "CREATE_TENANCY";
  const CREATE_PROPERTY_REVIEW = "CREATE_PROPERTY_REVIEW";
  const CREATE_LANDLORD_REVIEW = "CREATE_LANDLORD_REVIEW";
  const CREATE_NEIGHBOURHOOD_REVIEW = "CREATE_NEIGHBOURHOOD_REVIEW";
  const SUBMIT_REVIEW = "SUBMIT_REVIEW";
  
  // declare helper functions from hooks
  const { mode, transition, back } = useVisualMode(SHOW_REVIEWS)
  const { state, setTenancy, setProperty, setLandlord, setNeighbourhood } = useReviewBuilder()
  
  
  return (
    <Container style={containerStyle}>
      {mode === SHOW_REVIEWS && props.selectedPlace && (
        <Reviews
        data={props.reviewData}
        addNew={() => transition(CREATE_PROPERTY_REVIEW)}
        />}
      {/* {mode === CREATE_TENANCY &&
        <TenancyForm
        startDate={review.tenancy.startDate || null}
        endDate={review.tenancy.endDate || null}
        onChange={() => setTenancy()}
        onNext={() => transition(CREATE_PROPERTY_REVIEW)}
        onBack={() => back}
        />} */}
      {mode === CREATE_PROPERTY_REVIEW &&
        <ReviewForm 
          title={"property"}
          // rating={state.property.rating}
          review={state.property.review || null}
          onChange={(value) => setProperty(value)}
          onNext={() => transition(CREATE_LANDLORD_REVIEW)}
          onBack={() => back()}
        />}
      {mode === CREATE_LANDLORD_REVIEW &&
        <ReviewForm 
          title={"landlord"}
          // rating={state.property.rating}
          review={state.property.review || null}
          onChange={(value) => setLandlord(value)}
          onNext={() => transition(CREATE_NEIGHBOURHOOD_REVIEW)}
          onBack={() => back()}
        />}
      {mode === CREATE_NEIGHBOURHOOD_REVIEW && 
        <ReviewForm 
          title={"neighbourhood"}
          // rating={state.property.rating}
          review={state.property.review || null}
          onChange={(value) => setNeighbourhood(value)}
          onNext={() => transition(CREATE_NEIGHBOURHOOD_REVIEW)}
          onBack={() => back()}
        />
      }
    </Container>
  );
}
