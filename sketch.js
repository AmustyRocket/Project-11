 var track,trackImage;
 var guy,guy_running;
 var R_Invi;
 var L_Invi;
function preload(){
  //pre-load images
  guy_running = loadAnimation("Runner-1.png","Runner-2.png");
  trackImage = loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,200);
  track.addImage(trackImage);
  track.velocityY = 8;
  track.scale = 1.2;

  guy = createSprite(222,362);
  guy.addAnimation("running",guy_running);
  guy.scale = 0.1;
  guy.x = 222;
  


  R_Invi = createSprite(382,390,400,20);
  R_Invi.visible = false;
  
  L_Invi = createSprite(10,390,400,20);
  L_Invi.visible = false;


}

function draw() {
  background(0);
// displaying the Y position of the player in the Console
  console.log(guy.x)

 // If condition to make the loop for the path
 if(track.y > 400) 
 {
  track.y = height/2;
 }
 if(keyDown ("space")) 
 {
   guy.y += -4
 }
 if(keyDown("LEFT_ARROW")) 
 {
  guy.velocityY += 4 
 }
guy.x = World.mouseX;
guy.collide(R_Invi);
guy.collide(L_Invi);
drawSprites();
}


