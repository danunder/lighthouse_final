import { useEffect, useReducer } from 'react';

export default function useReviewBuilder(initial) {
    
  const SET_TENANCY = "SET_TENANCY";
  const SET_PROPERTY = "SET_PROPERTY";
  const SET_LANDLORD = "SET_LANDLORD";
  const SET_NEIGHBOURHOOD = "SET_NEIGHBOURHOOD";
  

  function reducer(state, action) {
    switch (action.type) {
      case SET_TENANCY:
        return {
          ...review,
          tenancy: action.tenancy
      }
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

  const [review, setReview] = useReducer(reducer, {
    tenancy: {
      startDate: null,
      endDate: null,
    },
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

  //** to use : setReview({type: "NEIGHBOURHOOD", neighbourhood : {
  //          rating: 5
  //          review: "we loved it the coffe shops are plentiful"
//                      })

};