
class Play {

    create() {
        
        this.player = this.physics.add.sprite(250, 170, 'player');
        this.player.body.gravity.y = 500;
        
        this.arrow = this.input.keyboard.createCursorKeys();
        
        this.createWorld();
        
        this.coin = this.physics.add.sprite(60, 130, 'coin');
        
        this.scoreLabel = this.add.text(30, 25, 'score: 0', { font: '18px Arial', fill: '#fff' });
        this.score = 0;
        
        this.enemies = this.physics.add.group();
        this.time.addEvent({
            delay: 2200,
            callback: () => this.addEnemy(),
            loop: true,
        
        });
        
      /*  this.bullets =  this.physics.add.group();
        this.time.addEvent({
            delay: 500,
            callback: () => this.shootBullet(),
            loop: true, 
        }); */

    }

    update() {

        //this.input.keyboard.on('keydown_S', () => this.shootBullet());

        this.physics.collide(this.player, this.walls);
        this.physics.collide(this.enemies, this.walls);
        if (!this.player.active) {
            return;
        }
        
        this.movePlayer();
        if (this.player.y > 340 || this.player.y < 0) {
            this.playerDie();
        }
        if (this.physics.overlap(this.player, this.coin)) {
            this.takeCoin()
        }
        
        if (this.physics.overlap(this.player, this.enemies)) {
            this.playerDie();
        }
    }

    movePlayer() {

        if (this.arrow.left.isDown) {
            this.player.body.velocity.x = -200;
            this.player.flipX = false
        }
        else if (this.arrow.right.isDown) {
            this.player.body.velocity.x = 200;
            this.player.flipX = true
        }
        else {
            this.player.body.velocity.x = 0;
        }


        if (this.arrow.up.isDown && this.player.body.onFloor()) {
           
            this.player.body.velocity.y = -320;
        }
    /* if (this.arrow.down.isDown) {
      this.shootBullet();
        } */
       

    }

    createWorld() {
        this.walls = this.physics.add.staticGroup();
        this.walls.create(10, 170, 'wallV');
        this.walls.create(490, 170, 'wallV');
        this.walls.create(10, 50, 'wallH');
        this.walls.create(450, 10, 'wallH');
        this.walls.create(50, 330, 'wallH');
        this.walls.create(450, 330, 'wallH');

        this.walls.create(0, 170, 'wallH');
        this.walls.create(500, 170, 'wallH');
        this.walls.create(250, 90, 'wallH');
        this.walls.create(250, 250, 'wallH');
    }

    playerDie() {
       console.log("ddd");
       
        this.scene.start('menu', { score: this.score })
    }

    takeCoin() {
        this.score += 5;
        this.scoreLabel.setText('score: ' + this.score);
        this.updateCoinPosition();
    }

    updateCoinPosition() {
        let positions = [
            { x: 140, y: 60 },
            { x: 360, y: 60 },
            { x: 60, y: 140 },
            { x: 440, y: 140 },
            { x: 130, y: 300 },
            { x: 370, y: 300 },
        ];
        positions = positions.filter(coin => coin.x !== this.coin.x);
        let newPosition = Phaser.Math.RND.pick(positions);
        this.coin.setPosition(newPosition.x, newPosition.y)
    }

    addEnemy() {

        let enemy = this.enemies.create(250, -10, 'enemy');
        enemy.body.gravity.y = 500;
        enemy.body.velocity.x = Phaser.Math.RND.pick([-100, 100]);
        enemy.body.bounce.x = 1;
        
        this.time.addEvent({
            delay: 10000,
            callback: () => enemy.destroy(),
        });
    }

    shootBullet() {
      
      console.log("ff");
      /*  let bullet = this.bullets.create(this.player.body.position, 'bullet');
        bullet.body.gravity.y = 0;
        bullet.body.velocity = this.player.body.velocity;

        this.time.addEvent({
            delay: 1000,
            callback: () => bullet.destroy(),
        });
*/

/* this.bullets.create(100,100);
this.bullets.velocity.x = Phaser.Math.RND.pick([-100, 100]); */
}


}
