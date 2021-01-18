const express = require('express');
const router = express.Router();

module.exports = ({ getReviews }) => {
  router.get('/', (req, res) => {
    //Find a way to get lat and lng from url request
    const { lat, lng } = req.body;
    getReviews(lat, lng)
      .then(data => res.json(data))
      .catch(e => console.log('Backend error', e.message));
  });
};
