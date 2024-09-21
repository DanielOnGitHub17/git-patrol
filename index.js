

const { Probot } = require("probot");
const fs = require("fs");
const path = require("path");

// Load environment variables
require("dotenv").config();

events = ["issues.opened", "issues.edited"
    , "issue_comment.created", "issue_comment.edited"
    , "commit_comment.created"
    , "discussion.created", "discussion.edited"
    , "discussion_comment.created", "discussion_comment.edited"
];
offensive_responses = [
  "Please be respectful in your comments.",
  "This comment violates our community guidelines.",
  "Let's keep the conversation constructive.",
  "Offensive language is not tolerated here.",
  "Please refrain from using inappropriate language."
]
function getRandomOffensiveResponse() {
  return offensiveResponses[Math.floor(Math.random() * offensiveResponses.length)];
}
module.exports = (app) => {
  // Load the private key from file
  const privateKey = fs.readFileSync(path.join(__dirname, process.env.PRIVATE_KEY_PATH), "utf8");

  // Set up authentication
  app.auth = (installationId) => {
    const { App } = require("@octokit/app");
    const appAuth = new App({
      appId: process.env.APP_ID,
      privateKey: privateKey
    });
    return appAuth.getInstallationOctokit(installationId);
  };

  app.on(events, replyToIssue);
};

async function replyToIssue(context) {
  const response = getRandomOffensiveResponse();

  const issueComment = context.issue({
      body: response
    });
    return context.octokit.issues.createComment(issueComment);
}

// https://prod.liveshare.vsengsaas.visualstudio.com/join?991B970CD816922B96012DD15BE9D6996208

