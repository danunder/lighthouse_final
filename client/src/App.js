import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Map from './components/Map';

import useApplicationData from './hooks/useApplicationData';
import VisualModeBox from './components/VisualModeBox';

// import Logout from './components/Logout';

function App() {
  const { state, setPlace, setNewReview, placeReviewData } = useApplicationData();

  return (
    <div className='App'>

      
      <Map
        onSelect={setPlace}>
        </Map>
      

      <VisualModeBox
        selectedPlace={state.place}
        reviewData={state.placeReviewData}
        neighbourhoodReviewData={state.neighbourhoodReviewData}
        onSubmit={val => setNewReview(val)}
      />
    </div>
  );
}

export default App;
