const { Probot } = require("probot");
const fs = require("fs");
const path = require("path");

// Load environment variables
require("dotenv").config();

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

  // Example: Respond to issues.opened event
  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Hi there!!! It's great that you want to talk about this."
    });
    return context.octokit.issues.createComment(issueComment);
  });
};
