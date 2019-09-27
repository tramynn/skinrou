UPDATE skin_routine 
SET 
  skin_type = $4,
  time = $5,
  first_cleanser = $6,
  second_cleanser = $7,
  exfoliator = $8,
  toner = $9,
  essence = $10,
  eye_serum = $11,
  eye_moisturizer = $12,
  face_serum = $13,
  face_moisturizer = $14,
  neck_serum = $15,
  neck_moisturizer = $16,
  mask = $17,
  sunscreen = $18,
  note = $19
WHERE user_id = $1 AND routine_id = $2 AND category_id = $3;

SELECT sr.*, su.username, su.age FROM skin_routine sr
INNER JOIN skin_category sc
ON sr.category_id = sc.category_id
INNER JOIN skinrou_user su
ON sr.user_id = su.user_id
WHERE sc.category_id = $3 AND sr.routine_id = $2;