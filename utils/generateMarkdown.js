// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'None':
      return ''
      break;
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'BSD 3':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
      break;
    case 'IBM':
      return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
      break;
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;
    case 'Mozilla':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != 'None') {
    return '- [License](#license)'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license) {
    case 'None':
      return ''
      break;
    case 'Apache 2.0':
      return '## License\n\nhttps://opensource.org/licenses/Apache-2.0'
      break;
    case 'BSD 3':
      return '## License\n\nhttps://opensource.org/licenses/BSD-3-Clause'
      break;
    case 'MIT':
      return '## License\n\nhttps://opensource.org/licenses/MIT'
      break;
    case 'Mozilla':
      return '## License\n\nhttps://opensource.org/licenses/MPL-2.0'
      break;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)


## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## How to Contribute

${data.contribute}

## Tests

${data.test}

## Questions

[github.com/${data.github}](github.com/${data.github})

If you have any questions about this project, contect me at:

${data.email}

---
`;
}

module.exports = generateMarkdown;
