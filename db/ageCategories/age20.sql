SELECT sr.*, su.username, su.age FROM skin_routine sr
INNER JOIN skinrou_user su
ON sr.user_id = su.user_id
WHERE su.age > 19 and su.age < 30
ORDER BY su.age ASC;