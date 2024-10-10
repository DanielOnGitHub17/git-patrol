// api/github/webhooks/index.js
console.log("hi");

const { createNodeMiddleware, createProbot } = require("probot");

const app = require("../../../app");
const probot = createProbot({
  appId: process.env.APP_ID,
  privateKey: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
  secret: process.env.WEBHOOK_SECRET
});

module.exports = createNodeMiddleware(app, {probot, webhooksPath: "/api/github/webhooks"});

// if it doesn't work, try this: Import reply to issue and events from app.js. 
// do probot.on(events, replyToIssue) in this file