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

module.exports = Position;