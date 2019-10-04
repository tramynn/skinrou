DELETE FROM routine_likes
WHERE routine_id = $2;

DELETE FROM skin_routine
WHERE user_id = $1 AND routine_id = $2;

SELECT sr.*, su.username, su.age FROM skin_routine sr
INNER JOIN skinrou_user su
ON sr.user_id = su.user_id
WHERE su.user_id = $1
ORDER BY sr.routine_id DESC;