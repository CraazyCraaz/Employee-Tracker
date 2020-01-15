const inquirer = require("inquirer");


const ALL_EMPLOYEES = "View All Employees";
const ALL_DEPARTMENTS = "View All Departments";
const ALL_ROLES = "View All Roles";
const ADD_EMPLOYEE = "Add Employee";
const ADD_DEPARTMENT = "Add Department";
const ADD_ROLE = "Add Role";
const UPDATE_ROLE = "Update Employee Role";
const MAIN_MENU = "Main Menu";
const QUIT = "QUIT";

// START of main questions / prompts for user
function mainQuestionMenu() {
    return new Promise((resolve, reject) => {
        inquirer.prompt({
            message: "what would you like to do?",
            type: "list",
            pageSize: 10,
            choices: [
                ALL_EMPLOYEES,
                ALL_DEPARTMENTS,
                ALL_ROLES,
                ADD_EMPLOYEE,
                ADD_DEPARTMENT,
                ADD_ROLE,
                UPDATE_ROLE,
                QUIT
            ],
            name: "choice"
        }).then(answers => {
            // call out function based on user choice from prompts
            resolve(answers.choice)
        })
    })
};
function departmentOptions() {
    return new Promise((resolve, reject) => {
        inquirer.prompt({
            message: "what would you like to do?",
            type: "list",
            choices: [
                ADD_DEPARTMENT,
                MAIN_MENU
            ],
            name: "departmentChoice"
        }).then(answers => {
            // call out function based on user choice from prompts
            resolve(answers.departmentChoice)
        })
    })
};
function newDepartment() {
    return new Promise((resolve, reject) => {
        inquirer.prompt({
            type: "input",
            message: "Please enter new department name",
            name: "departmentName"
        }).then(answers => {
            resolve(answers.departmentName)
        })
    })

};
module.exports = {
    ALL_EMPLOYEES,
    ALL_DEPARTMENTS,
    ALL_ROLES,
    ADD_EMPLOYEE,
    ADD_DEPARTMENT,
    ADD_ROLE,
    UPDATE_ROLE,
    MAIN_MENU,
    QUIT,
    mainQuestionMenu,
    departmentOptions,
    newDepartment
};