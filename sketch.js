var c;
 
function setup() {
 	createCanvas(600, 600);
 	c = color(0,220,10);
}
 
function draw(){
	// display instructions
	noStroke();
	fill(200);
	rect(0, 0, width, 25);
	fill(0);
	text("Press the 'A' 'J' & 'S' key to change the color", 10, 15);
}
 
function mouseDragged() { 
	strokeWeight(10);
	stroke(c);
	line(mouseX, mouseY, pmouseX, pmouseY);
}
 
function keyPressed(){
	if(key == 'j' || key == 'J')
	{
		c = color('red');
  }
  if(key == 's' || key == 'S' ){
    c =color('blue');
  }
  if(key == 'a'|| key == 'A'){
	  c =color('magenta')
  }

}