const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');
const process = require('process');

// Get the database path from command-line arguments
const databasePath = process.argv[2];

// Create the HTTP server and assign it to the 'app' variable
const app = http.createServer((req, res) => {
  // Parse the URL to determine the path
  const parsedUrl = url.parse(req.url, true);

  // Set the response header for plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (parsedUrl.pathname === '/') {
    // Respond with the message for the root path
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    // Respond with the list of students for the /students path
    res.write('This is the list of our students\n');

    countStudents(databasePath)
      .then((data) => {
        res.end(data);
      })
      .catch((err) => {
        res.end(err.message);
      });
  } else {
    // If the path is not found, return a 404 status code
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// The server listens on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

// Export the app variable
module.exports = app;

