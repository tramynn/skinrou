UPDATE skin_routine 
SET 
  time = $3,
  skin_type = $4,
  first_cleanser = $5,
  second_cleanser = $6,
  exfoliator = $7,
  toner = $8,
  essence = $9,
  eye_serum = $10,
  eye_moisturizer = $11,
  face_serum = $12,
  face_moisturizer = $13,
  neck_serum = $14,
  neck_moisturizer = $15,
  mask = $16,
  sunscreen = $17,
  note = $18
WHERE user_id = $1 AND routine_id = $2;

SELECT sr.*, su.username, su.age FROM skin_routine sr
INNER JOIN skinrou_user su
ON sr.user_id = su.user_id
WHERE su.user_id = $1
ORDER BY sr.routine_id DESC;