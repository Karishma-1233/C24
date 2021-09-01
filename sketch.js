const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
ground=new Ground(600,390,1200,20)
    box1 = new Box(800,350,70,70);
    box2=new Box(980,350,70,70)
    box3 = new Box(800,250,70,70);
    box4=new Box(980,250,70,70)
    box5=new Box(890,150,70,70)
    pig1=new Pig(890,350)
    pig2=new Pig(890,250)
    bird=new Bird(150,100)
    log1=new Log(890,300,260,PI/2)
    log2=new Log(890,200,260,PI/2)
    log3=new Log(830,150,150,PI/7)
    log4=new Log(950,150,150,-PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display()
    box3.display();
    box4.display()
   ground.display()
   log4.display()
   pig1.display()
   bird.display()
   log3.display()
   log1.display()
   pig2.display()
   log2.display()
   box5.display()
}