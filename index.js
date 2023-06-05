// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const mdGen = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What guidelines would you like to include for user contribution?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What instructions would you like to leave for users running tests?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Does your project include a license?',
        choices: 
        [
            'None',
            'Apache 2.0',
            'BSD 3',
            'MIT',
            'Mozilla'
        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, mdGen(data));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => writeToFile('README.md', data));
}

// Function call to initialize app
init();
