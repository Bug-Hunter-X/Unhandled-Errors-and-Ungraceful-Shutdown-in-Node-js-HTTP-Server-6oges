const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);

//This is a very basic HTTP server. It doesn't handle errors or close gracefully.  In a real world application, you'd add much more robust error handling and proper cleanup on server shutdown.