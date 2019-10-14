SELECT sr.*, su.username, su.age FROM skin_routine sr
INNER JOIN skinrou_user su
ON sr.user_id = su.user_id
WHERE sr.skin_type = 'combination'
ORDER BY sr.routine_id DESC;