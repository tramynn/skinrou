DELETE FROM routine_likes
WHERE user_id = $1 AND routine_id = $2;

UPDATE skin_routine
SET likes = likes - 1
WHERE routine_id = $2;

SELECT sr.*, su.username, su.age FROM skin_routine sr
INNER JOIN skinrou_user su
ON sr.user_id = su.user_id
ORDER BY sr.routine_id DESC;