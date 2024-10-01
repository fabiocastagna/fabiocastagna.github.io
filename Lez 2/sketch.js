function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("darkblue");
  // vogliamo disegnare la luna //
  fill("yellow");
  stroke("white");
  strokeWeight("10");
  circle(300, 75, 100);
  // prima della forma desiderata
  // cambiamo i parametri di fill e stroke
  fill("green");
  stroke("darkgreen");
  strokeWeight(5);
  rect(0, 200, 400, 200);
  fill("white");
  stroke(0);
  strokeWeight(2);
  text("C'era una volta...", 200, 250);
}