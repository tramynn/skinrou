UPDATE skin_routine
SET likes = likes + 1
WHERE routine_id = $2;

INSERT INTO routine_likes
(user_id, routine_id, liked)
VALUES ($1, $2, true);

-- SELECT sr.*, su.username, su.age FROM skin_routine sr
-- INNER JOIN skinrou_user su
-- ON sr.user_id = su.user_id
-- ORDER BY sr.routine_id DESC;