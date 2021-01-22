import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Map from './components/Map';
// import Login from './components/ReviewInput/Login';
import useApplicationData from './hooks/useApplicationData';
import VisualModeBox from './components/VisualModeBox';
import UserAuth from './components/UserAuth';

function App() {
  const {
    state,
    setPlace,
    setNewReview
  }
    = useApplicationData();

  return (
    <div className='App'>
      {/* <UserAuth /> */}
      <Map onSelect={setPlace}></Map>
      <VisualModeBox
        selectedPlace={state.place}
        reviewData={state.placeReviewData}
        onSubmit={(val) => setNewReview(val)}
      />
    </div>
  );
}

export default App;
