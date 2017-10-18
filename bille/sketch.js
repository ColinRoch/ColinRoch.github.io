var px, py, vx, vy, ax, ay, vMultiplier;

function setup() {
  createCanvas(windowWidth, windowHeight);
  vx = 0;
  vy = 0;
  ax = 0;
  ay = 0;
  vMultiplier = 0.02;
  px = windowWidth/2;
  py = windowHeight/2;
}

function draw() {
  background(255);
  textSize(40);
  text("Rx: " + rotationX, 100, 100);
  text("Ry: " + rotationY, 100, 150);
  text("Rz: " + rotationZ, 100, 200);
  drawBille();
}

function drawBille() {
  fill(50, 50, 50);
  ax = rotationY * vMultiplier;
  ay = rotationX * vMultiplier;
  vx += ax;
  vy += ay
  px += vx;
  py += vy;
  ellipse(px, py, 200);
  fill(0,0,0);
  ellipse(px + 5, py - 5, 190);
  fill(80,80,80);
  ellipse(px + 27, py - 27, 120);
  fill(255,255,255);
  ellipse(px + 45, py - 45, 50);
}