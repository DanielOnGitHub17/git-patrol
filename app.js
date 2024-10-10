const reprimand = require("./reprimand.js");

const [isNegativeSentiment, makeRandomResponse] =
    [reprimand.isNegativeSentiment, reprimand.makeRandomResponse];

const events = ["issues.opened", "issues.edited"
  , "issue_comment.created", "issue_comment.edited"
  , "commit_comment.created"
  , "discussion.created", "discussion.edited"
  , "discussion_comment.created", "discussion_comment.edited"
];

async function replyToIssue(context) {
  console.log("Will soon reply to issue");
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

console.log("GOT TO THE APP");

module.exports = (app) => {
  let body = {"hi": [process.env.APP_ID, process.env.PRIVATE_KEY, process.env.WEBHOOK_SECRET]},
  url = process.env.EMAIL_API;
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.log(body);

  // Set up authentication
  app.auth = (installationId) => {
    const { App } = require("@octokit/app");
    const appAuth = new App({
      appId: process.env.APP_ID,
      privateKey: process.env.PRIVATE_KEY,
      secret: process.env.WEBHOOK_SECRET
    });
    return appAuth.getInstallationOctokit(installationId);

  };

  app.on(events, replyToIssue);
};