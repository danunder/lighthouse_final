module.exports = db => {
  // eslint-disable-next-line no-unused-vars
  const getAddress = (lng, lat) => {
    const query = {
      text: `SELECT properties.*, array_agg(DISTINCT tenancies.id) AS tenancies
      FROM properties
      LEFT JOIN tenancies ON properties.id = tenancies.property_id
      WHERE properties.longitude = $1
      AND properties.latitude = $2
      GROUP BY properties.id
      ORDER BY properties.id`,
      values: [lng, lat],
    };

    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err);
  };

  const getReviewList = (tenancy) => {
    const query = {
      text: `SELECT tenancies.*, array_agg(DISTINCT reviews.id) AS reviews
      FROM tenancies
      LEFT JOIN reviews ON tenancies.id = reviews.tenancy_id
      WHERE tenancies.id = $1
      GROUP BY tenancies.id
      ORDER BY tenancies.id;`,
      values: [tenancy],
    };

    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err);
  };

  const getReview = (review) => {
    const query = {
      text: `SELECT * FROM reviews
      WHERE reviews.id = $1;`,
      values: [review],
    };

    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err);
  };

  const login = (username, password) => {
    const query = {
      text: `SELECT * FROM users where username = $1 and password = $2`,
      values: [username, password],
    };
    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err);
  };
  return {
    getAddress,
    getReviewList,
    getReview,
    login
  };
};
