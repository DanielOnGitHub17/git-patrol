const { createNodeMiddleware, createProbot } = require('probot');

// Initialize the Probot app
const app = require('../index'); // Assuming you have your Probot logic in a file called app.js


// Export a function for Vercel to handle requests
module.exports = (req, res) => {
  const probot = createProbot({
    appId: process.env.APP_ID,
    privateKey: process.env.PRIVATE_KEY,
    secret: process.env.WEBHOOK_SECRET,
  });
  
  const middleware = createNodeMiddleware(app, { probot });
  middleware(req, res);
};
