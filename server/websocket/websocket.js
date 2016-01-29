/**
 * Created by krishansolanki on 29/01/2016.
 */


var WebSocketServer = require('websocket').server;

var http = require('http');

var server = http.createServer(function(request, response) {

  console.log('morgans a cunt');
  // process HTTP request. Since we're writing just WebSockets server
  // we don't have to implement anything.
});
server.listen(8080, function() { });

// create the server
wsServer = new WebSocketServer({
  httpServer: server,
  autoAcceptConnections: false
});



// WebSocket server
wsServer.on('request', function(request) {

  var connection = request.accept('echo-protocol', request.origin);
  console.log((new Date()) + ' Connection accepted.');

  // This is the most important callback for us, we'll handle
  // all messages from users here.
  connection.on('message', function(shipObject) {
      console.log('Received Message:');

  });

  connection.on('close', function(connection) {
    // close user connection
    console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
  });
});