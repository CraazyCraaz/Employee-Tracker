const mysql = require('mysql');

// function employeeAll() {
//     connection.query("SELECT * FROM employee", function (err, data) {
//         if (err) throw err;
//         console.table(data);

//     })
// };

// function departmentAll() {
//     connection.query("SELECT * FROM department", function (err, data) {
//         if (err) throw err;
//         console.table(data);
//     })
// };


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
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM role", function (err, data) {
            if (err) {
                reject(err)
            };
            resolve(data);

        })
    })
};

module.exports = { roleAll }
