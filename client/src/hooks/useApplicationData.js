import { useEffect, useReducer, useState, useRef } from 'react';
import axios from 'axios';

export default function useApplicationData(initial) {
  // defines actions for reducer function
  const SET_USER_ID = 'SET_USER_ID';
  const SET_PLACE = 'SET_PLACE';
  const SET_PLACE_REVIEW_DATA = 'SET_PLACE_REVIEW_DATA';
  const SET_NEW_REVIEW = 'SET_NEW_REVIEW';

  function reducer(state, action) {
    switch (action.type) {
      case SET_USER_ID:
        return {
          ...state,
          userID: action.userID,
        };
      case SET_PLACE:
        return {
          ...state,
          place: action.place,
        };
      case SET_PLACE_REVIEW_DATA:
        return {
          ...state,
          placeReviewData: action.placeReviewData,
        };
      case SET_NEW_REVIEW:
        return {
          ...state,
          newReview: action.newReview,
        };

      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }

  // sets initial state for the application
  const [state, dispatch] = useReducer(reducer, {
    userID: null,
    place: null,
    placeReviewData: [],
    newReview: null,
  });

  //helper functions to modify state
  const setUserID = userID => dispatch({ type: 'SET_USER_ID', userID });
  const setPlace = place => dispatch({ type: 'SET_PLACE', place });
  const setPlaceReviewData = placeReviewData =>
    dispatch({ type: 'SET_PLACE_REVIEW_DATA', placeReviewData });
  const setNewReview = newReview =>
    dispatch({ type: 'SET_NEW_REVIEW', newReview });

  // Passes coords from Maps API to backend
  const getReviewsFromCoords = () => {
    const lat = parseFloat(state.place.latLng.lat).toFixed(5);
    const lng = parseFloat(state.place.latLng.lng).toFixed(5);
    Promise.all([
      axios.get(`http://localhost:3001/api/${lat}/${lng}`),
    ]).then(res => setPlaceReviewData(res[0].data));
  };

  // push review to parent state with props.

  // MOVE THIS to useApplicationData
  const postNewReview = () => {
    const reviewData = {
      //localStorage.getItem('user').id
      user: localStorage.getItem('user'),
      place: state.place,
      review: state.newReview,
    };
    console.log(reviewData);
    axios.post(`http://localhost:3001/api/review`, { reviewData }).then(res => console.log('AXIOS PUT SUCCESS ', res));
  };

  useEffect(() => {
    if (state.place) {
      getReviewsFromCoords();
    }
  }, [state.place]);

  useEffect(() => {
    if (state.newReview) {
      postNewReview();
    }
  }, [state.newReview]);

  return { state, setUserID, setPlace, setPlaceReviewData, setNewReview };
}
