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
module.exports = (templateData) => {
  console.log(templateData);
  return `
  # **_${templateData.projectTitle}_**
  
  ## **_Description of the project_**
  ${templateData.description}
    
  ## **_Table of contents_**
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

  ## **_Installation_**
  ${templateData.installation}

  ## **_Usage_**
  ${templateData.usage}

  ## **_Contributing_**
  ${templateData.contributing}

  ## **_Tests_**
  ${templateData.tests}

  ## **_License_**
  ${templateData.license}

  ## **_Questions_**

  Don't hesitate to visit [my GitHub](https://github.com/${templateData.github})
  or reach me on my [email address](mailto:${templateData.emailAddress}) for additional questions.
  `;
};
