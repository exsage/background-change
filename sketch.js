
var r = 0;
var g = 50;
var b=255;


function setup(){
  createCanvas(1200,400);

  
}


function draw(){
background(r,g,b);
fill("red");  
ellipse(mouseX, mouseY, 50, 60 );

r = map(mouseX, 0, 500, 40, 180);
g = map(mouseX, 500, 1000, 50, 210);
b = map(mouseX, 1000, 1200, 120, 250);

}