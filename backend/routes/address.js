const express = require('express');
const router = express.Router();

module.exports = ({ getReviews, login }) => {
  router.get('/:lat/:lng', (req, res) => {
    const lng = req.params.lng;
    const lat = req.params.lat;
    getReviews(lng, lat)
      .then(data => res.json(data))
      .catch(e => console.log('Backend error', e.message));
  });
  router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const userAuth = login(username, password);
    if (userAuth) {
      req.session['user_id'] = res.rows[0].id;
      data => res.json(data);
    }
  });
  return router;
};
