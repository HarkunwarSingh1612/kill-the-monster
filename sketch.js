const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4, box5, box6, box7, box8, box9, box10, box11, row1, row2, row3, row4, row5, row6;
var hero,monster,rope,ground;
var row7, row8, row9, row10, row11, row12, row13, row14;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(900, 100, 70, 70);
  box6 = new Box(600, 100, 70, 70);
  box7 = new Box(600, 100, 70, 70);
  box8 = new Box(600, 100, 70, 70);
  box9 = new Box(600, 100, 70, 70);
  box10 = new Box(600, 100, 70, 70);
  box11= new Box(600, 100, 70, 70);
  row1= new Box(700, 100, 70, 70);
  row2= new Box(700, 100, 70, 70);
  row3= new Box(700, 100, 70, 70);
  row4= new Box(700, 100, 70, 70);
  row5= new Box(700, 100, 70, 70);
  row6= new Box(700, 100, 70, 70);
  row7= new Box(800, 100, 70, 70);
  row8= new Box(800, 100, 70, 70);
  row9= new Box(800, 100, 70, 70);
  row10= new Box(800, 100, 70, 70);
  row11= new Box(800, 100, 70, 70);
  row12= new Box(800, 100, 70, 70);
  row13= new Box(800, 100, 70, 70);
  row14= new Box(800, 100, 70, 70);
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display(); 
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display(); 
  box11.display();
  row1.display();
  row2.display();
  row3.display();
  row4.display();
  row5.display();
  row6.display();
  row7.display();
  row8.display();
  row9.display();
  row10.display();
  row11.display();
  row12.display();
  row13.display();
  row14.display();
  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged(){
  
      Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
  
}