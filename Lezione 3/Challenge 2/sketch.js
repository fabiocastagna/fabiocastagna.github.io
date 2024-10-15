let xsize = 400;
let ysize = 400;

let moonX = 300;
let moonY = 75;
let moonSize = 50;
let sunX = -50; // Inizialmente fuori dalla scena
let sunY = 75;
let sunSize = 50;
let dayProgress = 0; // Valore tra 0 e 1 che rappresenta il progresso tra notte e giorno

function setup() {
  createCanvas(xsize, ysize);
}

function draw() {
  // Calcolo del colore del cielo basato su dayProgress
  let r = lerp(20, 135, dayProgress); // Da notte a giorno (darkblue a lightblue)
  let g = lerp(24, 206, dayProgress);
  let b = lerp(82, 235, dayProgress);
  background(r, g, b);
  
  // Disegno della luna
  if (moonX > -moonSize / 2) { // Continua a disegnare la luna finché non esce completamente
    fill("yellow");
    stroke("white");
    strokeWeight(5);
    circle(moonX, moonY, moonSize);
  }

  // Disegno del sole
  if (moonX <= -moonSize / 2) { // Sole entra solo quando la luna è fuori
    fill("yellow");
    stroke("white");
    strokeWeight(0);
    circle(sunX, sunY, sunSize);
  }

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

  // Movimento della luna
  if (moonX > -moonSize / 2) {
    moonX -= 3; // La luna tramonta più velocemente
  }

  // Movimento del sole
  if (moonX <= -moonSize / 2 && sunX < (width * 2 / 3)) {
    sunX += 3; // Il sole si muove più velocemente fino ai 2/3
  }

  // Aggiornamento di dayProgress in base alla posizione del sole
  if (sunX > 100 && sunX <= (width * 2 / 3)) {
    dayProgress = constrain(map(sunX, 100, width * 2 / 3, 0, 1), 0, 1);
  }

  // Resetta la posizione del sole e della luna per un nuovo ciclo
  if (sunX > width + sunSize / 2) {
    sunX = -sunSize / 2; // Riporta il sole indietro
    moonX = width + moonSize / 2; // Riporta la luna indietro
  }
}
