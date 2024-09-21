# Git Patrol Bot

Git Patrol Bot is a Probot application designed to monitor GitHub repositories for negative sentiments in issues and comments. When negative sentiments are detected, the bot responds with a constructive message to encourage respectful communication.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Sentiment Analysis**: Automatically analyzes the sentiment of issues and comments to identify negative language.
- **Constructive Responses**: Responds with a set of predefined messages to encourage respectful discussion.
- **Modular Design**: Easily customizable and extendable with modular components.
- **JSON Configuration**: Utilizes a JSON file for maintaining a comprehensive list of negative words.

## Technologies Used

- **Node.js**: JavaScript runtime for building the application.
- **Probot**: Framework for building GitHub Apps.
- **Express**: Web framework for creating the API endpoints.
- **Body-Parser**: Middleware for parsing request bodies.
- **File System**: Native Node.js module for reading files.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/DanielOnGitHub17/git-patrol.git
   cd git-patrol-bot

2. Install the Dependencies:
   
   npm install

3. Set up your environment variables. Create a .env file in the root of the project and add your GitHub App credentials:
   APP_ID=your_app_id
   PRIVATE_KEY_PATH=path_to_your_private_key.pem

##  Configuration

Negative Words List: Modify the negativeWords.json file to customize the list of negative words used for sentiment analysis.
Responses: Change the responses in the offensiveResponses array within the app.js file to customize how the bot reacts to negative sentiments.

## Usage

1. Start the bot:
   npm start
2. Deploy the bot on your GitHub repository. Follow the instructions from the Probot documentation to deploy your bot.

3. The bot will automatically start monitoring for issues and comments in the connected repository.

## Contributing
Contributions are welcome! If you have suggestions or improvements, please create a pull request or open an issue.

## How to Contribute
1. Fork the repository.

2. Create a new branch:

git checkout -b feature/your-feature-name

3. Make your changes and commit them:

git commit -m "Add your message"

4. Push to the branch:

git push origin feature/your-feature-name

5. Create a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Developers
Abraham Ochelle 
Daniel Enesi
Joseph Oduyebo
