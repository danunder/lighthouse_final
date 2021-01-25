const express = require('express');
const router = express.Router();
const cookieSession = require('cookie-session');

module.exports = ({
  getReviews,
  getNeighbourhoodReviews,
  login,
  checkUsername,
  findPropertyID,
  createProperty,
  createTenancy,
  createReviews,
  createAccount,
}) => {
  router.get('/:lat/:lng', (req, res) => {
    const lng = req.params.lng;
    const lat = req.params.lat;
    return Promise.all([
      getReviews(lng, lat),
      getNeighbourhoodReviews(lng, lat)
    ]) .then(aa => res.json(aa))
      .catch(e => console.log('Backend error', e.message));
  });
  router.post('/login', (req, res) => {
    const { username, password } = req.body;
    // console.log('JARED TEST ', req.body)
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
    const {
      tenancyStartDate,
      tenancyEndDate,
      propertyRating,
      propertyReview,
      landlordRating,
      landlordReview,
      neighbourhoodRating,
      neighbourhoodReview,
    } = review;
    const placeID = place.placeID;
    // const queryVars = {}

    findPropertyID(lat, lng)
      .then(a => {
        if (!a.rows.length) {
          //It didn't find the ID, create an entry
          console.log('creating new property');
          return createProperty(placeID, lat, lng).then(b => {
            console.log(b);
            return b;
          });
        }
        console.log('this property exists');
        return a;
      })
      .then(c => {
        const propertyID = c.rows[0].id;
        console.log('property id: ', propertyID);
        return createTenancy(
          tenancyStartDate,
          tenancyEndDate,
          userID,
          propertyID
        );
      })
      .then(d => {
        const tenancyID = d.rows[0].id;
        console.log('tenancy id: ', tenancyID);
        return createReviews(
          tenancyID,
          propertyRating,
          propertyReview,
          landlordRating,
          landlordReview,
          neighbourhoodRating,
          neighbourhoodReview
        );
      })
      .then(fff => res.json(fff))
      .catch(e => e.message);
  });

  router.post('/signup', (req, res) => {
    // const { signupUser, signupPass } = req.body;
    // const userName = signupUser;
    // const password = signupPass;
    // const firstName = 'Lindsay';
    // const lastName = 'Hertzman';
    // const email = 'Lindsay@gmail.com';
    const {userName, firstName, lastName, email, password} = req.body
    // console.log('register info: ', req.body)
    checkUsername(userName)
      .then(response => {
        // console.log('DAN RES ', response);
        if (!response.rows.length) {
          return createAccount(userName, password, firstName, lastName, email);
        } else {
          throw new Error('null');
        }
      })
      .then(jj => res.json(jj))
      .catch(e => console.log('Signup error ', e.message));
  });
  return router;
};
