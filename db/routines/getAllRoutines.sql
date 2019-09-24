-- Get all routines from skin_routine by the username
SELECT sr.*, su.username FROM skin_routine sr
INNER JOIN skinrou_user su
ON sr.user_id = su.user_id;