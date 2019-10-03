-- create user table
CREATE TABLE skinrou_user (
  user_id SERIAL PRIMARY KEY,
  first_name VARCHAR(40) NOT NULL,
  last_name VARCHAR(40) NOT NULL,
  age SMALLINT NOT NULL,
  phone_number INTEGER UNIQUE,
  username VARCHAR(20) UNIQUE,
  hash TEXT NOT NULL
);

-- create skin_routine table
CREATE TABLE skin_routine (
  routine_id SERIAL PRIMARY KEY,
  first_cleanser VARCHAR(100) NOT NULL,
  second_cleanser VARCHAR(100) NOT NULL,
  exfoliator VARCHAR(100) NOT NULL,
  toner VARCHAR(100) NOT NULL,
  essence VARCHAR(100) NOT NULL,
  eye_serum VARCHAR(100) NOT NULL,
  eye_moisturizer VARCHAR(100) NOT NULL,
  face_serum VARCHAR(100) NOT NULL,
  face_moisturizer VARCHAR(100) NOT NULL,
  neck_serum VARCHAR(100) NOT NULL,
  neck_moisturizer VARCHAR(100) NOT NULL,
  mask VARCHAR(100) NOT NULL,
  sunscreen VARCHAR(100) NOT NULL,
  user_id INTEGER NOT NULL REFERENCES skinrou_user(user_id),
  category_id INTEGER NOT NULL REFERENCES skin_category(category_id),
  time_id INTEGER NOT NULL REFERENCES time(time_id)
)

-- create time table
CREATE TABLE time (
  time_id SERIAL PRIMARY KEY,
  day_time BOOL,
  night_time BOOL
)

-- create skin_age table
CREATE TABLE skin_age (
  age_id SERIAL PRIMARY KEY,
  age_15 BOOL,
  age_20 BOOL,
  age_30 BOOL,
  age_40 BOOL,
  age_50 BOOL
)

-- create skin_type table
CREATE TABLE skin_type (
  type_id SERIAL PRIMARY KEY,
  combination BOOL,
  dry BOOL,
  oily BOOL,
  normal BOOL
)

-- create skincare_category table
CREATE TABLE skincare_category (
  category_id SERIAL PRIMARY KEY,
  category_name VARCHAR(15) NOT NULL,
  type_id INTEGER NOT NULL REFERENCES skin_type(type_id),
  age_id INTEGER NOT NULL REFERENCES skin_age(age_id)
)

-- change skincare_category to skin_category
ALTER TABLE skincare_category
RENAME TO skin_category;

-- Get skincare routines from user
SELECT * FROM skin_routine sr
INNER JOIN skinrou_user su
ON sr.user_id = su.user_id
WHERE su.user_id = 1;

-- hardcored values into skin_routine
INSERT INTO skin_routine (first_cleanser, second_cleanser, exfoliator, toner, essence, eye_serum, eye_moisturizer, face_serum, face_moisturizer, neck_serum, neck_moisturizer, mask, sunscreen, time, skin_type, user_id, category_id)
VALUES
('TO Squalane', 'Clinique Liquid Facial Soap', 'St. Ives Green Tea', 'Clinique Mild Toner', 'KB', 'ES', 'EM', 'FS', 'FM', 'NS', 'NM', 'KB Mask', 'SPF 50', 'Day Time', 'Combo', 1, 2),
('TO Hello', 'Clinique Liquid Facial Soap', 'St. Ives Green Tea', 'Clinique Mild Toner', 'KB', 'ES', 'EM', 'FS', 'FM', 'NS', 'NM', 'KB Mask', 'SPF 50', 'Day Time', 'Combo', 1, 2),
('TO D', 'Clinique Liquid Facial Soap', 'St. Ives Green Tea', 'Clinique Mild Toner', 'KB', 'ES', 'EM', 'FS', 'FM', 'NS', 'NM', 'KB Mask', 'SPF 50', 'Day Time', 'Combo', 3, 1),
('TO Sup', 'Clinique Liquid Facial Soap', 'St. Ives Green Tea', 'Clinique Mild Toner', 'KB', 'ES', 'EM', 'FS', 'FM', 'NS', 'NM', 'KB Mask', 'SPF 50', 'Day Time', 'Combo', 4, 1);

-- FILTER AGE
-- 15 - 20s
SELECT sr.*, su.username, su.age FROM skin_routine sr
INNER JOIN skin_category sc
ON sr.category_id = sc.category_id
INNER JOIN skinrou_user su
ON sr.user_id = su.user_id
WHERE su.age >= 15 AND su.age < 20;

-- 20 to 30
SELECT sr.*, su.username, su.age FROM skin_routine sr
INNER JOIN skin_category sc
ON sr.category_id = sc.category_id
INNER JOIN skinrou_user su
ON sr.user_id = su.user_id
WHERE su.age >= 20 AND su.age < 30;

-- 30 to 40
SELECT sr.*, su.username, su.age FROM skin_routine sr
INNER JOIN skin_category sc
ON sr.category_id = sc.category_id
INNER JOIN skinrou_user su
ON sr.user_id = su.user_id
WHERE su.age >= 30 AND su.age < 40;

-- 40 to 50
SELECT sr.*, su.username, su.age FROM skin_routine sr
INNER JOIN skin_category sc
ON sr.category_id = sc.category_id
INNER JOIN skinrou_user su
ON sr.user_id = su.user_id
WHERE su.age >= 40 AND su.age < 50;

-- 50+
SELECT sr.*, su.username, su.age FROM skin_routine sr
INNER JOIN skin_category sc
ON sr.category_id = sc.category_id
INNER JOIN skinrou_user su
ON sr.user_id = su.user_id
WHERE su.age >= 50;

-- routine likes
CREATE TABLE routine_likes (
  routine_id INTEGER NOT NULL REFERENCES skin_routine(routine_id),
  user_id INTEGER NOT NULL REFERENCES skinrou_user(user_id),
  liked BOOL
);

-- Like routine
UPDATE skin_routine
SET likes = likes + 1
WHERE routine_id = 73;

INSERT INTO routine_likes
(user_id, routine_id, liked)
VALUES (5, 73, true);

-- Unlike routine
DELETE FROM routine_likes
WHERE user_id = 5 AND routine_id = 73;

UPDATE skin_routine
SET likes = likes - 1
WHERE routine_id = 73;

-- Drop not null constraint
ALTER TABLE skin_routine ALTER COLUMN skin_type DROP NOT NULL;