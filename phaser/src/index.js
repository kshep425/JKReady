import Phaser from 'phaser';
let bad;
let good;

function preload() {
  this.load.image('sky', './public/assets/images/fixed_image_1.jpg')
  this.load.image('bad','public/assets/villian_idle.png')
  this.load.image('good', 'public/assets/images/hero_idle.png')
}

function create() {
  this.add.image(250, 230, 'sky')
  bad = this.add.sprite(200, 200, 'bad')
  good = this.add.sprite(180, 230, 'good')
}
 
function update() {
	bad.x += 1;
	good.x += 2;
}

const config = {
	type: Phaser.AUTO,
	width: 900,
	height: 600,
	backgroundColor: "#007eff",
	scene: {
	preload,
	create,
	update
	}
}

const game = new Phaser.Game(config)