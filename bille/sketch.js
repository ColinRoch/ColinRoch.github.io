var px = 0;
var py = 0;
var vx = 0;
var vy = 0;
var ax = 0;
var ay = 0;
var vMultiplier = 0.01;
function setup() {
 createCanvas(windowWidth,windowHeight);
}

function draw() {
 background(255);
 textSize(40);
 text("Rx: " + rotationX, 100, 100);
 text("Ry: " + rotationY, 100, 150);
 text("Rz: " + rotationZ, 100, 200);
 drawBille();
}

function drawBille(){
  fill(0,0,0);
  ellipse(px, py, 200);
  ax = rotationY * vMultiplier;
  ay = rotationX * vMultiplier;
  vx += ax;
  px += vx;
  px = vx;
  py = vy;
  
}

 