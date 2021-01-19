import { useEffect, useReducer, useState, useRef } from 'react';
import axios from 'axios';


export default function useApplicationData(initial) {
  
  // defines actions for reducer function
  const SET_USER_ID = "SET_USER_ID"
  const SET_PLACE = "SET_PLACE"
  const SET_PLACE_REVIEW_DATA = "SET_PLACE_REVIEW_DATA"
  const SET_NEW_REVIEW = "SET_NEW_REVIEW"

  function reducer(state, action) {

    switch (action.type) {
      case SET_USER_ID:
        return {
          ...state,
          userID: action.userID
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
    newReview: {}
  })
  
  //helper functions to modify state
  const setUserID = userID => dispatch({ type: "SET_USER_ID", userID })
  
  const setPlace = place => dispatch({ type: "SET_PLACE", place })
      
  const setPlaceReviewData = placeReviewData => dispatch({ type: "SET_PLACE_REVIEW_DATA", placeReviewData })

  const setNewReview = newReview => dispatch({type: "SET_NEW_REVIEW", newReview})
  
  
  
  const getReviewsFromCoords = () => {
    const lat = parseFloat(state.place.latLng.lat).toFixed(5);
    const lng = parseFloat(state.place.latLng.lng).toFixed(5);
    console.log(lat, lng);
    Promise.all([
      axios.get(`http://localhost:3001/api/${lat}/${lng}`),
    ]).then(res => setPlaceReviewData(res[0].data));
  };

  const useDidMountEffect = (func, deps) => {
    const didMount = useRef(false);

    useEffect(() => {
      if (didMount.current) func();
      else didMount.current = true;
    }, deps);
  };

  useDidMountEffect(getReviewsFromCoords, [state.place]);

}