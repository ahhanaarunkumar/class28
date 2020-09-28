
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,tree;
var mango1,mango2,mango3;
var tree1;

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);

	tree1 = new Tree(1000,300,50,150);

	mango1 = new mango(100,300,10,5);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.display();
  tree1.display();
  mango1.display();
  
  drawSprites();
 
}



