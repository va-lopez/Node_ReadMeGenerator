module.exports = info => {
    return `
    # ${info.title}

    
    ## Project Description
    ${info.description}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation
    ${info.installation}

    ## Usage    
    -Link to deployed application: ${info.link}
    
    Screenshots:
    -![screenshot1](/assets/images/${info.screenshot})

    ## License
    ${info.license}

    ## Contributing
    ${info.contributing}

    ## Tests
    ${info.tests}

    ## Questions
    -Name: ${info.name}
    -Github username: ${info.github}
    -Guthub link: https://github.com/${info.github}
        
    ###For any additional questions, feel free to reach out to me at:
    ${info.email}
    `;
};