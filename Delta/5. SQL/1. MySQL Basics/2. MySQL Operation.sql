CREATE DATABASE IF NOT EXISTS instagram;

USE instagram;

CREATE TABLE user (
	id INT,
    age INT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(30) UNIQUE,
    region VARCHAR(20),
    followers INT DEFAULT 0,
    following INT,
    CONSTRAINT age_check CHECK (age >= 13 AND region = "India"),
    PRIMARY KEY (id)
);

INSERT INTO user
(id, age, name, email, region, followers, following)
VALUES
(1, 16, "adam", "adam671@yahoo.com", "India", 142, 102),
(2, 17, "bob", "bob_temp@proton.me", "India", 767, 231),
(3, 15, "casey bob", "caseybob12@gmail.com", "India", 322, 562),
(4, 18, "eve wattson", "wattson.eve@tempmail.com", "India", 456, 451);

INSERT INTO user
(id, age, name, email, region, followers, following)
VALUES
(5, 16, "adam", "adam671_temp@yahoo.com", "India", 442, 302),
(6, 17, "bob", "bob_temp_updated@proton.me", "India", 367, 331),
(7, 15, "casey bob", "caseybob12_up@gmail.com", "India", 222, 262),
(8, 18, "eve wattson", "wattson.eve_uk@tempmail.com", "India", 756, 451);


SELECT id, name, age, email FROM user;
SELECT * FROM user;

SELECT name, followers FROM user
WHERE followers >= 400

SELECT id, name, age, email FROM user
WHERE age BETWEEN 15 AND 17;

SELECT id, name, age, email FROM user
WHERE age IN (15, 17);

SELECT id, name, age, email FROM user
WHERE age NOT IN (15, 17);

SELECT * FROM user
WHERE email IN ("caseybob12@gmail.com", "adam671@yahoo.com", "xyz@gmail.com");

SELECT id, name, age, email FROM user
WHERE age > 15
LIMIT 2;

SELECT id, name, age, followers FROM user
ORDER BY followers ASC;

SELECT id, name, age, followers FROM user
ORDER BY name DESC;

SELECT avg(age)
FROM user;

SELECT age, max(followers)
FROM user
GROUP BY age;

SELECT age, count(id)
FROM user
GROUP BY age;

SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers) > 400;

SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers) > 400
ORDER BY age DESC;

SET SQL_SAFE_UPDATES = 0;

UPDATE user
SET followers = 600
WHERE age = 17;

DELETE FROM user
WHERE age = 17;

ALTER TABLE user
ADD COLUMN city VARCHAR(30) DEFAULT "Delhi";

ALTER TABLE user
DROP COLUMN city;

ALTER TABLE user
RENAME TO instaUser;

ALTER TABLE instaUser
RENAME TO user;

ALTER TABLE user
CHANGE COLUMN followers subscriber INT DEFAULT 0;

ALTER TABLE user
MODIFY subscriber INT DEFAULT 5;

TRUNCATE TABLE user;

SELECT * FROM user;

CREATE TABLE post (
	id INT PRIMARY KEY,
	content VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);