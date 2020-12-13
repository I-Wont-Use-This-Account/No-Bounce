var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,centreBody;
var centreSprite,leftSprite,rightSprite;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 675);
	rectMode(CENTER);

	centreSprite=createSprite(width/2, height-25, 200, 20);
	centreSprite.shapeColor=("red");

	leftSprite=createSprite(centreSprite.x-100, height-25.5,20,100);
	leftSprite.shapeColor=("red");

	rightSprite=createSprite(centreSprite.x+100, height-25.5,20,100);
	rightSprite.shapeColor=("red");

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height, width, 25.5);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	centreBody = Bodies.rectangle(width/2, 635 ,width,20,{isStatic:true});
	World.add(world, centreBody);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}

function draw() {
	rectMode(CENTER);

	background(0);

	packageSprite.x= packageBody.position.x; 
	packageSprite.y= packageBody.position.y; 

  	drawSprites();
 
}

function keyPressed() {
  	if (keyCode === DOWN_ARROW) {
		// Look at the hints in the document and understand how to make the package body fall only three times or less

		Matter.Body.setStatic(packageBody,false);

  	}
}