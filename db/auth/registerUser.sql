INSERT INTO skinrou_user (first_name, last_name, age, phone_number, username, hash)
VALUES ($1, $2, $3, $4, $5, $6)
RETURNING *;