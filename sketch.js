var wall,thickness
var bullet,speed,weight
thickness=random(22,83)
speed=random(223,321)
weight=random(30,52)





function setup() {
wall.createSprite(200,200,thickness,height/2)
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
 
}

function draw() {
  background(255,255,255);  
  if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);


if(damage>10){
  wall.shapeColor=color(255,0,0);
}
if(damage<10){
  wall.shapeColor
}
}


  drawSprites();
}
function hasCollided(Lbullet,Lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=Lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
  return false;
}
