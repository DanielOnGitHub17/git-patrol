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
    const issueComment = context.issue({
        body: "Hello!!! Nice comment there!"
    });
    return context.octokit.issues.createComment(issueComment);
}

// https://prod.liveshare.vsengsaas.visualstudio.com/join?991B970CD816922B96012DD15BE9D6996208

