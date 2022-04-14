const inquirer = require("inquirer");
const Engineer = require('./lib/Engineer');
const employees = [];

function start() {
    function promptEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is the engineer's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's ID?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email?"
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's GitHub?"
            }
        ])
        .then(res => {
            const engineer = new Engineer(res.engineerName, res.id, res.email, res.github)
            console.log(engineer);
            employees.push(engineer);
            console.log(employees);
        })
    }

    promptEngineer();
}

start();