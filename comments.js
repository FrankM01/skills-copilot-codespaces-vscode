// Create a web server
const express = require('express');
const app = express();
const port = 3000;

// Import the comments module
const comments = require('./comments');

// Get all the comments
app.get('/comments', (req, res) => {
  res.json(comments.getAll());
});

// Get comments by id
app.get('/comments/:id', (req, res) => {
  res.json(comments.getComment(req.params.id));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
