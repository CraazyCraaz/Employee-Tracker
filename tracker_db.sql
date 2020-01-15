DROP DATABASE IF EXISTS tracker_db;
CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE department (
    id INTEGER(10) AUTO_INCREMENT NOT NULL,
    name VARCHAR(30),
    PRIMARY KEY(id)
);

CREATE TABLE role (
    id INTEGER(10) AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY(id)
);

CREATE TABLE employee (
    id INTEGER(10) AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY(id)
);

-- So the tables aren't empty --
INSERT INTO employee (first_name, last_name, role_id, manager_id)
values ("Jenny", "Thurnau", 2, null);

INSERT INTO role (title, salary, department_id)
values ("Engineer", 75000, 1);

INSERT INTO department (name)
values ("Engineering");

-- Different SELECTS --
SELECT *
FROM employee
INNER JOIN role ON employee.role_id = role.title;