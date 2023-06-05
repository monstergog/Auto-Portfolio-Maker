// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = inquirer.prompt(
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    }
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    }
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project?'
    }
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?'
    }
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?'
    }
    {
        type: 'input',
        name: 'contribution',
        message: 'What guidelines would you like to include for user contribution?'
    }
    {
        type: 'input',
        name: 'test',
        message: 'What instructions would you like to leave for users running tests?'
    }
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    }
    {
        type: 'list',
        name: 'license',
        message: 'Does your project include a license?',
        choices: 
        [
            'None',
            'Academic Free License v3.0',
            'Apache license 2.0',
            'Artistic license 2.0',
            'Boost Software License',
            'BSD 2-clause "Simplified" license',
            'BSD 3-clause "New" or "Revised"',
            'BSD 3-clause Clear license',
            'BSD Zero-Clause license',
            'Creative Commons license',
            'Creative Commons Zero v1.0 Universal',
            'Creative Commons Attribution 4.0',
            'Creative Commons Attribution Share Alike 4.0',
            'Do What The F*ck You Want To Public License',
            'Educational Community License v2.0',
            'Eclipse Public License 1.0',
            'Eclipse Public License 2.0',
            'European Union Public License 1.1',
            'GNU Affero General Public License v3.0',
            'GNU General Public License family',
            'GNU General Public License v2.0',
            'GNU General Public License v3.0',
            'GNU Lesser General Public License',
            'GNU Lesser General Public License v2.1',
            'GNU Lesser General Public License v3.0',
            'ISC',
            'LaTeX Project Public License v1.3c',
            'Microsoft Public License',
            'MIT',
            'Mozilla Public License 2.0',
            'Open Software License 3.0',
            'PostgreSQL License',
            'SIL Open Font License 1.1',
            'University of Illinois/NCSA Open Source License',
            'The Unlicense',
            'zLib License'
        ]
    }
);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
