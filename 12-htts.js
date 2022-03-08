const http = require('http');


const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('Welcome to wonderland');
    }
    if (req.url == '/about') {
        res.end('Here is our short history');
    }
    //res.end('sorry browser'); //issue with this one 
});

server.listen(3000);