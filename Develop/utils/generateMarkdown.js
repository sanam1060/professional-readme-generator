// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}
// `;
// }

//REUSE THE DATA.TITLE, DATA.ETC

const generateMarkdown = (projectTitle, description, installation, usage, contributing, tests, license, github, emailAddress
  ) => {
    return `
    # **_${projectTitle}_**
    
    ## **_Description of the project_**
    ${description}
    
    # **_Project 1 ${projectName}_**
    ## **_Table of contents_**
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [License](#license)
    * [Questions](#questions)

    ## **_Technologies used_**
    Project is created using:
    ${languages}

    ## **_Installation_**
    ${installation}

    ## **_Usage_**
    ${usage}

    ## **_Contributing_**
    ${contributing}

    ## **_Tests_**
    ${tests}

    ## **_License_**
    ${license}

    ## **_Questions_**

    Don't hesitate to visit [my GitHub](https://github.com/${github})
    or reach me on my [email address](mailto:${emailAddress}) for additional questions.
    `;
  };

module.exports = generateMarkdown;