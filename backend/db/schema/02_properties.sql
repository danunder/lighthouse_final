DROP TABLE IF EXISTS properties CASCADE;

CREATE TABLE properties(
  id SERIAL PRIMARY KEY NOT NULL,
  place_id VARCHAR(255) NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  landlord_id INTEGER REFERENCES users(id)
);