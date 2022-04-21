const fs = require('fs');
const inquirer = require('inquirer');


inquirer
    .prompt([{
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
        choices: [  " [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
                    " [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
                    " [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
                    " [![License: BSD 3](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
                ],
        name: "license",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
        // {
        //     type: "list",
        //     message: "List any dependancies that need to be installed:",
        //     name: "dependancies",
        // },

    ])
    .then((data) => {
        const template =
            `
# ${data.title}

## ${data.description}

An in-depth paragraph about your project and overview of use.

## Getting Started

### Dependencies

* ${data.dependancies}

### Installing

* ${data.install}

### Executing program

* How to run the program
* Step-by-step bullets

 
code blocks for commands



## Authors

Contributors names and contact info

${data.name}  
[GitHub Profile](https://github.com/${data.github}) /n
/br
[Email me](mailto:${data.email})

## License

This project is licensed under the ${data.license}  - click the icon for more details.

## Acknowledgments

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* [dbader](https://github.com/dbader/readme-template)
* [zenorocha](https://gist.github.com/zenorocha/4526327)
* [fvcproductions](https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46)
        `

        // .then((responses) => {
        // template(response) <=not a complete function yet

        fs.writeFile('READMEEEE.md', template, (err) => err ?
            console.error(err) :
            console.log('Success!')
        );
    });


