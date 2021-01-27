var hr;
var mn;
var sc;
var hangle;
var mangle;
var sangle;
function setup() {
  createCanvas(1600,800);
   //set angle in Degrees
   angleMode(DEGREES);   
}

function draw() {
  background(0);  
   
  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
 
  hrAngle = map(hr%12,0,11,0,360);
 
  translate(800,400);
  push();
  rotate(scAngle-90);
  stroke("cyan");
  strokeWeight(7);
  line(0,0,200,0);
  pop();

  push();
  rotate(mnAngle - 90);
  stroke("pink");
  strokeWeight(7);
  line(0,0,150,0);
  pop();
  
  push();
  rotate(hrAngle - 90);
  stroke("yellow");
  strokeWeight(9);
  line(0,0,100,0);
  pop();

  rotate(-90);
  stroke("cyan");
  strokeWeight(7);
  noFill();
  arc(0,0,500,500,0,scAngle);

  stroke("pink");
  strokeWeight(7);
  noFill();
  arc(0,0,530,530,0,mnAngle);

  stroke("yellow");
  strokeWeight(9);
  noFill();
  arc(0,0,570,570,0,hrAngle);
}