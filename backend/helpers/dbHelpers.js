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
      text: `SELECT * FROM users where username = $1`,
      values: [username],
    };
    return db
      .query(query)
      .then(result => {
        if (
          result.rows.length &&
          bcrypt.compareSync(password, result.rows[0].password)
        )
          return result.rows[0];
        else {
          throw new Error('Null');
        }
      })
      .catch(err => err);
  };

  const signup = (firstName, lastName, userName, email, password) => {
    const query = {
      text: `SELECT * FROM users WHERE username = $1 AND email = $2`,
      values: [userName, email],
    };
    return db
      .query(query)
      .then(res => {
        if (res.rows.length) {
          throw new Error('Null');
        } else {
          const insertQuery = `INSERT INTO users(username, first_name, last_name, email, password, is_landlord)VALUES($1, $2, $3, $4, $5, false) RETURNING*`;
          const newValues = [
            userName,
            firstName,
            lastName,
            email,
            bcrypt.hashSync(password, 10),
          ];
          return db.query(insertQuery, newValues).then(res => res.rows[0]);
        }
      })
      .catch(e => e);
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

  /*
     

  const createReviews = (
    tenancyID,
    propertyRating,
    propertyReview,
    landlordRating,
    landlordReview,
    neighbourhoodRating,
    neighbourhoodReview
  ) => {
    const createPropertyReview = (
      tenancyID,
      propertyRating,
      propertyReview
    ) => {
      const query = `
      INSERT INTO reviews(review, rating, category_id, tenancy_id)
      VALUES($3, $2, 1, $1);`
      const values = [tenancyID, propertyRating, propertyReview];
      return db.query(query, values);
    }
    const createLandlordReview = (
      tenancyID,
      landlordRating,
      landlordReview
    ) => {
      const query = `
      INSERT INTO reviews(review, rating, category_id, tenancy_id)
      VALUES($3, $2, 3, $1);`
      const values = [tenancyID, landlordRating, landlordReview];
      return db.query(query, values);
    }
    const createNeighbourhoodReview = (
      tenancyID,
      neighbourhoodRating,
      neighbourhoodReview
    ) => {
      const query = `
      INSERT INTO reviews(review, rating, category_id, tenancy_id)
      VALUES($3, $2, 2, $1);`
      const values = [tenancyID, neighbourhoodRating, neighbourhoodReview];
      return db.query(query, values);
    };
    createPropertyReview(tenancyID, propertyRating, propertyReview)
    createLandlordReview(tenancyID, landlordRating, landlordReview)
    createNeighbourhoodReview(tenancyID, neighbourhoodRating, neighbourhoodReview)
  };
  */

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
