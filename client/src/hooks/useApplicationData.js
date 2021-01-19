import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';


export default function useApplicationData(initial) {
  
  // defines actions for reducer function
  const LOG_IN = "LOG_IN"
  const LOG_OUT = "LOG_OUT"
  const SET_PLACE = "SET_PLACE"
  const SET_PLACE_REVIEW_DATA = "SET_PLACE_REVIEW_DATA"
  const SET_NEW_REVIEW = "SET_REVIEW"

  function reducer(state, action) {

    switch (action.type) {
      case LOG_IN:
        return {
          ...state,
          userID: action.userID
        }
      case LOG_OUT:
        return {
          ...state,
          userID: null
        }
      case SET_PLACE:
        return {
          ...state,
          place: action.place
        }
      case SET_PLACE_REVIEW_DATA:
        return {
          ...state,
          placeReviewData: action.placeReviewData
        }
      case SET_NEW_REVIEW:
        return {
          ...state,
          newReview: action.newReview
        }
      }
  }


// sets initial state for the application
  const [ state, dispatch ] = useReducer(reducer, {
    userID: null,
    place: null,
    placeReviewData: [],
    newReview: {}
  })
      
  const setPlace = place = dispatch({type: "SET_PLACE", place})   
      
  
  
  
  // const getReviewsFromCoords = () => {
  //   const lat = parseFloat(place.latLng.lat).toFixed(5);
  //   const lng = parseFloat(place.latLng.lng).toFixed(5);
  //   console.log(lat, lng);
  //   Promise.all([
  //     axios.get(`http://localhost:3001/api/${lat}/${lng}`),
  //   ]).then(res => setReviewData(res[0].data));
  // };

  // const useDidMountEffect = (func, deps) => {
  //   const didMount = useRef(false);

  //   useEffect(() => {
  //     if (didMount.current) func();
  //     else didMount.current = true;
  //   }, deps);
  // };
  // useDidMountEffect(getReviewsFromCoords, [place]);

// }