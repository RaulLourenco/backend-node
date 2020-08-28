import app from './app';
const http = require('http');
const normalizePort = require('normalize-port')

// Get port from environment and store in Express.
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
// Create HTTP server.
const server = http.createServer(app);