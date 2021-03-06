-- Get all my routines by my username
SELECT sr.*, su.username, su.age FROM skin_routine sr
INNER JOIN skinrou_user su
ON sr.user_id = su.user_id
WHERE su.user_id = $1
ORDER BY sr.routine_id DESC;