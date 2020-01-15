const mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "tracker_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");

});

function roleAll() {
    return select("SELECT * FROM role")
};

function employeeAll() {
    return select("SELECT * FROM employee")
};

function departmentAll() {
    return select("SELECT * FROM department")
};

function select(query) {
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
    departmentAll
}
