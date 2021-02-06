const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var bg,hero,ground, fly;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15;


function preload() {
  bg = loadImage("GamingBackground.png"); 
  
}

function setup() {
  createCanvas(3000, 1700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,700,1000,100);
  hero = new Hero(200,200,150);
  fly = new Fly(hero.body,{x:200,y:200});
  block1 = new Block(525,600,20,20,PI/7);
	block2 = new Block(525,500,20,20,PI/7);
	block3 = new Block(525,400,20,20,PI/7);
	block4 = new Block(545,300,20,20,PI/7);
	block5 = new Block(545,200,20,20,PI/7);
	block6 = new Block(545,100,20,20,PI/7);
	block7 = new Block(545,10,20,20,PI/10);
	block8 = new Block(545,3,20,20,PI/9);
	block9 = new Block(545,2,20,20,PI/5);
	block10 = new Block(545,1,20,20,PI/7);
  block11 = new Block(600,420,20,20,PI/2);
  block12 = new Block(600,320,20,20,PI/2);
  block13 = new Block(600,220,20,20,PI/2);
  block14 = new Block(600,120,20,20,PI/2);
  block15 = new Block(600,20,20,20,PI/2);
  monster = new Monster(400,400,100);
}

function draw() {
  background(bg);
  Engine.update(engine);
  fly.display();
  fill("white");
  ground.display();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();  
  block5.display();  
  block6.display();  
  block7.display();
  block8.display();  
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block13.display();
  hero.display();
  monster.display();
  
}


function mouseDragged(){
  Matter.Body.setPosition(hero.body,{ x: mouseX, y: mouseY });
}
function mouseReleased(){
  fly.detach();
}