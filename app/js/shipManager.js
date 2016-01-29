var shipManager = function(){
    var that = {};
    var ships = [];
    var active = 0;
    /**
     * Add ship to game.
     *
     * @param game
     * @param posX
     * @param posY
     */
    that.add = function(game, posX, posY){
        //  Our player ship
        var sprite = game.add.sprite(posX, posY, 'ship');
        sprite.scale.setTo(0.22, 0.22);
        sprite.anchor.set(0.403,0.467);

        //  and its physics settings
        game.physics.enable(sprite, Phaser.Physics.ARCADE);

        sprite.body.drag.set(100);
        sprite.body.maxVelocity.set(300);
        ships.push(sprite);
    };

    that.active = function(){
        return ships[active];
    };

    /**
     * Get a particular ship by index
     * @param index
     * @returns {*}
     */
    that.getShip = function(index){
        return ships[index];
    };

    return that;
};