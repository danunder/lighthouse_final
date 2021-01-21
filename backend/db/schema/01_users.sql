DROP TABLE IF EXISTS users CASCADE;

-- needs to have a join_date
CREATE TABLE users(
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255) NOT NULL,
  is_landord BOOLEAN DEFAULT FALSE
)