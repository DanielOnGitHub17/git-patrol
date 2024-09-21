const { Probot } = require("probot");
const fs = require("fs");
const path = require("path");
const reprimand = require("./reprimand.js");

const [isNegativeSentiment, makeRandomResponse] =
    [reprimand.isNegativeSentiment, reprimand.makeRandomResponse];

const events = ["issues.opened", "issues.edited"
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
  if (context.isBot) return;  // Don't want recursive - effect
  const sentBy = context.payload.sender.login;

  let messageLocation = "issue";
  if (context.name.includes("comment")){
    messageLocation = "comment";
  }
  const message = context.payload[messageLocation].body;

  const rebukeMessage = makeRandomResponse(sentBy, message);
  if (!isNegativeSentiment(message)) return;
  const issueComment = context.issue({
    body: rebukeMessage
  });

  return context.octokit.issues.createComment(issueComment);
}
