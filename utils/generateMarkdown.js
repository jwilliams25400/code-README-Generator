// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "Unlicensed") {
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`;
  } else {
    return "";
  }
}

//   if(license === "MIT") {
//     licenseBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
//   }
//   else if (license === "Apache License 2.0") {
//     return `![License: Apache License](https://img.shields.io/badge/License-Apache-green.svg)`
//   }
//   else if (license === "Mozilla Public License") {
//     return `![License: Mozilla Public License](https://img.shields.io/badge/License-Mozilla-red.svg)`
// }
//   else if (license === "GPL v3") {
//     return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
// }
//   else if (license === "unlicensed") {
//     return `![License: unlicense](https://img.shields.io/badge/License-unlicense-blue.svg)`

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licenselink = `## Link
`
  if (license === "MIT") {
    licenselink += `[License: MIT](https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache License 2.0") {
    licenselink += `[License: Apache License](https://apache.org/licenses/License-2.0)`;
  } else if (license === "Mozilla Public License") {
    licenselink += `[License: Mozilla Public License](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "GPL v3") {
    licenselink += `[License: Mozilla Public License](https://gnp.org/licenses)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "unlicensed") {
    return "";
  } else {
    return "* [License](#license)";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
const badge = renderLicenseBadge(data.license);
const licenselink = renderLicenseLink(data.license);
const licenseSec = renderLicenseSection(data.license)

  return `# ${data.title}

https:\\www.github.com/${data.github}


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
###${licenseSec}
--------------------


## Questions: 
### if you have any question about the repo, contact Github: (https://www.github.com/${data.github})
or E-mail: ${data.Email}`    
  
}

module.exports = generateMarkdown;
