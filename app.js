import fs from "fs";
import { Manager, Engineer, Intern } from "./lib/index.js";
import inquirer from "inquirer";

let myManager;

const managerQuestions = [{
    type: "input",
    message: "Please enter the team manager's name",
    name: "managerName"
},
{
    type: "input",
    message: "Please enter manager's ID",
    name: "managerId"
},
{
    type: "input",
    message: "Please enter manager's email",
    name: "managerEmail"
},
{
    type: "input",
    message: "Please enter office number",
    name: "managerOfficeNumber"
}]

const employeeQuestions = [{
    type: "confirm",
    message: "Would you like to add an Employee?",
    name: "addEmployee"
}, 
{
    type: "list",
    message: "Please choose the employee's role: ",
    choices: ["Engineer", "Intern"],
    name: "role",
    when: answers => answers.addEmployee
},
{
    type: "input",
    message: "Enter the employee's name: ",
    name: "employeeName",
    when: answers => answers.addEmployee
}, 
{
    type: "input",
    message: "Enter the employee's ID: ",
    name: "employeeId",
    when: answers => answers.addEmployee
},
{
    type: "input",
    message: "Enter the employee's email: ",
    name: "employeeEmail",
    when: answers => answers.addEmployee
},

{
    type: "input",
    message: "Please enter the Github username: ",
    name: "github",
    when: answers => answers.role === "Engineer"
},
{
    type: "input",
    message: "Please enter the school: ",
    name: "school",
    when: answers => answers.role === "Intern"
}]

// getManagerInfo = async (currentId) => {

//     let manager;

//     try {
//         await inquirer.prompt(managerQuestions)
//             .then(answers => {
//                 const managerName = answers.managerName;
//                 const managerEmail = answers.managerEmail;
//                 const managerOfficeNum = answers.managerOfficeNum;
//                 manager = new Manager(managerName, currentId, managerEmail, managerOfficeNum);

//             })
//     } catch (err) {
//         console.log(err);
//     }
//     return manager;
// }

// getEmployeeInfo = async (currentId, team) => {
//     try {
//         await inquirer
//             .prompt(employeeQuestions)
//             .then(data => {
//                 currentId++
//                 const employeeName = data.employeeName;
//                 const employeeEmail = data.employeeEmail;
//                 const employeeRole = data.role;
//                 if (employeeRole == "Engineer") {
//                     const employeeGithub = data.github;
//                     const employee = new Engineer(employeeName, currentId, employeeEmail, employeeGithub)
//                     team.push(employee);
//                 } else if (employeeRole == "Intern") {
//                     const employeeSchool = data.school;
//                     const employee = new Intern(employeeName, currentId, employeeEmail, employeeSchool)
//                     team.push(employee);
//                 }
//                 if (data.addEmployee) {
//                     console.log("So far, our team looks like this: ")
//                     console.log(team);
//                     return getEmployeeInfo(currentId, team);
//                 } else {
//                     console.log("All employees added!");
//                     console.log("The following team was created")
//                     console.log(team)
//                 }
//             })
//     } catch (err) {
//         console.log("ERROR!")
//         console.log(err);
//     }
//     return team;
// }


// init = async () => {
//     let currentId = 1;
//     let team = [];
//     const managerInfo = await getManagerInfo(currentId)
//     console.log("The following is the manager info")
//     console.log(managerInfo);
//     team.push(managerInfo);
//     const employeeInfo = await getEmployeeInfo(currentId, team);
//     const renderHTML = await render(employeeInfo);
//     fs.writeFile(outputPath, renderHTML, function (err) {
//         if (err) {
//             throw err;
//         } else {
//             console.log("The team.html file has been generated!");
//         }
//     });
// };

// init();
