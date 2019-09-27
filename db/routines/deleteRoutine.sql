DELETE FROM skin_routine
WHERE user_id = $1 AND routine_id = $2 AND category_id = $3;

-- SELECT sr.*, su.username, su.age FROM skin_routine sr
-- INNER JOIN skinrou_user su
-- ON sr.user_id = su.user_id
-- WHERE su.user_id = $1 AND sr.routine_id = $1 AND sr.category_id = $3;