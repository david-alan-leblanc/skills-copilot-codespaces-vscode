// Create web server
const express = require('express');
const app = express();
const port = 3000;
// Import the commentsRouter
const commentsRouter = require('./commentsRouter');
// Use the commentsRouter
app.use('/comments', commentsRouter);
// Listen to the port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});