var monkey , monkey_running
var banana ,bananaImage
var ground
var obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(450,450);
  
  monkey = createSprite(200,365,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(225,400,1000,10);
  ground.velocityX = -3;
  ground.shapeColor = ("brown");
  
  bananaGroup = createGroup();
  obstaclesGroup = createGroup();
}

function draw() {
  
  background("lightgreen");
  
  if(ground.x<0){
    ground.x = ground.width/4;
  }
  
  if(keyDown("space")&&monkey.y>140){
    monkey.velocityY = -15;
}
  monkey.velocityY = monkey.velocityY + 1;
  monkey.collide(ground);
  
  score = Math.round(frameCount/25);
  fill("green");
  stroke("green");
  textSize(20);
  text("SURVIVAL TIME :- " + score,200,50);

  Food();
  Obstacles();
  drawSprites();
}

function Food(){
  if(frameCount % 95 === 0){
    var banana = createSprite(450,220,20,20);
    banana.y = Math.round(random(120,220));
    banana.addImage(bananaImage);
    banana.velocityX = -5;
    banana.scale = 0.1;
    banana.lifetime = 90;
    bananaGroup.add(banana);
    monkey.depth = banana.depth + 1;
  }
}

function Obstacles(){
  if(frameCount % 200 === 0){
    var obstacle = createSprite(450,364,30,30);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -6;
    obstacle.scale = 0.16;
    obstacle.lifetime = 76;
    obstaclesGroup.add(obstacle);
    monkey.depth = obstacle.depth + 1;
  }
}