// api/github/webhooks/index.js
import { createNodeMiddleware, createProbot } from "probot";

import app from "../../../app.js";
console.log("hi");

export default createNodeMiddleware(app, {
  probot: createProbot(),
  webhooksPath: "/api/github/webhooks",
});

// const { createNodeMiddleware, createProbot } = require("probot");

// const app = require("../../../app");
// const probot = createProbot();

// module.exports = createNodeMiddleware(app, { probot, webhooksPath: '/api/github/webhooks' });
