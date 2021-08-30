// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "Unlicensed") {
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`;
  } else {
    return "";
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return ` [License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "None") {
    return `# License
    project is Licensed under ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
const badge = renderLicenseBadge(data.license);
const licenselink = renderLicenseLink(data.license);
const licenseSec = renderLicenseSection(data.license)

  return `# ${data.title}

https://www.github.com/${data.github}


### ${badge} 


## Description
### ${data.description}
--------------------

## Technology
### HTML, CSS, Javascript
--------------------

## Table of Contents:


* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#Contribute)

* [Test](#test)

* [Questions](#questions)

${licenselink}
--------------------


## Installations:
to ensure the repo runs open the terminal and run the following: 
\`\`\`${data.installation}\`\`\`

--------------------

## Usage:
### ${data.usage} 
--------------------

## Test:
### In order to run the repo, open the terminal and run the following: ${data.testCommand}
--------------------

## Contribute:
### ${data.contribute}
--------------------


## This project is licensed under: 
### ${licenseSec}
--------------------


## Questions: 
### if you have any question about the repo, contact Github: (https://www.github.com/${data.github})
or E-mail: ${data.Email}`    
  
}

module.exports = generateMarkdown;
