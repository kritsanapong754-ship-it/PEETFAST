export function createObstacle(
scene,
group
){

const obstacle =
group.create(
1300,
520,
"spike"
);

obstacle.setScale(
0.15
);

obstacle.setVelocityX(
-450
);

obstacle.body.allowGravity =
false;

obstacle.setImmovable(
true
);

}
