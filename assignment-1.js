const http = require('http');

const routes = require('./assignment-1-routes');

const server = http.createServer((req,res) => {
    routes.handler(req,res);
});

server.listen(3000);