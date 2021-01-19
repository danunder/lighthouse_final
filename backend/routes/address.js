const express = require('express');
const router = express.Router();

module.exports = ({ getReviews }) => {
  router.get('/:lat/:lng', (req, res) => {
    const lng = req.params.lng;
    const lat = req.params.lat;
    getReviews(lng, lat)
      .then(data => res.json(data))
      .catch(e => console.log('Backend error', e.message));
  });
  return router;
};
