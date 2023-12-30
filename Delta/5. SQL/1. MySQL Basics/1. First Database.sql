CREATE DATABASE college;
CREATE DATABASE xyz_company;

DROP DATABASE xyz_company;

USE college;

CREATE TABLE student (
	rollno INT,
    name VARCHAR(30),
    age INT
);

INSERT INTO student
VALUES
(101, "adam", 12),
(102, "bob", 14);

SELECT * FROM student; 



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
(1, 102, "adam", "adam671@yahoo.com", "India", 142, 102),
(2, 17, "bob", "bob_temp@proton.me", "India", 767, 231),
(3, 15, "casey bob", "caseybob12@gmail.com", "India", 322, 562),
(4, 18, "eve wattson", "wattson.eve@tempmail.com", "India", 456, 451);

SELECT id, name, age, email FROM user;
SELECT * FROM user;

CREATE TABLE post (
	id INT PRIMARY KEY,
	content VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);