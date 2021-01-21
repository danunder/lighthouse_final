const express = require('express');
const router = express.Router();
const cookieSession = require('cookie-session');

module.exports = ({ getReviews, login, saveReview, signup }) => {
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
    const {
      propertyReview,

      landlordReview,

      neighbourhoodReview,
    } = req.body.reviewData;
    saveReview(
      propertyReview,

      landlordReview,

      neighbourhoodReview
    )
      .then(cc => res.json(cc))
      .catch(e => console.log('save review error ', e.message));
  });

  router.post('/signup', (req, res) => {
    const { signupUser, signupPass } = req.body;
    signup(signupUser, signupPass)
      .then(jj => res.json(jj))
      .catch(e => console.log('Signup error ', e.message));
  });
  return router;
};
