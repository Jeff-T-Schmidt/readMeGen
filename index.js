const fs = require('fs').promises;
const inquirer = require('inquirer');


inquirer
.prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is your Github profile name?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your project title?",
        name: "title",
    },
    {
        type: "input",
        message: "Enter a description of your project:",
        name: "description",
    },
    {
        type: "input",
        message: "What are your installation instructions?",
        name: "install",
    },
    {
        type: "input",
        message: "Enter your usage information:",
        name: "usage",
    },
    {
        type: "list",
        message: "Choose a license for your application:",
        choices: ["license 1", "license 2", "license 3", "license 4"],
        name: "license",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    
])
.then((responses)=>
console.log(JSON.stringify(responses, null, 2))
);
// var responses = JSON.stringify(responses, null, 2)
// fs.writeFile('READMEEEE.md', responses, (err) => err 
//    ? console.error(err) 
//    : console.log('Success!')
// );
