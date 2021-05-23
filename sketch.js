var canvas, backgroundImage;
var arrow, dart;
var arrowImg, dartImg;
var speed;
var score = 0;
function preload(){
  arrowImg = loadImage("images/Arrow.png");
  dartImg = loadImage("images/dart.png");
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  arrow = createSprite(displayWidth / 2, displayHeight - 250);
  dart = createSprite(displayWidth / 2, displayHeight / 2 - 180);
  dart.debug = true;
  arrow.debug = true;
  arrow.setCollider("rectangle", 0, 0, 10, 10);
   dart.setCollider("circle", 0, 0, 30);
  dart.scale = 0.30;
  arrow.scale = 0.15;
  arrow.addImage(arrowImg);
  dart.addImage(dartImg);
  speed = random( -3,-2);
  arrow.velocityY = speed;
  
}


function draw(){
   //start the game
  background(255);
  textSize(30);
  fill("Blue");
  text("Score:" + score, displayWidth - 200,  50);
  //if (dart.x - arrow.x < (arrow.width + dart.width) / 2) {
    
    if (arrow.collide(dart)) {
     score++
   }
 // }
  arrow.depth = dart.depth
  arrow.depth += 1;


  drawSprites();
}
function keyPressed() {
  if (keyCode===38) {
     arrow.velocityY = speed;
 }
}
