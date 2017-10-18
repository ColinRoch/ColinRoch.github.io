var px, py, vx, vy, ax, ay, vMultiplier, bsize;
//var images = 0;
//var img = [img1];

function preload() {
  img1 = loadImage("image/colin1.jpg");
  img2 = loadImage("image/colin2.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  vx = 0;
  vy = 0;
  ax = 0;
  ay = 0;
  bsize = 200;
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
  text("test 1.3 ", 100, 250);
  drawBille();
}

function drawBille() {
  image (img1, px, py, bsize, bsize);
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
  if (px > windowWidth - bsize / 2) {
		px = windowWidth - bsize / 2;
		vx = -vx;
	}
	if (px < 0 + bsize / 2) {
		px = 0 + bsize / 2;
		vx = -vx;
	}
	if (py > windowHeight - bsize / 2) {
		py = windowHeight - bsize / 2;
		vy = -vy;
	}
	if (py < 0 + bsize / 2) {
		py = 0 + bsize / 2;
		vy = -vy;
	}
}