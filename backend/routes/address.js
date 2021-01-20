const express = require('express');
const router = express.Router();
const cookieSession = require('cookie-session');

module.exports = ({ getAddress, getReviewList, getReview, login }) => {
  router.get('/address/:lat/:lng', (req, res) => {
    const lng = req.params.lng;
    const lat = req.params.lat;
    getAddress(lng, lat)
      .then(data => res.json(data))
      .catch(e => console.log('Backend error', e.message));
  });
  router.get('/reviews/:tenancy', (req, res) => {
    const tenancy = req.params.tenancy;
    getReviewList(tenancy)
      .then(data => res.json(data))
      .catch(e => console.log('Backend error', e.message));
  });
  router.get('/review/:review', (req, res) => {
    const review = req.params.review;
    getReview(review)
      .then(data => res.json(data))
      .catch(e => console.log('Backend error', e.message));
  });
  router.post('/login', (req, res) => {
    const { username, password } = req.body.user;
    login(username, password)
      .then(data => res.json(data))
      .catch(e => console.log('Backend error ', e.message));
  });
  return router;
};
