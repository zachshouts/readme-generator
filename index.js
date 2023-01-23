// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter your project title.',
        name: 'title'
    },
    // {
    //     type: 'input',
    //     message: 'Enter your project description.',
    //     name: 'description'
    // },
    // {
    //     type: 'input',
    //     message: 'Enter installation instructions.',
    //     name: 'installation'
    // },
    // {
    //     type: 'input',
    //     message: 'Enter usage instructions',
    //     name: 'usage'
    // },
    // {
    //     type: 'list',
    //     message: 'Choose a license',
    //     choices: ['None', 'Apache', 'MIT', 'Boost'],
    //     name: 'license'
    // },
    // {
    //     type: 'input',
    //     message: 'Enter contributing information.',
    //     name: 'contributing'
    // },
    // {
    //     type: 'input',
    //     message: 'Enter testing information.',
    //     name: 'testing'
    // },
    // {
    //     type: 'input',
    //     message: 'Enter questions info.',
    //     name: 'questions'
    // }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => err ? console.log(err) : console.log('Success'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            const markdown = generateMarkdown(response);
            writeToFile('generated-readme.md', markdown);
        });
}

// Function call to initialize app
init();
