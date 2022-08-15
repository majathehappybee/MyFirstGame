let game = new Phaser.Game({
    width: 500,
    height: 340,
    backgroundColor: '#3498db',
    physics: { default: 'arcade'},
    parent:'game',
});

console.log("load.scene");
game.scene.add('load', Load);
console.log("menu.scene");
game.scene.add('menu', Menu);
console.log("game.scene");
game.scene.add('play', Play);

game.scene.start('load');