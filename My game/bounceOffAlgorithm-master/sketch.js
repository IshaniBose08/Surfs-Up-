var fixedRect, movingRect ;
var bgimg , mandrown , sharkimg , whirlpoolimg , surferimg ;

function setup() {
  createCanvas(800,600);
  bg = createSprite (400,600,800,600)
  bg.addImage (bgimg)
  bg.scale = 1.5

  player = createSprite (100,100,20,40)
  player.debug = true
  player.velocityY = 0

  

 
  man = createSprite (300,300,20,40)
  man.addImage(mandrown)
  man.scale = 0.3
  man.debug = true 
  man.shapeColor = "green"

    bg.debug = true 
 // bg.shapeColor = "blue"
  bg.velocityY = -4
  bg.y = bg.height/2

  
  
   
  
}


function preload (){
  bgimg = loadImage("backgroundwaves.png")
  mandrown = loadImage("drowningman.png")
  sharkimg = loadImage("sharkfinimage.png")
  whirlpoolimg = loadImage("oceanwhirlpool.png")



}


function draw() {
  background( 137,207,240 )
  if (keyIsDown ("space")){
    player.velocityY = player.velocityY + 10 

   }

  if (bg.y<300){
    bg.y = bg.height/2
  }


  if (frameCount%60===0){
    Spawnshark()
  }

  if (frameCount%200===3){
    Spawnwhirlpool()
  }

  //KOconsole.log(frameCount)
  drawSprites();
}
 function Spawnshark(){
  shark = createSprite(50,350,20,20)
  shark.addImage (sharkimg)
  shark.debug = true
  shark.shapeColor = "pink"
  shark.velocityY = -10
  
 }

 function Spawnwhirlpool(){
  whirlpool = createSprite (200,200,40,40)
  whirlpool.addImage (whirlpoolimg)
  whirlpool.debug = true 
  whirlpool.shapeColor = "white"


 }