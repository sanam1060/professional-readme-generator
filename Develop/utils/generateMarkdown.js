// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(templateData, license) {
  if (!license) {
    return '';
  } else if (license) {
    // for (i = 0; i < license.length; i++) {
      for (i = 0; i < templateData.license.length; i++) {
        if (license === 'MIT') {
          return `
          [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
          `
        } else if (license === 'General Public License 2.0') {
          return `
          [![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
          `
        } else if (license === 'General Public License 3.0') {
          return `
          [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
          `
        } else if (license === 'Mozilla Public License 2.0') {
          return `
          [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
          `
        } else if (license === 'BSD 3-Clause License') {
          return `
          [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
          `
        } else if (license === 'Apache License 2.0') {
          return `
          [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
          `
        }
      }
    }
  };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(templateData, license) {
  if (!license) {
    return '';
  } else if (license) {
    // for (i = 0; i < license.length; i++) {
      for (i = 0; i < templateData.license.length; i++) {
        if (license === 'MIT') {
          return `
          https://opensource.org/licenses/MIT
          `
        } else if (license === 'General Public License 2.0') {
          return `
          https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
          `
        } else if (license === 'General Public License 3.0') {
          return `
          https://www.gnu.org/licenses/gpl-3.0
          `
        } else if (license === 'Mozilla Public License 2.0') {
          return `
          https://opensource.org/licenses/MPL-2.0
          `
        } else if (license === 'BSD 3-Clause License') {
          return `
          https://opensource.org/licenses/BSD-3-Clause
          `
        } else if (license === 'Apache License 2.0') {
          return `
          https://opensource.org/licenses/Apache-2.0
          `
        }
      }
    }
  };

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else if (license) {
    // for (i = 0; i < license.length; i++) {
      for (i = 0; i < licenseArray.length; i++) {
        return `
        ## **_License_**
        This project is covered under the ${templateData.license} license.
        Click [here](${renderLicenseLink(license)}) for more information on the license.
        `
      }
    }
  };

// TODO: Create a function to generate markdown for README
module.exports = (templateData) => {
  console.log(templateData);
  return `
  # **_${templateData.projectTitle}_**

  ${renderLicenseBadge(templateData.license)}
  
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
  
  ${renderLicenseSection(templateData.license)}

  ## **_Questions_**

  Don't hesitate to visit [my GitHub](https://github.com/${templateData.github})
  or reach me on my [email address](mailto:${templateData.emailAddress}) for additional questions.`;
};
