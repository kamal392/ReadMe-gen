// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license.license; // i think this is problem #1
  let yourLicense = ''
  if(licenseType !== ''){
    return yourLicense  = `![License: ${licenseType}](https://img.shields.io/badge/License-${licenseType}-yellow.svg)`; 
  }
  
  return yourLicense;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseType = license.license;
  if(licenseType !== ''){
  return (`- [License](#license)`)
  }

  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseType = license.license;
  let yourLicenseSection = `This application is covered by the ${licenseType} license.`;
  return yourLicenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1 align="center">${data.projectTitle}</h1>
  ${renderLicenseBadge(data)}<br/>
    
  ## Description
  🔍 ${data.description}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  💾 ${data.installation}
  
  ## Usage
  💻 ${data.usage}
  
  ## License
  ${renderLicenseSection(data)}<br/>
  
  ## Contributing
  👪 ${data.contributing}
  
  ## Tests
  ✏️ ${data.tests}
  
  ## Questions
  ✋ ${data.questions}<br />

  <br />
  :octocat: Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
  <br />
  ✉️ Email me with any questions: ${data.email}<br /><br />
  
  This README was generated with  by Kamal Pandey
      `;
}

module.exports = generateMarkdown;
