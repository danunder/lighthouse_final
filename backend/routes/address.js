const express = require('express');
const router = express.Router();
const cookieSession = require('cookie-session');

module.exports = ({
  getReviews,
  login,
  signup,
  findPropertyID,
  createProperty,
}) => {
  router.get('/:lat/:lng', (req, res) => {
    const lng = req.params.lng;
    const lat = req.params.lat;
    getReviews(lng, lat)
      .then(aa => res.json(aa))
      .catch(e => console.log('Backend error', e.message));
  });
  router.post('/login', (req, res) => {
    const { username, password } = req.body;
    login(username, password)
      .then(bb => res.json(bb))
      .catch(e => console.log('Backend error ', e.message));
  });
  router.post('/review', (req, res) => {
    //User is just the ID
    //Place has the coordinates
    //Review has property review, landlord review, neighbourhood review, and tenancy dates
    const { user, place, review } = req.body.reviewData;
    const userID = user;
    console.log('User ID: ', userID);
    console.log('Place Data: ', place);
    console.log('Review Data: ', review);

    const lat = parseFloat(place.latLng.lat).toFixed(5);
    const lng = parseFloat(place.latLng.lng).toFixed(5);
    const { tenancyStartDate, tenancyEndDate } = review;
    const { placeID } = place;

    // Check if the location is in the Db (lat === this && lng === this)
    // if not, insert the entry (+ return property id)
    // if so return property id

    // const location = findLocation(lat, lng) => {
    //   const query = ``;
    // }

    // if (location) {
    //   return location
    // } else {
    //   insertLocation(lat, lng)
    // }

    const propertyID = findPropertyID(lat, lng)
      .then(res => {
        if (!res.rows.length) {
          //It didn't find the ID, create an entry
          createProperty(placeID, lat, lng).then(res =>
            console.log('it added a new id: ', res)
          );
        } else {
          //It did find the property
          console.log('it found the id ', res);
          return res;
        }
      })
      .catch(e => e.message);
    // const createTenancy = (startDate, endDate, propertyID, userID) => {
    //   const query = ``;
    //   return db.query(query);
    // };

    // const tenancyID = createTenancy(
    //   tenancyStartDate,
    //   tenancyEndDate,
    //   propertyID,
    //   userID
    // );

    // const insertCommentsQuery = `
    //   INSERT INTO reviews
    //   INSERT
    //   INSERT
    // `;
    //3 different text reviews, 3 different number reviews, propertyID, tenancyID
    // values = [];

    // return db.query(insertCommentsQuery, values);
  });
  //We have a property ID assigned to variable propertyID
  // const query1 = ``; //create tenancy
  // const query2 = ``; //create review, do 3 idem (its variable will be wtv is stored insiode buffer)
  // const buffer = {};
  // db.query(query1)
  //   .then(query1Answer => {
  //     buffer.query1 = query1Answer;
  //     return db.query(query2);
  //   })
  //   .then(query2Answer => {
  //     buffer.query2 = query2Answer;
  //   });
  //
  /*
Place Data:  { address: 'Herne, Germany',
  latLng: { lat: 51.5368948, lng: 7.200914699999999 },
  placeID: 'ChIJFaN4ZIPhuEcRgIdUMYHyJwQ' }
Review Data:  {
  tenancyStartDate: '2021-06',
  tenancyEndDate: '2021-07',
  propertyRating: 3,
  propertyReview: 'fsdsd',
  landlordRating: 4,
  landlordReview: 'dsg',
  neighbourhoodRating: 3,
  neighbourhoodReview: 'gsdgsd' }
*/

  // insert the tenancy object (startDate, endDate)
  // linked to property id and user id
  // return tenancy id

  // destructure the review components
  // insert three parts into reviews table
  // linked to category id, tenancy id
  //  };

  router.post('/signup', (req, res) => {
    const { signupUser, signupPass } = req.body;
    signup(signupUser, signupPass)
      .then(jj => res.json(jj))
      .catch(e => console.log('Signup error ', e.message));
  });
  return router;
};
