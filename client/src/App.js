import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Map from './components/Map';
import Login from './components/ReviewInput/Login';
import useApplicationData from './hooks/useApplicationData';
import VisualModeBox from './components/VisualModeBox';

function App() {
  const {
    state,
    setPlace,
    setNewReview
  }
    = useApplicationData();

  return (
    <div className='App'>
      {/* <Login /> */}
      <Map onSelect={setPlace}></Map>
      <VisualModeBox
        selectedPlace={state.place}
        reviewData={state.placeReviewData}
        onSubmit={setNewReview}
      />
    </div>
  );
}

export default App;
