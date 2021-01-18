SELECT reviews.review, reviews.rating, users.username
FROM users
JOIN tenancies ON users.id = tenancies.user_id
JOIN reviews ON tenancies.id = reviews.tenancy_id
WHERE tenancies.id = 1;