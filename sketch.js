var bullet, wall, thickness;
var speed, weight;
var damage;

function setup() {
  createCanvas(1600,400);

  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  thickness = Math.round(random(22,83));
  bullet = createSprite(100,200,30,10);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

}

function draw() {
  background(10);  

  if(hasCollided(bullet,wall)){
    damage = (0.5*weight*speed^2)/thickness^3;
    bullet.velocityX = 0;
    if(damage>10) {
      wall.shapeColor = color("red");
    }
    else {
      wall.shapeColor = color("green");
    }
  }
  drawSprites();
}

function hasCollided(b, w) {
  bulletRightEdge = b.x + b.width;
  wallLeftEdge = w.x;
  if(bulletRightEdge >= wallLeftEdge) {
    return true;
  }
  else{
    return false;
  }

}