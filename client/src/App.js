import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaMapSigns } from 'react-icons/fa';
import './App.css';
import Map, { MapContainer } from './components/Map';
import Test from './components/Test';
import axios from 'axios';
import Reviews from './components/Reviews';
import Login from './components/ReviewInput/Login';
// // Review component not yet apprearing on page
// import Review from './components/Review';

function App() {
  const [place, setPlace] = useState({});
  const [reviewData, setReviewData] = useState([]);

  //const review = {
  //      userID: 45345,
 //        latLng: {
//            lat: 65.44433
  //          lng: -35.22452
 //           }
  //      tenancy: { 
  //         start_date: Mar 2017
  //         end_date: Mar 2019
//                }
//        property: {
  //            review: "blah blah blah"
  //            stars: 5
  //               }
   //     neighbourhood: {
  //            review: "blah blah blah"
  //            stars: 5
  //               }
  //      landlord: {
  //            review: "blah blah blah"
  //            stars: 5
  //               }
//
//
//
//
//

          }

  const getReviewsFromCoords = () => {
    const lat = parseFloat(place.latLng.lat).toFixed(5);
    const lng = parseFloat(place.latLng.lng).toFixed(5);
    console.log(lat, lng);
    Promise.all([
      axios.get(`http://localhost:3001/api/${lat}/${lng}`),
    ]).then(res => setReviewData(res[0].data));
  };

  const useDidMountEffect = (func, deps) => {
    const didMount = useRef(false);

    useEffect(() => {
      if (didMount.current) func();
      else didMount.current = true;
    }, deps);
  };
  useDidMountEffect(getReviewsFromCoords, [place]);

  return (
    <div className='App'>
      <Login />
      <Map onSelect={setPlace}></Map>
     
      <Reviews data={reviewData} />
    </div>
  );
}

export default App;
