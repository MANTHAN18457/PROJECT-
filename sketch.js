const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;




var bg1,bg2,bg3,scene
var snow1,snow2,snow 
var boy1
var footstep1

function preload() {
  bg1=loadImage("snow1.jpg")
  bg2=loadImage("snow2.jpg")
  bg3=loadImage("snow3.jpg")
  snow1=loadImage("snow4.webp")
  snow2=loadImage("snow5.webp")
  boy1=loadImage("boy.png")
  //song=loadSound("Winter-Forest-Sounds.wav")

}

function setup() {
  createCanvas(1366,625);
  
  engine = Engine.create();
    world = engine.world;

 
}

function draw() {

//-------------------------::

  background(0);
  Engine.update(engine)

//-------------------------::
                           
  image(bg3,0,0,1366,625)
  

  image(boy1,500,300,300,300)
if(frameCount%30===0){
  
}
  snow = new Snow(random(0,1300),0,50,50)
  
  
 //------------------------:: 

//song.play()

//-------------------------::

  

  
snow.display()
   
  //drawSprites();
}

