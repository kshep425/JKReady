var game = new Phaser.Game(800, 600, Phaser.CANVAS,{preload: preload, create: create});
// import Phaser from "phaser";
// import logoImg from "./assets/test.JPG";
import bkImg from "./assets/test.JPG";

var config = {
  type: Phaser.CANVAS,
  width: 800,
  height: 600,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 200 }
      }
  },
  scene: {
      preload: preload,
      create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  game.load.image('bkImg',);
  // this.load.image("logo", logoImg);
}

function create(){
   game.add.image(game.world.centerX, game.world.centerY, 'hotdog').anchor.set(0.5);
}

function create() {
  const logo = this.add.image(800, 600, "logo");

  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 2000,
    ease: "Power2",
    yoyo: true,
    loop: -1
  });
}
