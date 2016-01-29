MovableObjects = require('../shared/MovableObjects.js');

var firstPosition = new Position();
firstPosition.setX(3).setY(4).setOrientation(4);
var firstObject = new MovableObjects('first', firstPosition, 4);
console.log("Name: "+firstObject.name);
console.log("X: "+firstObject.position.x);
console.log("Y: "+firstObject.position.y);

var secondPosition = new Position();
secondPosition.setX(3).setY(4).setOrientation(4);
var secondObject = new MovableObjects('second', secondPosition, 4);
console.log("Name: "+secondObject.name);
console.log("X: "+secondObject.position.x);
console.log("Y: "+secondObject.position.y);

console.log('Check if they are colliding');
console.log(firstObject.isColliding(secondObject)?'Collided':'Not collided');

firstObject.setPosition(new Position().setX(15).setY(15));
console.log("New position for first...");
console.log("X: "+firstObject.position.x);
console.log("Y: "+firstObject.position.y);

console.log('Check if they are colliding');
console.log(firstObject.isColliding(secondObject)?'Collided':'Not collided');