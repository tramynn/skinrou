SELECT sr.*, su.username, su.age FROM skin_routine sr
INNER JOIN skinrou_user su
ON sr.user_id = su.user_id
WHERE sr.skin_type = 'Oily'
ORDER BY sr.routine_id DESC;