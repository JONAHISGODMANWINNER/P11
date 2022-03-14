var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //put in the image for the boy to run in
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
  
  // Moving background
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

  //creating boy running
  boy = createSprite(180,340,30,30);
  boy.scale=0.08;
  boy.addAnimation("JakeRunning",boyImg);
    
  //create boundarys on the left side
  leftBoundary=createSprite(0,0,100,800);

  // leftBoundary.invisible = false;
   leftBoundary.visible = true;
  //leftBoundary.invisible = true;
   //leftBoundary.visible = false;

  //create boundary on the right side
  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible = false;
}

function draw() {
    background(0);
    //tell the path to give it a velocity of 4 
    path.velocityY = 4;
    //control the boy with the mouse
    boy.x = World.mouseX;
    //create edges for the canvas and making the boy collide with the edges
    edges= createEdgeSprites();
    boy.collide(edges[3]);
    boy.collide(leftBoundary);
    boy.collide(rightBoundary);
  
  //code to reset the background

  if(path.y > 400 ){
    path.y = height/2;
  }

  /*if(path.y > 400 ){
   
  path.y = height/2;
  }*/

  /*if(path.y > 400 ){
path.y = height/2;}*/

/*if(path.y > 400 ){path.y = height/2;}*/
  
  drawSprites();
}
