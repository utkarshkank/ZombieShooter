
var bg, killer1,killer2, zombie;
var back, zombieSpawner;

function preload(){
bg=loadImage("assets/Back.jpg");
killer1=loadImage("assets/download.jpeg");
killer2=loadImage("assets/DS_Still_21.0.jpg");
zombie=loadImage("assets/zombie.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
back=createSprite(displayWidth/8, displayHeight/8,50,50);
back.addImage(bg);

killer01=createSprite(displayWidth-1200,displayHeight-500,20,20);
killer01.addImage(killer1);
killer2.scale=0.1;



}



function draw(){
background(255);


if(keyDown("UP_ARROW")){
    killer01.y=killer01.y-2;

}
if(keyDown("DOWN_ARROW")){
    killer01.y=killer01+2;
}

if(keyDown("LEFT_ARROW")){
    killer01.x=killer01-2;
}
if(keyDown("RIGHT_ARROW")){
    killer01.x=killer01+2;
}

if(keyWentDown("space")){
 killer01.addImage(killer2);

}
else if(keyWentUp("space")){
    killer01.addImage(killer1);


spawnZombies();


drawSprites();
}

function spawnZombies(){

if(frameCount%60===0){

zombieSpawner=createSprite(displayWidth,displayHeight/2,50,50);
zombieSpawner.addImage(zombie);
zombieSpawner.velocityX=-5;
zombieSpawner.lifetime=50;
}




}













































}