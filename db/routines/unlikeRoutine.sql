DELETE FROM routine_likes
WHERE user_id = $1 AND routine_id = $2;

UPDATE skin_routine
SET likes = likes - 1
WHERE routine_id = $2
returning *;