var wall, speed, weight, thickness



function setup() {
  createCanvas(1000,400);
  speed = random(223,321);
  weight = random(400,1500);
  bullet = createSprite(50,200,50,25);
  thickness = random(22,83)
  wall = createSprite(900,200,thickness,200);
  
  
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(32,32,32);
  
  if (collision(bullet, wall)) { 
    bullet.velocityX = 0;
    var damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
    if (damage > 10) { 
    wall.shapeColor = "red";  
    }

    if(damage < 10) {
    wall.shapeColor = "green";  
    }
  }
  drawSprites();
}