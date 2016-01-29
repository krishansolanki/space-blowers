Position = require('./Position.js');
Collidable = require('./Collidable.js');

function MovableObjects(name, position, radius) {
	this.name = name;

	if (position == undefined)
		position = new Position();

	this.position= position;
	this.orientation = position.orientation;
	this.deltas = [];

	this.radius = radius;
} 

MovableObjects.prototype.fullCircle = Math.PI * 2;

MovableObjects.prototype = Object.create(Collidable);

/*
* Function to set the position
*/
MovableObjects.prototype.setPosition = function(newPosition) {
	this.position = newPosition;
};

/*
* Function to apply a force
*/
MovableObjects.prototype.applyForce = function(forceAmount) {

	var orientation = this.orientation;
	var angle = Math.atan2(this.position.y, this.position.x);
        var delta = angle - orientation;
        var delta_abs = Math.abs(delta);

        if (delta_abs > Math.PI) {
            delta = delta_abs - fullCircle;
        }

        if (delta !== 0) {
            var direction = delta / delta_abs;
            orientation += (direction * Math.min(turnSpeed, delta_abs));
        }
        orientation %= fullCircle;

        this.position.x += Math.cos(orientation) * speed;
        this.position.y += Math.sin(orientation) * speed;
};


MovableObjects.prototype.isColliding = function(MovableObject){
   if (this.position.distance(MovableObject.position) < (this.radius + MovableObject.radius)) {
   	this.collide();
   	MovableObject.collide();
   	return true;
   }
   return false;
};

MovableObjects.prototype.collide = function(MovableObject){
   console.log(this.name+': BOOM');
};



// export the class
module.exports = MovableObjects;