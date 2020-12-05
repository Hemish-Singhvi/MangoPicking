const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11;
var boy1, stone1, sling, tree1, ground;
var world, engine;

function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;
  Engine.run(engine);
  ground = createSprite(600, 600, 1200, 10);
	m1 = new mango(700, 270, 10, 15);
	m2 = new mango(800, 270, 10, 15);
	m3 = new mango(900, 270, 10, 15);
	m4 = new mango(1000, 270, 10, 15);
	m5 = new mango(725, 200, 10, 15);
	m6 = new mango(825, 200, 10, 15);
	m7 = new mango(925, 200, 10, 15);
	m8 = new mango(1025, 200, 10, 15);
	m9 = new mango(950, 130, 10, 15);
	m10 = new mango(800, 130, 10, 15);
	m11 = new mango(1100, 270, 10, 15);
	tree1 = new Tree(900, 350);
	boy1 = new boy(200, 565);
	stone1 = new stone(150, 500);
	sling = new Throw(stone1.body, {x:150, y: 500})
}


function draw() {
  background(200);
  Engine.update(engine);
  tree1.dislay();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  m10.display();
  m11.display();
  boy1.dislay();
  stone1.display();
  sling.dispay();
  detectCollision(m1, stone1);
  detectCollision(m2, stone1);
  detectCollision(m3, stone1);
  detectCollision(m4, stone1);
  detectCollision(m5, stone1);
  detectCollision(m6, stone1);
  detectCollision(m7, stone1);
  detectCollision(m8, stone1);
  detectCollision(m9, stone1);
  detectCollision(m10, stone1);
  detectCollision(m11, stone1);
  drawSprites();
}
function mouseDragged(){
	Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
    
}

function detectCollision(mango, stone){
  mangobodyposition = mango.body.position;
  stonebodyposition = stone.body.position;
  var distance = dist(stonebodyposition.x, stonebodyposition.y, mangobodyposition.x, mangobodyposition.y);
  if (distance <= mango.width+stone.radius){
    Matter.Body.setStatic(mango.body, false);
  }
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
      Matter.Body.setPosition(stone1.body, {x: 150 , y: 500});
    	sling.attach(stone1.body);
    }
}
