const express = require('express');

// Create an instance of an Express app
const app = express();

// Set up the root route to respond with 'Hello Holberton School!'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Make the app listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

// Export the app for external use
module.exports = app;

