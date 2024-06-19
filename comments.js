// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file.
// The comments.html file should be served as a response to GET requests to the root URL.
// The comments.html file should be served with the correct Content-Type header.
// The comments.html file should be read from the file system using the fs module.
// The server should respond with a 500 status code if there are any errors reading the file.
// The server should respond with a 404 status code for all other routes.
// The server should respond with a 200 status code for successful requests.
// The server should respond with the correct Content-Type header for the comments.html file.
// The server should respond with the correct content for the comments.html file.
// The server should not contain any hard-coded values.
// The server should not contain any unnecessary code.
// The server should not use the Express library.

// Import the http module
const http = require('http');
const fs = require('fs');

// Create a server object
const server = http.createServer((req, res) => {
  // Check the request method and URL
  if (req.method === 'GET' && req.url === '/') {
    // Read the comments.html file
    fs.readFile('comments.html', 'utf8', (err, data) => {
      // Check for errors
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server running on port 3000');
});