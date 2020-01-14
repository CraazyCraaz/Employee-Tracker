DROP DATABASE IF EXISTS tracker_db;
CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE employee (
    position INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY(position)
);

CREATE TABLE role (
    position INT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY(position)
);

CREATE TABLE department (
    position INT NOT NULL,
    name VARCHAR(30),
    PRIMARY KEY(position)
);

SELECT * FROM employee;
SELECT * FROM role;
SELECT * FROM department;
