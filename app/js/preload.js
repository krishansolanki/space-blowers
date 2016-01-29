var Preload = function(game){};

Preload.prototype = {

	preload: function(){
        game.load.image('space', 'assets/deep-space.jpg');
        game.load.image('bullet', 'assets/bullets.png');
        game.load.image('ship', 'assets/ship.png');
	},

	create: function(){
		this.game.state.start("Main");
	}
}