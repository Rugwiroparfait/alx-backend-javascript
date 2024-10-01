const http = require('http');

// Create the HTTP server and assign it to the 'app' variable
const app = http.createServer((req, res) => {
  // Set the response header for plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Respond with the message
  res.end('Hello Holberton School!');
});

// The server listens on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

// Export the app variable
module.exports = app;
