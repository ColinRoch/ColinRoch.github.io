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
background(255);
fill(51, 153, 255);
	beginShape();
	for (var i = 0; i < touches.length; i++) {
		vertex(touches[i].x, touches[i].y);
		textSize(40);
    text(touches[i].x, touches[i].x, touches[i].y);
    text(touches[i].y, touches[i].x, touches[i].y);

	}
	endShape(CLOSE);
	fill(0,0,255);
	for (var j = 0; j < touches.length; j++) {
		ellipse(touches[j].x, touches[j].y, 150, 150);
	}
}


