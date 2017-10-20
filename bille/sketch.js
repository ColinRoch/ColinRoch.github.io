var px, py, vx, vy, ax, ay, vMultiplier, bsizex, bsizey, value, pic;

function preload() {
  img1 = loadImage("image/colin3.png");
  img2 = loadImage("image/colin4.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  vx = 0;
  vy = 0;
  ax = 0;
  ay = 0;
  bsizex = 200 / 2;
  bsizey = 175 / 2;
  vMultiplier = 0.01;
  px = windowWidth / 2;
  py = windowHeight / 2;
  value = 250;
  pic = img1;
  imageMode(CENTER);
}

function draw() {
  background(value);
  textSize(15);
  text("Version Finale", 5, 15);
  text("Rx: " + floor(rotationX), 5, 30);
  text("Ry: " + floor(rotationY), 5, 45);
  drawBille();
}

function drawBille() {
  ax = rotationY * vMultiplier;
  ay = rotationX * vMultiplier;
  vx += ax;
  vy += ay
  px += vx;
  py += vy;
  image(pic, px, py, bsizey, bsizex);

  if (px > windowWidth - bsizex / 2) {
    px = windowWidth - bsizex / 2;
    vx = -vx * 0.3;
    pic = img1;
  } 
  if (px < 0 + bsizex / 2) {
    px = 0 + bsizex / 2;
    vx = -vx * 0.3;
    pic = img1;
  }
  if (py > windowHeight - bsizex / 2) {
    py = windowHeight - bsizex / 2;
    vy = -vy * 0.3;
    pic = img2;
  }
  if (py < 0 + bsizex / 2) {
    py = 0 + bsizex / 2;
    vy = -vy * 0.3;
    pic = img2;
  }
}

function deviceShaken() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}