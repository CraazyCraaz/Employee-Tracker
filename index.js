
const cTable = require("console.table")
const allQuestions = require("./inq")
const queries = require("./queries")

mainMenu()
function mainMenu() {
    allQuestions.mainQuestionMenu().then(result => {
        switch (result) {
            case allQuestions.ALL_EMPLOYEES:
                viewEmployees()
                break;

            case allQuestions.ALL_DEPARTMENTS:
                viewDepartments()
                break;

            case allQuestions.ALL_ROLES:
                viewRoles()
                break;

            case allQuestions.ADD_EMPLOYEE:
                // functionHere()
                break;

            case allQuestions.ADD_DEPARTMENT:
                // functionHere()
                break;
            case allQuestions.ADD_ROLE:
                // functionHere()
                break;
            case allQuestions.UPDATE_ROLE:
                // functionHere()
                break;
            //used to quite
            default:
                connection.end()
                break;
        }

    });
}

function viewRoles() {
    queries.roleAll().then(result => {
        console.table(result);
    })
};

function viewEmployees() {
    queries.employeeAll().then(result => {
        console.table(result);
    })
};

function viewDepartments() {
    queries.departmentAll().then(result => {
        console.table(result);
        allQuestions.departmentOptions().then(result => {
            switch (result) {
                case allQuestions.MAIN_MENU:
                    mainMenu()
                    break;
                case allQuestions.ADD_DEPARTMENT:
                    addDepartment()
                    break;

            }
        })
    })
};

function addDepartment() {
    allQuestions.newDepartment().then(result => {
        console.log(result);

    })

}