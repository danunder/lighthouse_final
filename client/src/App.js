import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMapSigns } from 'react-icons/fa';
import './App.css';
import Map, { MapContainer } from './components/Map';
import Test from './components/Test';

// import Reviews from './components/Reviews';
// // import ReviewInput from './components/ReviewInput';
// // Review component not yet apprearing on page
// import Review from './components/Review';

function App() {

  const [place, setPlace] = useState('');

  return (
    <div className='App'>
      <Map
        onSelect={setPlace}>

      </Map>
        
    </div>
  );
}

export default App;
