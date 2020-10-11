// Variables
var bullet, wall, thickness;
var speed, weight;

function setup() {

  //Speed and weigth
  speed = random (223,321);
  weight = random (30,52);
  thickness = random (22,83);

  //bullet 
  bullet = createSprite(25,200,25,5);
  bullet.shapeColor = color(255,255,255);

  //Wall
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor =  color(80,80,80);

  //Assigning speed a value
  bullet.velocityX = speed;
  
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0,255,255);  
  
  //Detecting Collision
  if (bullet.collide(wall)){
    bullet.x = width/2;
    var damage = 0.5 * weight * speed * speed /thickness/thickness/thickness;
    if (damage > 10){
      wall.shapeColor = color(255,0,0);
    } 
    if (damage < 10){
      wall.shapeColor = color(0,255,0);
    } 
  }
  drawSprites();
}