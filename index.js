// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = () => 
// inquirer.prompt
   ([
    {
        type: "input",
        name: "author",
        message: "What is your author's name?",
        validate: (value) =>{ if(value){return true} else {return "please enter a author's to continue"}}        
    },
    {
        type: "input",
        name: "github",
        message: "What is your github name?",
        validate: (value) =>{ if(value){return true} else {return "please enter a github username to continue"}}
    },
    {
        type: "input",
        name: "E-mail",
        message: "What is your E-mail?",
        validate: (value) =>{ if(value){return true} else {return "please enter a E-mail to continue"}}
    },
    {
        type: "input",
        name: "Project title",
        message: "What is your Project title?",
        validate: (value) =>{ if(value){return true} else {return "please enter a Project title to continue"}}
    },
    {
        type: "input",
        name: "Description",
        message: "Please write a brief a description of your project",
    },
    {
        type: "list",
        name: "License",
        message: "What kind of license does your project have?",
        choices: ["MIT", "APACE 2.2", "BSD", "GPL 3.0", "unlicensed"]
    },
    {
        type: "input",
        name: "User Issue solved",
        message: "what problem does your application solve?"
    },
    {
        type: "input",
        name: "discoveries",
        message: "what did you learn from this Assignment?"
    },
    {
        type: "input",
        name: "installation",
        message: "what command should be run to install dependencies?"
    },
    {
        type: "input",
        name: "usage",
        message: "what should the user knwo to run your program?"

    },
    {
        type: "input",
        name: "collaborators",
        message: "are there any individual(s) whom you collaborated with you build the App?"
    }

]);

// TODO: Create a function to write README file
function writeToFile(fileName, data,) {
    fs.writeFile(fileName, data, function(err){
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        }
        else{
            console.log("Successfully wrote: " + fileName);
        }
    })
}


// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
.then(function(data){
    writeToFile("README.md", generateMarkdown(data));
    console.log(data)
})
}
// Function call to initialize app
init();