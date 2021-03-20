const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world;
var drops=[]
var thunderimg,thunder;
var maxdrops=100
var umbrella
var thunderCreatedFrame=0

function preload(){
    thunderimg=loadImage("1.png")
}

function setup(){
   var canvas = createCanvas(500,700)

   engine=Engine.create()
   world=engine.world

   umbrella=new Umbrella(200,500)

   for(var i =0 ; i<maxdrops ; i++){
        drops.push(new Drops(random(0,500),random(0,500)));
   }
    
}

function draw(){
    Engine.update(engine)
    background("black")

    if(frameCount%80===0){
        thunderCreatedFrame=frameCount
        thunder=createSprite(random(10,370),random(10,30))
        thunder.addImage(thunderimg)
    }

    if(thunderCreatedFrame+10===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display()

    for(var i = 0 ; i<maxdrops ; i++ ){
        drops[i].display()
        drops[i].update()
    }
    
    drawSprites();
}   

