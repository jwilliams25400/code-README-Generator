// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "please enter a github username to continue";
      }
    },
  },
  {
    type: "input",
    name: "Email",
    message: "What is your E-mail?",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "please enter a E-mail to continue";
      }
    },
  },
  {
    type: "input",
    name: "title",
    message: "What is your Project title?",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "please enter a Project title to continue";
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please write a brief a description of your project",
  },
  {
    type: "checkbox",
    name: "technology",
    message: "what languages are used on your project",
    choices: ["HTML", "CSS", "Javascript", "Node"],
  },
  {
    type: "list",
    name: "license",
    message: "What license does your project have?",
    choices: ["MIT", "APACE 2.2", "BSD", "GPL 3.0", "unlicensed"],
  },
  {
    type: "input",
    name: "installation",
    message: "what command should be run to install dependencies?",
  },
  {
      type: "input",
      name: "testCommand",
      message: " What test command should be used to run the program"
  },
  {
    type: "input",
    name: "usage",
    message: "any additonal usage information?",
  },
  {
    type: "input",
    name: "contribute",
    message:
      "How can others developers contribute to the repo?",
  },
];

//   .then((response) => {
//       console.log (response)
//   });

// TODO: Create a function to write README file
function writeToFile(fileName, response) {
  return fs.writeFile(fileName, response, function (err) {
    err ? console.error(err) : console.log("Successfully wrote: " + fileName)
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    writeToFile("README.md", generateMarkdown(response));
  });
}
// Function call to initialize app
init();
