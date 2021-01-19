import { useEffect, useReducer } from 'react';

export default function useReviewBuilder(initial) {
    
  const SET_PROPERTY = "SET_PROPERTY"
  const SET_LANDLORD = "SET_LANDLORD"
  const SET_NEIGHBOURHOOD = "SET_NEIGHBOURHOOD"
  

  function reducer(state, action) {
    switch (action.type) {
      case SET_PROPERTY:
        return {
          ...review,
          property: action.property
      }
      case SET_LANDLORD:
        return {
          ...review,
          landlord: action.landlord
        }
      case SET_NEIGHBOURHOOD:
        return {
          ...state,
          neighbourhood: action.neighbourhood
        }
          
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
      } 
    }

  const [review, setReview] = useReviewBuilder(reducer, {
    property: { 
      rating: null,
      review: '',
    },
    landlord: {
      rating: null,
      review: '',
    },
    neighbourhood: {
      rating: null,
      review: '',
    }
  })

  //to use : setReview()

};