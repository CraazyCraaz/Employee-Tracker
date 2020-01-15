const mysql = require('mysql');

const ROLE = "role";
const EMPLOYEE = "employee";
const DEPARTMENT = "department";

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "tracker_db"
});

connection.connect(function (err) {
    if (err) throw err;
    // console.log("connected as id " + connection.threadId + "\n");

});

function roleAll() {
    return runQuery(`SELECT * FROM ${ROLE}`)
};

function employeeAll() {
    return runQuery(`SELECT * FROM ${EMPLOYEE}`)
};

function departmentAll() {
    return runQuery(`SELECT * FROM ${DEPARTMENT}`)
};

function addDepartment(name) {
    // escape will clean user input so it can't break the database
    name = connection.escape(name)
    return runQuery(`INSERT INTO ${DEPARTMENT} (name) VALUES (${name})`)
}

function runQuery(query) {
    return new Promise((resolve, reject) => {
        connection.query(query, function (err, data) {
            if (err) {
                reject(err)
            };
            resolve(data);
        })
    })
};

module.exports = {
    roleAll,
    employeeAll,
    departmentAll,
    addDepartment
}
