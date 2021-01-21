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
      values: [lng, lat],
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
      .then(result => result.rows[0])
      .catch(err => err);
  };


  const signup = (signupUser, signupPass) => {
    const query = {
      text: `INSERT INTO users(username, password) VALUES($1, $2)
      RETURNING *;
      `,
      values: [signupUser, signupPass],
    };

    return db
      .query(query)
      .then(result => result.rows)
      .catch(e => e);
  };

  const findPropertyID = (lat, lng) => {
    const query = `SELECT properties.id FROM properties WHERE latitude = $1 and longitude = $2;`;
    const values = [lat, lng];
    // returns a property id OR null
    return db.query(query, values);
  };

  const createProperty = (placeID, lat, lng) => {
    const query = `INSERT INTO properties(place_id, latitude, longitude)
    VALUES ($1, $2, $3)
    RETURNING id;`;
    const values = [placeID, lat, lng];
    return db.query(query, values);
  };

  const createTenancy = (startDate, endDate, userID, propertyID) => {
    const query = `INSERT INTO tenancies(start_date, end_date, user_id, property_id)
    VALUES($1, $2, $3, $4)
    RETURNING id;`;
    const values = [startDate, endDate, userID, propertyID];
    return db.query(query, values);
  };

  const createReviews = (
    tenancyID,
    propertyRating,
    propertyReview,
    landlordRating,
    landlordReview,
    neighbourhoodRating,
    neighbourhoodReview
  ) => {
    const query = `
      INSERT INTO reviews(review, rating, category_id, tenancy_id)
      VALUES($3, $2, 1, $1);
      INSERT INTO reviews(review, rating, category_id, tenancy_id)
      VALUES($5, $4, 3, $1);
      INSERT INTO reviews(review, rating, category_id, tenancy_id)
      VALUES($7, $6, 2, $1);
    `;
    const values = [
      tenancyID,
      propertyRating,
      propertyReview,
      landlordRating,
      landlordReview,
      neighbourhoodRating,
      neighbourhoodReview
    ];
    return db.query(query, values);
  };

  return {
    getReviews,
    login,
    // saveReview,
    signup,
    findPropertyID,
    createProperty,
    createTenancy,
    createReviews,
  };
};
