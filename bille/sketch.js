var px, py, vx, vy, ax, ay, vMultiplier, bsizex, bsizey;

function preload() {
  img1 = loadImage("image/colin3.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  vx = 0;
  vy = 0;
  ax = 0;
  ay = 0;
  bsizex = 200;
  bsizey = 175;
  vMultiplier = 0.01;
  px = windowWidth/2;
  py = windowHeight/2;
}

function draw() {
  background(255);
  textSize(40);
  text("Rx: " + rotationX, 100, 100);
  text("Ry: " + rotationY, 100, 150);
  text("Rz: " + rotationZ, 100, 200);
  text("test 1.5 ", 100, 250);
  drawBille();
}

function drawBille() {
  //fill(50, 50, 50);
  ax = rotationY * vMultiplier;
  ay = rotationX * vMultiplier;
  vx += ax;
  vy += ay
  px += vx;
  py += vy;
  //ellipse(px, py, bsize, bsize);
  //fill(0,0,0);
  //ellipse(px + 5, py - 5, 190);
  //fill(80,80,80);
  //ellipse(px + 27, py - 27, 120);
  //fill(255,255,255);
  //ellipse(px + 45, py - 45, 50);
    image (img1, px, py, bsizey, bsizex);

  if (px > windowWidth - bsizex / 2) {
		px = windowWidth - bsizex / 2;
		vx = -vx;
	}
	if (px < 0 + bsizex / 2) {
		px = 0 + bsizex / 2;
		vx = -vx;
	}
	if (py > windowHeight - bsizex / 2) {
		py = windowHeight - bsizex / 2;
		vy = -vy;
	}
	if (py < 0 + bsizex / 2) {
		py = 0 + bsizex / 2;
		vy = -vy;
	}
}