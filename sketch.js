const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paperball,line2,line1,line3;

function setup() 
{
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(550,475,1500,10);
  paperball = new Paper(50,460,20); 
  line2 = new Dustbin(500,425,20,90);	
  line1 = new Dustbin(600,460,220,17);
  line3 = new Dustbin(700,425,20,90);

}

function draw() 
{
  Engine.update(engine);	
  rectMode(CENTER);
  background("maroon");

  ground.display();
  paperball.display();
  line2.display();
  line1.display();
  line3.display();

  drawSprites();
}

function keyPressed()
{
  if(keyCode == UP_ARROW){
	Matter.Body.applyForce(paperball.body,paperball.body.position,{x:56,y:-55});
  }
}