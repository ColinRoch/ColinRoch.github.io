document.ontouchmove = function(event) {
	event.preventDefault();
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	stroke(0);
	strokeWeight(5);

}

function draw() {
	background(255);
	beginShape();
	for (var i = 0; i < touches.length; i++) {
		fill(0, 125, 255);
		vertex(touches[i].x, touches[i].y);
	}
	endShape(CLOSE);
	for (i = 0; i < touches.length; i++) {
		strokeWeight(1);
		fill(0, 0, 255);
		ellipse(touches[i].x, touches[i].y, 50, 50);
		strokeWeight(1);
		fill(0);
		textSize(20);
		text(floor(touches[i].x) + "," + floor(touches[i].y), touches[i].x + 50, touches[i].y);

	}
}


