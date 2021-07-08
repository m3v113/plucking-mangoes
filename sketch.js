
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var tree, stone,ground, launcher;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var world,boy;
var slingshot;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1015,40,30);
	mango2=new Mango(1132,80,35);
	mango3=new Mango(1080,180,40);
	mango4=new Mango(1270,190,35);
	mango5=new Mango(1160,210,45);
	mango6=new Mango(1020,270,40);
	mango7=new Mango(950,155,47);
	mango8=new Mango(880,240,37);
	mango9=new Mango(1190,155,55);
	mango10=new Mango(1010,130,37);

	tree=new Tree(1050,580);
	ground=new Ground(width/2,600,width,20);
	stone = new Stone(250, 430, 50);

	slingshot = new Slingshot(stone.body, {x: 250, y: 430});

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1300,
			height: 600,
			wireframes: false
		}
	})
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  fill("black");
  textSize(20);
  text("Press SPACE to restart.", 20, 30);
  image(boy ,200,340,200,300);
  
  console.log(mouseX, mouseY);

  detectcollision(stone, mango1);
  detectcollision(stone, mango2);
  detectcollision(stone, mango3);
  detectcollision(stone, mango4);
  detectcollision(stone, mango5);
  detectcollision(stone, mango6);
  detectcollision(stone, mango7);
  detectcollision(stone, mango8);
  detectcollision(stone, mango9);
  detectcollision(stone, mango10);

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
  stone.display();

  slingshot.display();

  ground.display();
}

function mouseDragged() {
    Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
    slingshot.fly();
}

function keyPressed() {
	if (keyCode === 32) {
		Body.setPosition(stone.body, {x: 250, y:430});
		//only works twice?
		// Body.setPosition(mango1.body, {x:1015, y:40});
		// Body.setPosition(mango2.body, {x:1132, y:80});
		// Body.setPosition(mango3.body, {x:1080, y:180});
		// Body.setPosition(mango4.body, {x:1270, y:190});
		// Body.setPosition(mango5.body, {x:1160, y:210});
		// Body.setPosition(mango6.body, {x:1020, y:270});
		// Body.setPosition(mango7.body, {x:950, y:155});
		// Body.setPosition(mango8.body, {x:880, y:240});
		// Body.setPosition(mango9.body, {x:1190, y:155});
		// Body.setPosition(mango10.body, {x:1010, y:130});
		
		// Body.setStatic(mango1.body,true);
		// Body.setStatic(mango2.body,true);
		// Body.setStatic(mango3.body,true);
		// Body.setStatic(mango4.body,true);
		// Body.setStatic(mango5.body,true);
		// Body.setStatic(mango6.body,true);
		// Body.setStatic(mango7.body,true);
		// Body.setStatic(mango8.body,true);
		// Body.setStatic(mango9.body,true);
		// Body.setStatic(mango10.body,true);
		
		slingshot.attach(stone.body);
	}
}

function detectcollision(stone, mango) {
	mangobodypos = mango.body.position;
	stonebodypos = stone.body.position;

	var distance = dist(stonebodypos.x, stonebodypos.y, mangobodypos.x, mangobodypos.y);
	if (distance<=mango.r+stone.r){
		Body.setStatic(mango.body,false);
	}
}
