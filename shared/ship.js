MovableObjects = require('./MovableObjects');

function ship(name, position, radius, player) {
	MovableObjects.call(this, name, position radius)
	this.player = player;
	this.alive = true;
}

ship.prototype.collide() {
	this.alive = false;
}

ship.prototype = new MovableObjects();


// var firefly = new ship('firefly', {x:0,y:0,orientation:0}, 4);
// firefly.setPosition({x:3,y:3,orientation:3});
// console.log(firefly);