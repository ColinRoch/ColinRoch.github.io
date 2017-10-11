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
    text(touches[0].x, 100, 100);
    text(touches[0].y, 300, 100);
    text(touches[0].x, 600, 100);
    text(touches[0].y, 900, 100);
    text(touches[0].x, 1200, 100);
    text(touches[0].y, 1500, 100);
	}
	endShape(CLOSE);
	fill(0,0,255);
	for (var j = 0; j < touches.length; j++) {
		ellipse(touches[j].x, touches[j].y, 150, 150);
	}
}


