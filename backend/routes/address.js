const express = require('express');
const router = express.Router();

module.exports = ({ getReviews }) => {
  router.get('/', (req, res) => {
    //Find a way to get lat and lng from url request
    getReviews('ChIJd5Zc4zLL1IkRmG90lQIu_X4')
      .then(data => res.json(data))
      .catch(e => console.log('Backend error', e.message));
  });
  return router;
};
