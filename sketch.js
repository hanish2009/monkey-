var PLAY = 1;
var END = 0;
var gameState = PLAY;

    
  
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var invisibleGround

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600,200)
  
  var survivalTime=0;
  
  //to draw monkey
    monkey = createSprite(50,170,20,50);
  monkey.addAnimation("running", monkey_running);
   monkey.scale=0.1
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = false
  
   //to draw banana
  banana = createSprite(400,50,20,50);
  banana.addImage(bananaImage);
  banana.scale=0.1
  banana.setCollider("rectangle",0,0,banana.width,banana.height);
  banana.debug = false
  
  
  obstacle = createSprite(400,170,20,50);
  obstacle.addImage(obstaceImage);
  obstacle.scale=0.1
  obstacle.setCollider("rectangle",0,0,obstacle.width,obstacle.height);
  obstacle.debug = false
  
  
  invisibleGround=createSprite(300,195,600,10)
   invisibleGround.visible = true;
  
  obstaclesGroup = createGroup();
  bananaGroup = createGroup();
  
   score = 0;
 
  
}


function draw() {
background("white")
  
  banana.velocityX=-3
  obstacle.velocityX=-3
 if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
   
  monkey.collide(invisibleGround);
  
  if(bananaGroup.isTouching(monkey)){
    gameState = END;
    
    
  }
  
  
  
  drawSprites();
  food()
  obst()
  
 stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 250,30);
}

function food() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,250,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = banana.depth;
    banana.depth = banana.depth + 1;
    
    bananaGroup.add(banana);

   
  }
}
function obst() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,170,40,10);
                                        
    obstacle.addImage( obstaceImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;       
    
    //adjust the depth
    obstacle.depth = obstacle.depth;
    obstacle.depth = obstacle.depth + 1;
    
    obstaclesGroup.add(obstacle);

    
   
  }
}