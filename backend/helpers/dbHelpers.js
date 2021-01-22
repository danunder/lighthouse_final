const bcrypt = require('bcrypt');

module.exports = db => {
  // eslint-disable-next-line no-unused-vars
  const getReviews = (lng, lat) => {
    const query = {
      text: `SELECT users.username AS user, tenancies.property_id AS propertyID, reviews.*
      FROM categories
      JOIN reviews ON categories.id = reviews.category_id
      JOIN tenancies ON tenancies.id = reviews.tenancy_id
      JOIN properties ON properties.id = tenancies.property_id
      JOIN users ON users.id = tenancies.user_id
      WHERE properties.longitude = $1
      AND properties.latitude = $2;`,
      values: [lng, lat],
    };
    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err);
  };

  const login = (username, password) => {
    const query = {
      text: `SELECT * FROM users where username = $1;`,
      values: [username],
    };
    return db
      .query(query)
      .then(result => {
        if (
          result.rows.length &&
          bcrypt.compareSync(password, result.rows[0].password)
        ) {
          const response = {
            userID: result.rows[0].id,
            userName: result.rows[0].username
          }
          return response;
        }
        else {
          throw new Error('Null');
        }
      })
      .catch(err => err);
  };

  const checkUsername = userName => {
    const query = {
      text: `SELECT * FROM users WHERE username = $1;`,
      values: [userName],
    };
    return db
      .query(query)
      .then(res => res)
      .catch(e => e);
  };

  const createAccount = (userName, password, firstName, lastName, email) => {
    const insertQuery = {
      text: `INSERT INTO users(username, first_name, last_name, email, password)
      VALUES($1, $2, $3, $4, $5) RETURNING username, id as userID;`,
      values: [
        userName,
        firstName,
        lastName,
        email,
        bcrypt.hashSync(password, 10),
      ],
    };
    return db
      .query(insertQuery)
      .then(res => res.rows[0])
      .catch(e => e.message);
  };

  const findPropertyID = (lat, lng) => {
    const text = `SELECT properties.id FROM properties WHERE latitude = $1 and longitude = $2;`;
    const values = [lat, lng];
    // returns a property id OR null
    return db.query(text, values);
  };

  const createProperty = (placeID, lat, lng) => {
    const text = `INSERT INTO properties(place_id, latitude, longitude)
    VALUES ($1, $2, $3)
    RETURNING id;`;
    const values = [placeID, lat, lng];
    return db.query(text, values);
  };

  const createTenancy = (startDate, endDate, userID, propertyID) => {
    const text = `INSERT INTO tenancies(start_date, end_date, user_id, property_id)
    VALUES($1, $2, $3, $4)
    RETURNING id;`;
    const values = [startDate, endDate, userID, propertyID];
    return db.query(text, values);
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
    const text = `
      INSERT INTO reviews(review, rating, category_id, tenancy_id)
      VALUES
      ($3, $2, 1, $1),     
      ($5, $4, 3, $1),      
      ($7, $6, 2, $1);
    `;
    const values = [
      tenancyID,
      propertyRating,
      propertyReview,
      landlordRating,
      landlordReview,
      neighbourhoodRating,
      neighbourhoodReview,
    ];
    return db.query(text, values);
  };

  return {
    getReviews,
    login,
    checkUsername,
    findPropertyID,
    createProperty,
    createTenancy,
    createReviews,
    createAccount,
  };
};
