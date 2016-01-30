var Main = function(game){
    var that = {};
    var cursors;
    var bullet;
    var bullets;
    var bulletTime = 0;
    var shipManagerInstance = shipManager();

    function fireBullet () {
        if (game.time.now > bulletTime)
        {
            bullet = bullets.getFirstExists(false);

            if (bullet)
            {
                bullet.reset(shipManagerInstance.active().x, shipManagerInstance.active().y);
                bullet.lifespan = 2000;
                bullet.rotation = shipManagerInstance.active().rotation;
                game.physics.arcade.velocityFromRotation(shipManagerInstance.active().rotation, 800, bullet.body.velocity);
                bulletTime = game.time.now + 50;
            }
        }

    }

    function screenWrap (sprite) {
        if (sprite.x < 0)
        {
            sprite.x = game.width;
        }
        else if (sprite.x > game.width)
        {
            sprite.x = 0;
        }

        if (sprite.y < 0)
        {
            sprite.y = game.height;
        }
        else if (sprite.y > game.height)
        {
            sprite.y = 0;
        }
    }


    that.create = function() {
        //  This will run in Canvas mode, so let's gain a little speed and display
        game.renderer.clearBeforeRender = false;
        game.renderer.roundPixels = true;

        //  We need arcade physics
        game.physics.startSystem(Phaser.Physics.ARCADE);

        //  A spacey background
        game.add.tileSprite(0, 0, game.width, game.height, 'space');


        //  Our ships bullets
        bullets = game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        //bullets.scale.set(0.35, 0.35);

        //  All 40 of them
        bullets.createMultiple(40, 'bullet');
        bullets.setAll('anchor.x', 0.5);
        bullets.setAll('anchor.y', 0.5);


        shipManagerInstance.add(game, 0, 0);
        shipManagerInstance.add(game, 600, 600);

        //  Game input
        cursors = game.input.keyboard.createCursorKeys();
        game.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);
    };

    that.update = function() {

        var shipPosition = {
            x: shipManagerInstance.getShip(1).x,
            y: shipManagerInstance.getShip(1).y,
            rotation: shipManagerInstance.getShip(1).rotation
        };

        var currentShip = shipManagerInstance.active();
        if (cursors.up.isDown)
        {
            game.physics.arcade.accelerationFromRotation(currentShip.rotation, 200, currentShip.body.acceleration);
        }
        else
        {
            currentShip.body.acceleration.set(0);
        }

        if (cursors.left.isDown)
        {
            currentShip.body.angularVelocity = -300;
        }
        else if (cursors.right.isDown)
        {
            currentShip.body.angularVelocity = 300;
        }
        else
        {
            currentShip.body.angularVelocity = 0;
        }

        if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
        {
            fireBullet();
        }

        screenWrap(currentShip);

        bullets.forEachExists(screenWrap, this);
    };

    that.gameOver = function() {
        this.game.state.start('GameOver');
    };

    return that;
};