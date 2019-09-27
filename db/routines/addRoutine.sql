INSERT INTO skin_routine 
(user_id, category_id, skin_type, time, first_cleanser, second_cleanser, exfoliator, toner, essence, eye_serum, eye_moisturizer, face_serum, face_moisturizer, neck_serum, neck_moisturizer, mask, sunscreen, note)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18);

SELECT sr.*, su.username, su.age FROM skin_routine sr
INNER JOIN skin_category sc
ON sr.category_id = sc.category_id
INNER JOIN skinrou_user su
ON sr.user_id = su.user_id
WHERE sc.category_id = $2;