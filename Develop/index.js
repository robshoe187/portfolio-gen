// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'projectName',
        message: 'What is the name of your project?',
        type: 'input'
    },
    {
        name:'description',
        message: 'What is the description of your project?',
        type: 'input'
    },
    {
        name: 'install',
        message: 'What are the installation instructions for your project?',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'What are the usage instructions for your project?',
        type: 'input'
    },
    {
        name: 'contributionGuidelines',
        message:'What are the contribution guidelines for your project?',
        type: 'input'
    },
    {
        name: 'testInstructions',
        message: 'What are the test instructions for your project?',
        type: 'input'
    },
    {
        name: 'license',
        message:'What license type would you like to use for your project?',
        type: 'list',
        choices: ['Apache', 'BSD 3-Clause','Creative Commons', 'GNU GPL v3','The MIT License']
    },
    {
        name: 'github',
        message: 'What is your github account name?',
        type: 'input'
    },
    {
        name:'email',
        message: 'What is your email address?',
        type: 'input'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName+'.md', data, function (err) {
    if (err) return console.log(err);
    console.log(fileName + ' created');
  });}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answer){
        const template =  `
# ${answer.projectName}
## Table of Contents:
* [Description](#description)
* [Installation](#installation-instructions)
* [Usage](#usage-instructions)
* [Contribution](#contribution-guidelines)
* [Test](#test-instructions)
* [License](#license-type)
* [Contact](#contact-information)

## Descsription:
${answer.description}

## Installation Instructions: 
${answer.install}

## Usage Instructions: 
${answer.usage}

## Contribution Guidelines: 
${answer.contributionGuidelines}

## Test Instructions: 
${answer.testInstructions}

## License Type: 
${answer.license}
        
## Contact Information:

Github Username: ${answer.github} 

Github: https://github.com/${answer.github}

Email Address: ${answer.email} 
` 

        writeToFile(answer.projectName, template)
    })
}

// Function call to initialize app
init()
