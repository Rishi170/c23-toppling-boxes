  const Engine = Matter.Engine;
  const Bodies = Matter.Bodies;
  const World = Matter.World;
 
  var myWorld,myEngine;
var box1;
var box2;
var ground1;

 function setup() {
  createCanvas(400,400);
myEngine= Engine.create();

// my World is my engines's world
myWorld = myEngine.world;

box1= new Box(200,200,70,50);
box2=new Box(240,300,70,50);
ground1=new Ground();
}

function draw() {
  background("black"); 
  Engine.update(myEngine);
  console.log(box1)
 box1.display();
 box2.display();
  ground1.display();

}