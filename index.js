
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/page-template");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


const newStaffMemberData = [];


const questions = async () => {
    const answers = await inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "name",
            },

            {
                type: "input",
                message: "What is your ID number?",
                name: "id",
            },

            {
                type: "input",
                message: "What is your email?",
                name: "email",
            },

            {
                type: "list",
                message: "What is your role?",
                name: "role",
                choices: ["Engineer", "Intern", "Manager"],
            },
        ])


if (answers.role === "Manager") {
    const managerAns = await inquirer
    .prompt([
        {
            type: "input",
            message: "What is your office number?",
            name: "officeNumber",
        },
    ])
    const newManager = new Manager (
        answers.name,
        answers.id,
        answers.email,
        managerAns.officeNumber
    );
    newStaffMemberData.push(newManager);


} else if (answers.role === "Engineer") {
    const githubAns = await inquirer
    .prompt([
        {
            type: "input",
            message: "What is your GitHub user name?",
            name: "gitHub",
         }
    ])
    const newEngineer = new Engineer (
        answers.name,
        answers.id,
        answers.email,
        githubAns.github
    );
    newStaffMemberData.push(newEngineer);


} else if (answers.role === "Intern") {
    const internAns = await inquirer
    .prompt([
    {
        type: "input",
        message: "What university did you attend?",
        name: "school",
    },
    ])

    const newIntern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        internAns.school
    );
    newStaffMemberData.push(newIntern);
}

};

async function prompQuestions() {
    await questions()


const addMemberAns = await inquirer
    .prompt([
        {
            name:'addMember',
            type: 'list',
            choices: ['Add a new member', 'Create team'],
            message: "What would you like to do next?"
        }
    ])
    
    if (addMemberAns.addMember === 'Add a new member') {
        return prompQuestions()
    }
    return createTeam();
 }
    
    prompQuestions();
    
    function createTeam() {
        console.log("new guy", newStaffMemberData)
        fs.writeFileSync(
            "./dist/index.html",
            generateHTML(newStaffMemberData),
            "utf-8"
        );
    }




