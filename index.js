'use strict';

var os = require('os');
var nodeStatic = require('node-static');
//var http = require('http');
var socketIO = require('socket.io');

const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('./private.pem'),
  cert: fs.readFileSync('./public.pem')
};

var fileServer = new(nodeStatic.Server)();
let app = https.createServer(options, (req,res)=>{
  fileServer.serve(req, res);
}).listen(3000);
