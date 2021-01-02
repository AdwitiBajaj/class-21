var fixed, moving;
var fixedto;

function setup() {
  createCanvas(1200,800);
  fixed = createSprite(600, 400, 50, 80);
  fixed.shapeColor = "green";
  fixed.debug = true;
  
  moving = createSprite(400,200,80,30);
  moving.shapeColor = "green";
  moving.debug = true;
  fixedto = createSprite(400,400,80,30);
  fixedto.shapeColor = "green";
  fixedto.debug = true;
}

function draw() {
  background(0,0,0);  
  moving.x = World.mouseX;
  moving.y = World.mouseY;
touching(fixed,moving);
touching(fixedto,moving);

  
  drawSprites();
}