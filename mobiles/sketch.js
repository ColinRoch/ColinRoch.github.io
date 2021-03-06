document.ontouchmove = function(event){
 event.preventDefault();
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 rectMode(CENTER);
 stroke(0);
 noFill();
 strokeWeight(5);
}

function draw(){
fill(100, 200, 100);
	beginShape();
	for (var i = 0; i < touches.length; i++) {
		vertex(touches[i].x, touches[i].y);
	}
	endShape(CLOSE);
	fill(175, 255, 100);
	for (var j = 0; j < touches.length; j++) {
		rect(touches[j].x, touches[j].y, 150, 150);
	}
}

function touchStarted() {
  background(255);
 textSize(40);
 text(touches[0].x, 100, 100);
 text(touches[0].y, 200, 100);
}

