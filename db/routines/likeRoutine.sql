UPDATE TABLE skin_routine
SET likes = likes + 1
WHERE routine_id = $1;

INSERT INTO routine_likes
(user_id, routine_id, liked)
VALUES ($2, $1, true);