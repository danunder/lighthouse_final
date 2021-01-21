import { useReducer } from 'react';

export default function useReviewBuilder(initial) {
    
  const SET_TENANCY_START_DATE = "SET_TENANCY_START_DATE";
  const SET_TENANCY_END_DATE = "SET_TENANCY_END_DATE";
  const SET_PROPERTY_RATING = "SET_PROPERTY_RATING";
  const SET_PROPERTY_REVIEW = "SET_PROPERTY_REVIEW";
  const SET_LANDLORD_RATING = "SET_LANDLORD_RATING";
  const SET_LANDLORD_REVIEW = "SET_LANDLORD_REVIEW";
  const SET_NEIGHBOURHOOD_RATING = "SET_NEIGHBOURHOOD_RATING";
  const SET_NEIGHBOURHOOD_REVIEW = "SET_NEIGHBOURHOOD_REVIEW";
  

  function reducer(state, action) {
    switch (action.type) {
      case SET_TENANCY_START_DATE:
        return {
          ...state,
          tenancyStartDate: action.tenancyStartDate
        }
      case SET_TENANCY_END_DATE:
        return {
          ...state,
          tenancyEndDate: action.tenancyEndDate
        }
      case SET_PROPERTY_RATING:
        return {
          ...state,
          propertyRating: action.propertyRating
        }
      case SET_PROPERTY_REVIEW:
        return {
          ...state,
          propertyReview: action.propertyReview
        }
      case SET_LANDLORD_RATING:
        return {
          ...state,
          landlordRating: action.landlordRating
        }
      case SET_LANDLORD_REVIEW:
        return {
          ...state,
          landlordReview: action.landlordReview
        }
      case SET_NEIGHBOURHOOD_RATING:
        return {
          ...state,
          neighbourhoodRating: action.neighbourhoodRating
        }
      case SET_NEIGHBOURHOOD_REVIEW:
        return {
          ...state,
          neighbourhoodReview: action.neighbourhoodReview
        }
          
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }

  const [state, dispatch] = useReducer(reducer, {
      tenancyStartDate: "",
      tenancyEndDate: "",
      propertyRating: null,
      propertyReview: '',
      landlordRating: null,
      landlordReview: '',
      neighbourhoodRating: null,
      neighbourhoodReview: ''
  })

  const setTenancyStartDate = tenancyStartDate => dispatch({ type: SET_TENANCY_START_DATE, tenancyStartDate })
  const setTenancyEndDate = tenancyEndDate => dispatch({ type: SET_TENANCY_END_DATE, tenancyEndDate })
  const setPropertyRating = propertyRating => dispatch({ type: SET_PROPERTY_RATING, propertyRating })
  const setPropertyReview = propertyReview => dispatch({ type: SET_PROPERTY_REVIEW, propertyReview })
  const setLandlordRating = landlordRating => dispatch({ type: SET_LANDLORD_RATING, landlordRating })
  const setLandlordReview= landlordReview => dispatch({ type: SET_LANDLORD_REVIEW, landlordReview })
  const setNeighbourhoodReview = neighbourhoodReview => dispatch({ type: SET_NEIGHBOURHOOD_REVIEW, neighbourhoodReview })
  const setNeighbourhoodRating = neighbourhoodRating => dispatch({ type: SET_NEIGHBOURHOOD_RATING, neighbourhoodRating })
  

  return { state, setTenancyStartDate, setTenancyEndDate, setPropertyRating, setPropertyReview, setLandlordRating, setLandlordReview, setNeighbourhoodRating, setNeighbourhoodReview }


};