const mysql = require('mysql');
const inquirer = require("inquirer");

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
    mainQuestionMenu();
});

// START of main questions / prompts for user
function mainQuestionMenu() {
    inquirer.prompt({
        message: "what would you like to do?",
        type: "list",
        choices: [
            "View All Employees",
            "View All Employees by Department",
            "View All Employees by Manager",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Update Employee Manager",
            "View All Roles",
            "Add Role",
            "Remove Role",
            "QUIT"
        ],
        name: "choice"
    }).then(answers => {
        // call out function based on user choice from prompts
        switch (answers.choice) {
            case "View All Employees":
                employeeAll()
                break;

            case "View All Employees by Department":
                employeeByDept()
                break;

            case "View All Employees by Manager":
                // functionHere()
                break;

            case "Add Employee":
                // functionHere()
                break;

            case "Remove Employee":
                // functionHere()
                break;
            case "Update Employee Role":
                // functionHere()
                break;
            case "Update Employee Manager":
                // functionHere()
                break;
            case "View All Roles":
                // functionHere()
                break;
            case "Add Role":
                // functionHere()
                break;
            case "Remove Role":
                // functionHere()
                break;

            //used to quite
            default:
                connection.end()
                break;
        }
    })
};

function employeeAll() {
    connection.query("SELECT * FROM employee", function (err, data) {
        if (err) throw err;
        console.table(data);
    })
};

function employeeByDept() {
    inquirer.prompt({
        type: "input",
        name: "name",
        message: "Search for employee by which department?"
    }).then(function (joinAnswers) {
        // call data from myslq with:
        //connection.query('this is what you're selcting from mysql database, add function to log data, go back to main menu')
        connection.query('SELECT something goes here', function (err, data) {
            if (err) throw err;
            console.table(data);
            mainMenu();
        })
    })
};

