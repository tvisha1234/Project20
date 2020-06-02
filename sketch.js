var car, wall;
var speed, height;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);

  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  

  if(car.x - wall.x < car.width/2 + wall.width/2) {
    if(0.5*weight*speed*speed/22500 < 100) {
      car.shapeColor = "green";
    }
    if(100 < 0.5*weight*speed*speed/22500 < 180) {
      car.shapeColor = "yellow";
    }
    else(0.5*weight*speed*speed/22500 > 180) {
      car.shapeColor = "red";
    }
  }

  drawSprites();
}