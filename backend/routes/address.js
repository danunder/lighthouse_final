const express = require('express');
const router = express.Router();
const cookieSession = require('cookie-session');

module.exports = ({ getReviews, login, signup }) => {
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
    //User has the ID
    //Place has the coordinates
    //Review has property review, landlord review, neighbourhood review, and tenancy dates
    const { user, place, review } = req.body.reviewData;

    console.log('User ID: ', user);
    console.log('Place Data: ', place);
    console.log('Review Data: ', review);

    // Check if the location is in the Db (lat === this && lng === this)
    // if not, insert the entry (+ return property id)
    // if so return property id

    // insert the tenancy object (startDate, endDate)
    // linked to property id and user id
    // return tenancy id

    // destructure the review components
    // insert three parts into reviews table
    // linked to category id, tenancy id
  });

  router.post('/signup', (req, res) => {
    const { signupUser, signupPass } = req.body;
    signup(signupUser, signupPass)
      .then(jj => res.json(jj))
      .catch(e => console.log('Signup error ', e.message));
  });
  return router;
};
