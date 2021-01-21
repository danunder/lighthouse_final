DROP TABLE IF EXISTS reviews CASCADE;

CREATE TABLE reviews(
  id SERIAL PRIMARY KEY NOT NULL,
  review TEXT NOT NULL,
  rating INTEGER NOT NULL,
  -- date_of_review DATE NOT NULL,
  helpfulness BIT DEFAULT NULL,
  is_verified BOOLEAN DEFAULT FALSE,
  tenancy_id INTEGER REFERENCES tenancies(id) ON DELETE CASCADE,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);