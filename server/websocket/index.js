var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Universe = require('../Universe.js');

// Our Universe
var game = new Universe();

// List of connected players
var listOfPlayerName = [];

// Let's serve an exmaple page to trigger some test events from the clients
app.get('/websocket/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  
  // add the ship to the Universe
  console.log('someone connected');
  // var playerName = game.addPlayer();
  
  socket.on('disconnect', function(playerName){
    console.log('user '+playerName +' disconnected');
    // TODO Remove the user and all of its associated bullets from the Universe
    // game.removePlayer(playerName);
  });

  socket.on('position_update', function(msg){
    console.log('message received from ' + msg.player);
    console.log('message: ' + msg);
  });
  
});

http.listen(3000, function(){
  console.log('Hello WebSocket');
  console.log('listening on *:3000');
});

