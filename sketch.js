
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var ground,tree,boy,stone;
var launcher; 
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	mango1 = new Mango(940,430);
	mango2 = new Mango(900,340);
	mango3 = new Mango(1040,310);
	mango4 = new Mango(930,300);
	mango5 = new Mango(1010,420);
	mango6 = new Mango();
	mango7 = new Mango();
	mango8 = new Mango();
	mango9 = new Mango();
	mango10 = new Mango();
	ground = new Ground(600,660,1200,20);
	boy = new Boy();
	stone = new Stone();
	tree = new Tree();
	launcher = new Launcher(stone.body,{x:110,y:520})
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  ground.display();
  boy.display();
  stone.display();
  launcher.display();
  mouseDragged();
  mouseReleased();
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
 }

 function mouseReleased(){
	launcher.fly();
 }


