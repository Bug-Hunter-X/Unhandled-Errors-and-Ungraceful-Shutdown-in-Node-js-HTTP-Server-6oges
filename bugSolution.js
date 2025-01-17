const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

//Handle Errors

server.on('error', err => {
    console.error('Server Error:', err);
    //Perform any necessary cleanup here
});

const gracefulShutdown = () => {
    console.log('Received shutdown signal. Closing gracefully...');
    server.close(() => {
        console.log('Server closed.');
        process.exit(0);
    });
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);

server.listen(8080, () => {
    console.log('Server listening on port 8080');
});