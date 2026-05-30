import { Player } from "./player.js";
import { createObstacle } from "./obstacles.js";

let game;

export function startGame(){

if(game){

game.destroy(true);

}

const config = {

type: Phaser.AUTO,

parent:"game-container",

width:1200,

height:600,

backgroundColor:"#0f172a",

physics:{
default:"arcade",
arcade:{
gravity:{y:1200},
debug:false
}
},

scene:{
preload,
create,
update
}

};

game = new Phaser.Game(config);

}

let player;
let obstacles;
let score=0;
let scoreText;

function preload(){

this.load.image(
"ground",
"https://labs.phaser.io/assets/sprites/platform.png"
);

this.load.image(
"player",
"https://labs.phaser.io/assets/sprites/phaser-dude.png"
);

this.load.image(
"spike",
"https://labs.phaser.io/assets/sprites/spikedball.png"
);

}

function create(){

const ground =
this.physics.add.staticGroup();

ground.create(
600,
580,
"ground"
)
.setScale(4)
.refreshBody();

player =
new Player(
this,
150,
450
);

player.sprite.setCollideWorldBounds(
true
);

this.physics.add.collider(
player.sprite,
ground
);

obstacles =
this.physics.add.group();

this.time.addEvent({

delay:1800,

callback:()=>{

createObstacle(
this,
obstacles
);

},

loop:true

});

this.physics.add.collider(
obstacles,
ground
);

this.physics.add.overlap(
player.sprite,
obstacles,
gameOver,
null,
this
);

scoreText =
this.add.text(
20,
20,
"Score: 0",
{
fontSize:"30px"
}
);

this.input.keyboard.on(
"keydown-SPACE",
()=>{

player.jump();

}
);

this.input.on(
"pointerdown",
()=>{

player.jump();

}
);

}

function update(){

score += 0.05;

scoreText.setText(
"Score: " +
Math.floor(score)
);

}

function gameOver(){

alert(
"Game Over\nScore: " +
Math.floor(score)
);

location.reload();

}
