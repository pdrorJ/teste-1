var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,30,30);
}

function draw() 
{
  background(30);
  if (keyDown("s")){
    box.y=box.y+6;
  }
  if (keyDown("w")){
    box.y=box.y-6;
  }
  if (keyDown("d")){
    box.x=box.x+6;
  }
  if (keyDown("a")){
    box.x=box.x-6;
  }
  drawSprites();

}




