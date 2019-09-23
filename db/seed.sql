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
