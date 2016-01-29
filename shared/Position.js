function Position() {
	this.x = 0;
	this.y = 0;
	this.orientation = 0;
}

Position.prototype.setX = function(newX) {
	this.x = newX;
	return this;
}

Position.prototype.setY = function(newY) {
	this.y = newY;
	return this;
}

Position.prototype.setOrientation = function(newOrientation) {
	this.orientation = newOrientation;
	return this;
}

Position.prototype.distance = function(Position) {
	// squareroot ( (x2 - x1)^2 + (y2 - y1)^2 )
	xdiff = Position.x - this.x;
	ydiff = Position.y - this.y;

	return Math.sqrt( (xdiff * xdiff) + (ydiff + ydiff) );
}

module.exports = Position;