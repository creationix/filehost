#!/usr/bin/env node
var send = require('send');
var http = require('http');

var server = http.createServer(function (req, res) {
  send(req, req.url)
    .root(process.cwd())
    .pipe(res);
});
server.listen();
console.log(server.address());
