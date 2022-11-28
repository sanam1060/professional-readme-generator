// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {

    },
    {

    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// const pageMd = generateMarkdown(portfolioData);
// const pageMd = generateMarkdown();

fs.writeFile("index.md", generateMarkdown(), (err) => {
  if (err) throw new Error(err);
  console.log(
    "Page created! Check out index.html in this directory to see it!"
  );
});

// TODO: Create a function to initialize app
function init() {};

// Function call to initialize app
init();
