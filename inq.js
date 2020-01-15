const inquirer = require("inquirer");


const ALL_EMPLOYEES = "View All Employees";
const ALL_DEPARTMENTS = "View All Departments";
const ALL_ROLES = "View All Roles";
const ADD_EMPLOYEE = "Add Employee";
const ADD_DEPARTMENT = "Add Department";
const ADD_ROLE = "Add Role";
const UPDATE_ROLE = "Update Employee Role";

// START of main questions / prompts for user
function mainQuestionMenu() {
    return new Promise((resolve, reject) => {
        inquirer.prompt({
            message: "what would you like to do?",
            type: "list",
            choices: [
                ALL_EMPLOYEES,
                ALL_DEPARTMENTS,
                ALL_ROLES,
                ADD_EMPLOYEE,
                ADD_DEPARTMENT,
                ADD_ROLE,
                UPDATE_ROLE,
                "QUIT"
            ],
            name: "choice"
        }).then(answers => {
            // call out function based on user choice from prompts
            switch (answers.choice) {
                case ALL_EMPLOYEES:
                    // employeeAll()
                    break;

                case ALL_DEPARTMENTS:
                    // departmentAll()
                    break;

                case ALL_ROLES:
                    resolve(ALL_ROLES)
                    break;

                case ADD_EMPLOYEE:
                    // functionHere()
                    break;

                case ADD_DEPARTMENT:
                    // functionHere()
                    break;
                case ADD_ROLE:
                    // functionHere()
                    break;
                case UPDATE_ROLE:
                    // functionHere()
                    break;
                //used to quite
                default:
                    connection.end()
                    break;
            }
        })

    })

};
module.exports = {
    mainQuestionMenu,
    ALL_EMPLOYEES,
    ALL_DEPARTMENTS,
    ALL_ROLES,
    ADD_EMPLOYEE,
    ADD_DEPARTMENT,
    ADD_ROLE,
    UPDATE_ROLE
};