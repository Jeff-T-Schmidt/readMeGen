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
        type: "input",
        message: "How do you execute your proogram?",
        name: "execute",
    },
    {
        type: "list",
        message: "Choose a license for your application:",
        choices: [" [![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
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
    {
        type: "input",
        message: "What are your test instructions?",
        name: "test",
    },

    ])
    .then((data) => {
        const template =
            `
# ${data.title}

#### ${data.license}

## Description of the project:
### ${data.description}

---

### Installing

* ${data.install}

### Executing program

* ${data.execute}

### Usage information

* ${data.usage}

### Test

${data.test}

## License

This project is licensed under the ${data.license}  - click the icon for more details.

## Contributers

${data.name} [GitHub Profile](https://github.com/${data.github}) I can be reached at [Email me](mailto:${data.email})

## Acknowledgments

* [awesome-readme](https://github.com/Rufasa85/)

        `

        // .then((responses) => {
        // template(response) <=not a complete function yet

        fs.writeFile('READMEEEE.md', template, (err) => err ?
            console.error(err) :
            console.log('Success!')
        );
    });


