export class Player{

constructor(scene,x,y){

this.scene = scene;

this.sprite =
scene.physics.add.sprite(
x,
y,
"player"
);

this.sprite.setScale(
1.2
);

}

jump(){

if(
this.sprite.body.touching.down
){

this.sprite.setVelocityY(
-600
);

}

}

}
