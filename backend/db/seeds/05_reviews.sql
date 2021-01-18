INSERT INTO reviews(review, rating, category_id, property_id, tenency_id, date_of_review)
VALUES(
  ('The property is amazing, I loved living there!', 5, 1, 1, 1, GETDATE()),
  ('The property is a piece of garbage, a huge mistake living there!', 1, 1, 1, 2, GETDATE()),
  ('The neighbourhood has some fantastic shops to explore!', 4, 2, 1, 1, GETDATE()),
  ('I liked the local park!', 3, 2, 1, 2, GETDATE()),
  ('The landlords were nice, but took a while to respond to maintenance requests', 3, 3, 1, 1, GETDATE()),
  ('The landlords were fantastic! We are practically family now!', 5, 3, 1, 2, GETDATE())
);