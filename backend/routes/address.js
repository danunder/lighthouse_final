const express = require('express');
const router = express.Router();

module.exports = ({ getReviews }) => {
  router.get('/', (req, res) => {
    getReviews(address)
      .then(data => res.json(data))
      .catch(e => console.log('Backend error', e.message));
  });
};
