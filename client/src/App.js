import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMapSigns } from 'react-icons/fa';
import './App.css';
import Map, { MapContainer } from './components/Map';
import Test from './components/Test';
import axios from 'axios';

// import Reviews from './components/Reviews';
// import ReviewInput from './components/ReviewInput';
// Review component not yet apprearing on page
// import Review from './components/Review';

function App() {
  const [place, setPlace] = useState({});

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/api/',
    }).then(({ data }) => {
      console.log(data);
    });
  }, []);

  return (
    <div className='App'>
      <Map onSelect={setPlace}></Map>
      <Test
        address={place.address ? place.address : 'No address has been selected'}
      />
    </div>
  );
}

export default App;
