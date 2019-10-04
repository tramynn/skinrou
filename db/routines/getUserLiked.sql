SELECT liked FROM routine_likes
WHERE user_id = $1 AND routine_id = $2;