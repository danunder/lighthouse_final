import React from 'react';
import { Container } from 'react-bootstrap';
import Reviews from './Reviews';
import ReviewForm from './ReviewInput/ReviewForm';
<<<<<<< HEAD
import useVisualMode from '../hooks/useVisualMode';
import useReviewBuilder from '../hooks/useReviewBuilder';
=======
import useVisualMode from '../hooks/useVisualMode'
import axios from 'axios';
import useReviewBuilder from '../hooks/useReviewBuilder'
>>>>>>> 65d7b924181d196ddad0e71d89fd56f245e5e655
import TenancyForm from './ReviewInput/TenancyForm';

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
  const { state, setTenancyStartDate, setTenancyEndDate, setPropertyRating, setPropertyReview, setLandlordRating, setLandlordReview, setNeighbourhoodRating, setNeighbourhoodReview } = useReviewBuilder()
  
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(state);
    const reviewData = state;
    //Need state object
    axios.post(`http://localhost:3001/api/review`, { reviewData }).then(res => {
      console.log('AXIOS PUT SUCCESS ', res);
    });
    transition(SHOW_REVIEWS)
  };
  
  return (
    <Container style={containerStyle}>
      {mode === SHOW_REVIEWS && props.selectedPlace && (
        <Reviews
          data={props.reviewData}
          addNew={() => transition(CREATE_PROPERTY_REVIEW)}
        />
      )}

      {/* {mode === CREATE_TENANCY &&
        <TenancyForm
        startDate={state.tenancyStartDate || null}
        endDate={state.tenancyEndDate || null}
        onStartChange={(value) => setTenancyStartDate(value)}
        onEndChange={(value) => setTenancyEndDate(value)}
        onNext={() => transition(CREATE_PROPERTY_REVIEW)}
        onBack={() => back}
        />} */}
      {mode === CREATE_PROPERTY_REVIEW && (
        <ReviewForm
          title={'property'}
          // rating={state.property.rating}
          review={state.propertyReview || null}
          onChange={(value) => setPropertyReview(value)}
          onNext={() => transition(CREATE_LANDLORD_REVIEW)}
        onBack={() => back()}
        buttonName={'Next'}
        />}
      {mode === CREATE_LANDLORD_REVIEW &&
        <ReviewForm 
          title={"landlord"}
          // rating={state.property.rating}
          review={state.landlordReview || null}
          onChange={(value) => setLandlordReview(value)}
          onNext={() => transition(CREATE_NEIGHBOURHOOD_REVIEW)}
          onBack={() => back()}
          buttonName={'Next'}
        />}
      {mode === CREATE_NEIGHBOURHOOD_REVIEW && 
        <ReviewForm 
          title={"neighbourhood"}
          // rating={state.property.rating}
          review={state.neighbourhoodReview || null}
          onChange={(value) => setNeighbourhoodReview(value)}
          //Call the API
          onNext={handleSubmit}
          onBack={() => back()}
          buttonName={'Submit'}
        />
      )}
    </Container>
  );
}
