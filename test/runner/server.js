var path = require('path');
var http = require('http');
var express = require('express');
var should = require('should');

// http
var root = path.join(__dirname, '../../');
var runnerFile = path.join(root, './test/runner/runner.html');

var port = process.env.PORT || 9090;
var app = express();
var server = http.createServer(app);
app.use(express.static(root));
app.use(express.bodyParser());

// test crap
app.get('/', function(req, res){
  res.sendfile(runnerFile);
});

module.exports = server;