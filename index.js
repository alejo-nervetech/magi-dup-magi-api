'use strict';

const Server = require('./src/server');

let server;

process.once('SIGTERM', () => {
    if (server) {
        server.exit();
    }
});

server = new Server();

server.start();
