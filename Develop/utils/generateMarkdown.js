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

const generateMarkdown = (projectName, github) => {
  return `
    # **_Project 1 ${projectName}_**
    ## **_Table of contents_**
    * [Description of the project](#description-of-the-project)
    * [Technologies used](#technologies-used)
    * [Mockup](#mockup)
    * [Link URL to Trello Board](#link-URL-to-Trello-Board)
    * [Link URL to deployed app on GitHub](#link-URL-to-deployed-app-on-GitHub)
    * [Link URL to GitHub Repository](#link-URL-to-GitHub-repository)
    
    ## **_Description of the project_**
    
    ## **_Technologies used_**
    Project is created using:
    * HTML5
    * CSS3
    * JavaScript
    
    ## **_Link URL to GitHub Repository_**
    https://github.com/${github}/${projectName}
    `;
};

module.exports = generateMarkdown;