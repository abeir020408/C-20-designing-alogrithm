var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 80, 50);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect=createSprite(600,200,100,50);
  movingRect.shapeColor="green";
  movingRect.debug=true;
}

function draw() {
  background("black");
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  drawSprites();
}