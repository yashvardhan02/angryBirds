const Engine = Matter.Engine;
const World = Matter.World ;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg
var bird1
var engine,world,box,box2,box3,box4,box5
var ground
var boxoptions
var pig1,pig2
var log1,log2,log3,log4
var stick;
var chain;

function preload(){
  backgroundImg = loadImage("sprites/bg.png")


}



function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world= engine.world;


  
  var groundoptions = {
    isStatic:true
  }
  ground = Bodies.rectangle(600,800,1200,50,groundoptions);
  pig1 = new Pig(800,700,50,50);
  box = new Box(700,700,50,50);
  box2 =new Box(900,700,50,50);
  log1= new Log(800,600,20,250,PI/2);

  

  pig2 = new Pig(800,500,50,50);
  box3 = new Box(700,500,50,50);
  box4 =new Box(900,500,50,50);
  log2 = new Log(800,400,20,250,PI/2);

  log3 = new Log(750,300,20,100,PI/8);
  log4 = new Log(850,300,20,100,-PI/8);
  box5 = new Box(800,400,60,60);

  bird1 = new Bird(300,500,50,50)

  stick = new Log(200,200,20,150,PI/2)
  chain = new Chainclass(bird1.body,stick.body)

World.add(world,ground);
}

function draw() {
  Engine.update(engine);
  background(backgroundImg);  
  //ellipseMode(RADIUS);
  rectMode(CENTER);
  log1.display();
  pig1.display();
 box.display();
 box2.display();

 box5.display();

 log3.display();
 log4.display();

 bird1.display();

 stick.display();
 chain.display();

 log2.display();
  pig2.display();
 box3.display();
 box4.display();
 rect(ground.position.x,ground.position.y,1200,50);
}