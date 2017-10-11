document.ontouchmove = function(event) {
	event.preventDefault();
}

var dummy = [];
var dummyMax;

function setup() {
	createCanvas(windowWidth, windowHeight);

	dummyMax = random(4, 8);

	for (var i = 0; i < dummyMax; i++) {
		dummy[i] = new Object;
		dummy[i].x = random(0, windowWidth);
		dummy[i].y = random(0, windowHeight);
	}

	rectMode(CENTER);
	stroke(0);
	strokeWeight(5);

}

function draw() {
	background(255);

	noFill();
	beginShape();
	for (i = 0; i < dummy.length; i++) {
		stroke(0);
		strokeWeight(5);
		fill(255);
		ellipse(dummy[i].x, dummy[i].y, 100, 100);
		vertex(dummy[i].x, dummy[i].y);
		strokeWeight(1);
		fill(255);
		fill(0);
		textSize(20);
		text("X=" + floor(dummy[i].x) + ",Y=" + floor(dummy[i].y), dummy[i].x + 100, dummy[i].y);
		ellipse(dummy[i].x, dummy[i].y, 100, 100);
	}
	endShape(CLOSE);

	beginShape();
	for (var i = 0; i < touches.length; i++) {
		fill(0, 0, 255);
		vertex(touches[i].x, touches[i].y);
	}
	endShape(CLOSE);
	for (i = 0; i < touches.length; i++) {
		strokeWeight(5);
		fill(0, 125, 255);
		ellipse(touches[i].x, touches[i].y, 50, 50);
		strokeWeight(1);
		fill(0);
		textSize(20);
		text("X=" + floor(touches[i].x) + ",Y=" + floor(touches[i].y), touches[i].x + 100, touches[i].y);

	}
}