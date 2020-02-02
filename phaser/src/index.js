import Phaser from 'phaser';
let bad;
let good;

function preload() {
  this.load.image('sky', 'src/assets/canvas.jpg')
  this.load.image('bad','src/assets/reaper.png')
  this.load.image('good', 'src/assets/megaman moving-1.png')
}

function create() {
  this.add.image(250, 230, 'sky')
  bad = this.add.sprite(200, 200, 'bad')
} good = this.add.sprite(180, 230, 'good')
function update() {
	bad.x += 1;
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