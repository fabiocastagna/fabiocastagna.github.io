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
  strokeWeight(10);
  circle(300, 75, 100);
  
  // Disegno della parte inferiore verde
  fill("green");
  stroke("darkgreen");
  strokeWeight(5);
  rect(0, 200, 400, 200);
  
  // Disegno delle stelle
  strokeWeight(30);
  stroke("yellow");

  let xStars_prim = 10;
  let yStars_prim = 20;

  point(xStars_prim, yStars_prim);

  let passo = 1;

  for(let i = 0; i < 50; i = i + passo) {
    strokeWeight(i * 3);
    if(i % 2 == 0) {
      stroke("yellow");
    } else {
      stroke("pink");
    }
    strokeWeight(i * 3);
    point(xStars_prim * i, yStars_prim);
  }

  // Testo aggiunto
  fill("white");
  stroke(0);
  strokeWeight(2);
  text("C'era una volta...", 200, 250);
}
