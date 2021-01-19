const express = require('express');
const router = express.Router();
const cookieSession = require('cookie-session');

module.exports = ({ getReviews, login }) => {
  router.get('/:lat/:lng', (req, res) => {
    const lng = req.params.lng;
    const lat = req.params.lat;
    getReviews(lng, lat)
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
