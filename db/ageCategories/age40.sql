SELECT sr.*, su.username, su.age FROM skin_routine sr
INNER JOIN skin_category sc
ON sr.category_id = sc.category_id
INNER JOIN skinrou_user su
ON sr.user_id = su.user_id
WHERE su.age >= 40 AND su.age < 50;