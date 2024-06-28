// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route for GET request
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});