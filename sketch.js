var thief , thiefImg;
var guard , guardImg;
var daimond ,daimondImg;
var bg , bgImg;
var ground;
var car,carImg;
var log,logImg;
var invi;
var lifegroup;
var deathgroup;
var score=0;
var gameState="play";


function preload(){
thiefImg=loadAnimation("theif1.png","thief2.png","thief3.png","thief4.png" );
guardImg=loadAnimation("guard2.png","guard3.png","guard4.png","guard5.png");
daimondImg=loadImage("daimond.png");
bgImg=loadImage("bg.png");
carImg =loadImage("car.png");
logImg=loadImage("log.png")
}

function setup(){
createCanvas(800,400);

bg=createSprite(400,200,800,400);
bg.addImage(bgImg);

ground=createSprite(400,385,800,30)
ground.shapeColor="blue";

thief=createSprite(100,320);
thief.addAnimation("thiefI",thiefImg);
thief.scale=0.8;

invi=createSprite(400,5,800,10)
invi.visible=false;

lifegroup=new Group();
deathgroup=new Group();

}


function draw(){
  background("black");
  

  if(gameState==="play"){
    if(keyDown("space")){
      thief.velocityY=-8;
      }
      
      thief.velocityY=thief.velocityY+0.8;
      
      thief.collide(ground);
      
      
      thief.bounceOff(invi);

      for(var i =0 ;i<lifegroup.length;i++){
      if(thief.isTouching(lifegroup.get(i))){
      score=score+1;
      lifegroup.get(i).destroy();
      }
    }
      if(deathgroup.isTouching(thief)){
        gameState="end";
      }
        spawndown(); 
        spawnup();
        drawSprites();
  }
  stroke("aqua");
  strokeWeight(2)
  fill("mint");
  textSize(20)
  text("Score:"+score,700,100)
 
  if(gameState==="end"){
    stroke("red");
    strokeWeight(2)
    fill("white");
    textSize(50)
    text("GAME OVER💀💀",200,200)
  }



}

function spawnup(){
if(frameCount%50===0){
  daimond=createSprite(800,150,50,10);
  daimond.velocityX=-4;
  daimond.addImage(daimondImg)
  daimond.y=Math.round(random(50,150))
  daimond.scale=0.2;

  lifegroup.add(daimond);
  daimond.lifetime=200;

  
}
}

function spawndown(){
  if(frameCount%123===0){
    enemy=createSprite(800,330,20,300);
    enemy.velocityX=-4;
    enemy.y=Math.round(random(150,250))
    enemy.height=Math.round(random(60,160))
     
    deathgroup.add(enemy);
    enemy.lifetime=200;

   var rand=Math.round(random(1,5))
   switch(rand){

   case 1:enemy.shapeColor="aqua";
   break;

   case 2:enemy.shapeColor="yellow";
   break;

   case 3:enemy.shapeColor="purple";
   break;

   case 4:enemy.shapeColor="lightpink";
   break;

   case 5:enemy.shapeColor="lightgreen";
   break;
   }
    }
  }


  
