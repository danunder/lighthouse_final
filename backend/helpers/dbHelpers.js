module.exports = db => {
  // eslint-disable-next-line no-unused-vars
  const getReviews = (lng, lat) => {
    const query = {
      text: `SELECT reviews.review, reviews.rating, users.username
      FROM users
      JOIN tenancies ON users.id = tenancies.user_id
      JOIN reviews ON tenancies.id = reviews.tenancy_id
      JOIN properties ON reviews.property_id = properties.id
      JOIN categories ON reviews.category_id = categories.id
      WHERE properties.longitude = $1
      AND properties.latitude = $2
      AND categories.id = 1`,
      values: [lat, lng],
    };

    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err);
  };
  return {
    getReviews,
  };
};
