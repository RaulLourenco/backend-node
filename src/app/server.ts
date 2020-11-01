import app from './app';

const port = process.env.PORT || 8080;
const server = require('http').createServer()
import { connect } from './database';

server
    .on('request', app)
    .on('listening', function() {
        const addr = this.address()
        const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`
        console.log(`Listening on ${bind}`)
    })
    .on('error', function(error) {
        if (error.syscall !== 'listen') throw error
        const addr = this.address() || { port }
        const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`
        switch (error.code) {
            case 'EACCES':
                console.error(`${bind} requires elevated privileges`)
                process.exit(1)
            case 'EADDRINUSE':
                console.error(`${bind} is already in use`)
                process.exit(1)
            default:
                throw error
        }
    })
    .listen(port)
   
   connect();
    