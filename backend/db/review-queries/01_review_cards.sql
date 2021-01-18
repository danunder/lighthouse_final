SELECT reviews.review, reviews.rating, users.username
FROM users
JOIN tenancies ON users.id = tenancies.user_id
JOIN reviews ON tenancies.id = reviews.tenancy_id
JOIN properties ON reviews.property_id = properties.id
JOIN categories ON reviews.category_id = categories.id
WHERE properties.longitude = -79.378310
AND properties.latitude = 43.650920
AND categories.id = 1;