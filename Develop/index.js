// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is the project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a brief description of your project: ",
  },
  {
    type: "input",
    name: "installation",
    message: "Describe the installation process if any: ",
  },
  {
    type: "input",
    name: "usage",
    message: "What is this project usage for?",
  },
  {
    type: "list",
    name: "license",
    message: "Choose the appropriate license for this project: ",
    choices: ["MPL2.0", "MIT", "APACHE2.0", "BSD2"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Who are the contributors of this projects?",
  },
  {
    type: "input",
    name: "tests",
    message: "Is there a test included?",
  },
  {
    type: "input",
    name: "questions",
    message: "What do I do if I have an issue? ",
  },
  {
    type: "input",
    name: "username",
    message: "Please enter your GitHub username: ",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email: ",
  },
];

// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
    await writeFileAsync(fileName, data); 
    console.log('✔️  Successfully wrote to README.md');
}

// TODO: Create a function to initialize app
async function init() {
    try{
        const answers = await inquirer.prompt(questions);
        const generteData = generateReadme(answers);
        await writeToFile('./utils/README.md', generteData);
    }catch(err) {
        console.log(err);
    }
    
}

// Function call to initialize app
init();
