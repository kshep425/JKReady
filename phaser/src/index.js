import Phaser from 'phaser';

function preload() {
  this.load.image('sky', 'src/assets/canvas.jpg')
}

function create() {
  this.add.image(250, 230, 'sky')
}

const config = {
	type: Phaser.AUTO,
	width: 900,
	height: 600,
	backgroundColor: "#007eff",
	scene: {
    create,
    preload
	}
}

const game = new Phaser.Game(config)