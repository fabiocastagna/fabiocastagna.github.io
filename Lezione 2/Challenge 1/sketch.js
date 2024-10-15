let xsize = 400;
let ysize = 400;

function setup() {
  createCanvas(xsize, ysize);
}

function draw() {
  background("darkblue");
  
  // Disegno della luna
  fill("yellow");
  stroke("white");
  strokeWeight(5);
  circle(300, 75, 50);
  
  // Disegno della parte inferiore verde
  fill("green");
  stroke("darkgreen");
  strokeWeight(5);
  rect(0, 200, 400, 200);
  
  // Disegno delle casette
  let casaX = 50; 
  let casaY = 157;
  let casaSize = 40; 

  for (let i = 0; i < 5; i++) {
    // Disegno del quadrato della casa
    fill("white");
    stroke("black");
    strokeWeight(1);
    rect(casaX + i * 50, casaY, casaSize, casaSize);
    
    // Disegno del triangolo della casa
    fill("red");
    stroke("black");
    strokeWeight(1);
    triangle(casaX + i * 50, casaY, 
             casaX + i * 50 + casaSize / 2, casaY - casaSize / 2, 
             casaX + i * 50 + casaSize, casaY);
  }
}