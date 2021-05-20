const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground,box2;
var pig1,pig2,log1,log2,log3,log4,pig3,pig4,box3,box4,box5;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground= new Ground(600,height,1200,20);

    box1 = new Box(700,340,70,70);
    box2 = new Box(900,340,70,70);
    box3 = new Box(700,300,70,70);
    box4 = new Box(900,300,70,70);
    box5 = new Box(800,240,70,70);


    pig1 = new Pig(800,340);
    pig2 = new Pig(800,300);

    
    log1 = new Log(800,320,300,PI/2);
    log2 = new Log(800,280,300,PI/2);
    log3 = new Log(760,150,150,PI/6);
    log4 = new Log(840,150,150,-PI/6);

    bird = new Bird(200, 200)

}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
   
}