var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){

});

io.on('connection', function(socket){
  console.log('someone connected');
  socket.on('getShips', function(){

  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

