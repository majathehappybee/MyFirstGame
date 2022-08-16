class Load {
    preload() {
        this.load.image('background', 'assets/background.png');
        this.load.image('player', 'assets/pickle.png');
        //this.load.image('player2', 'assets/pickle2.png');
        this.load.image('coin', 'assets/cookie.png');
        this.load.image('enemy', 'assets/evilKitty.png');
        this.load.image('wallV', 'assets/wallVertical.png');
        this.load.image('wallH', 'assets/wallHorizontal.png');
      //  this.load.image('bullet', 'assets/bullet.png');
       // this.load.image('bullet','assets/bullet.png');

        let loadLabel = this.add.text(250, 170, 'loading',
        { font: '30px Arial', fill: '#fff'});

        loadLabel.setOrigin(0.5, 0.5);
    }


    create() {
        this.scene.start('menu');
    }
}
