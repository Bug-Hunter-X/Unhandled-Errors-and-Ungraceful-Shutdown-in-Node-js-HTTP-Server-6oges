# Unhandled Errors and Ungraceful Shutdown in Node.js HTTP Server

This repository demonstrates a common issue in Node.js applications: the lack of proper error handling and graceful shutdown mechanisms in HTTP servers. The `bug.js` file shows a basic HTTP server without any error handling. The `bugSolution.js` file provides an improved version that addresses these shortcomings.

## Bug

The original server in `bug.js` is extremely rudimentary. It lacks any mechanisms to handle errors (like network issues, unexpected requests or internal server errors) which could lead to unexpected application behavior or crashes.  Additionally, it does not gracefully handle shutdown signals (like SIGINT sent by `Ctrl+C`) resulting in abrupt termination and potential resource leaks.

## Solution

The `bugSolution.js` file demonstrates a more robust approach. It includes:

*   **Error Handling:** The server now uses `server.on('error', ...)` to catch and handle potential errors, providing informative messages to the console.
*   **Graceful Shutdown:** It listens for `SIGINT` (Ctrl+C) and `SIGTERM` signals, allowing the server to close cleanly and prevent resource leaks by using `server.close(...)`.