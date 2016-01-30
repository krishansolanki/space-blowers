var Preload = function(game){};

Preload.prototype = {

	preload: function(){
        game.load.image('space', 'assets/background.jpg');
        game.load.image('bullet', 'assets/blast.png');
        game.load.image('ship', 'assets/ship2.png');
	},

	create: function(){
		this.game.state.start("Main");
	}
}