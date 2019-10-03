INSERT INTO skin_routine 
(user_id, skin_type, time, first_cleanser, second_cleanser, exfoliator, toner, essence, eye_serum, eye_moisturizer, face_serum, face_moisturizer, neck_serum, neck_moisturizer, mask, sunscreen, note, likes)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, 0);