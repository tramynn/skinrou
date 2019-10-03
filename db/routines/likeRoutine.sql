UPDATE skin_routine
SET likes = likes + 1
WHERE routine_id = $2;

INSERT INTO routine_likes
(user_id, routine_id, liked)
VALUES ($1, $2, true);