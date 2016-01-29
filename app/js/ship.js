var Ship = function(){
    var that = {};

    /**
     * Add ship to game.
     *
     * @param game
     * @param posX
     * @param posY
     */
    that.add = function(game, posX, posY){
        //  Our player ship
        sprite = game.add.sprite(posX, posY, 'ship');
        sprite.scale.setTo(2, 2);
        sprite.anchor.set(0.5);

        //  and its physics settings
        game.physics.enable(sprite, Phaser.Physics.ARCADE);

        sprite.body.drag.set(100);
        sprite.body.maxVelocity.set(200);
    };

    return that;
};