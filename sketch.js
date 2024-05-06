
let xbolinha = 100;
let ybolinha = 200;
let diametro = 20;
let raio = diametro / 2;

let xraqueteoponente = 585;
let yraqueteoponente = 150;

let velocidadexbolinha = 6;
let velocidadeybolinha = 6;

let xraquete = 5;
let yraquete = 150;
let raquetecomprimento = 10;
let raquetealtura = 90;

let meuspontos = 0;
let pontosdooponente = 0;

let raquetada;
let ponto;
let trilha;

let colidiu = false;

function setup() {
  createCanvas(600, 400);
    trilha.loop();
}

function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete(xraquete, yraquete);
    movimentaMinhaRaquete();
    verificaColisaoRaquete(xraquete, yraquete);
    verificaColisaoRaquete(xraqueteoponente, yraqueteoponente);
    mostraRaquete(xraqueteoponente, yraqueteoponente);
    movimentaRaqueteOponente();
    incluiPlacar() 
    marcaPonto();
}
function mostraBolinha() {
  circle(xbolinha, ybolinha, diametro);
}

function movimentaBolinha() {
  xbolinha += velocidadexbolinha;
  ybolinha += velocidadeybolinha;
}

function verificaColisaoBorda() {
  if (xbolinha + raio > width || xbolinha - raio < 0) {
    velocidadexbolinha *= -1;
  }
  if (ybolinha + raio > height || ybolinha - raio < 0) {
    velocidadeybolinha *= -1;
  }
}

function mostraRaquete(x,y) {
    rect(x, y, raquetecomprimento, raquetealtura);
}

function movimentaMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yraquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yraquete += 10;
  }
}

function verificaColisaoRaquete() {
  if (xbolinha - raio < xraquete + raquetecomprimento && ybolinha - raio < yraquete + raquetealtura && ybolinha + raio > yraquete) {
    velocidadexbolinha *= -1;
     raquetada.play();
  }
}

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raquetecomprimento, raquetealtura, xbolinha, ybolinha, raio);
    if (colidiu){
        velocidadexbolinha *= -1;
        raquetada.play();
  }
}

function movimentaRaqueteOponente(){
    if (keyIsDown(87)){
        yraqueteoponente -= 10;
    }
    if (keyIsDown(83)){
        yraqueteoponente += 10;
    }
}


function incluiPlacar(){
  stroke(255)
    textAlign(CENTER);
    textSize(16);
    fill(color(255,140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meuspontos, 170, 26);
    fill(color(255,140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosdooponente, 470, 26);



}


function marcaPonto() {
    if (xbolinha > 590) {
        meuspontos += 1;
        ponto.play();
    }
    if (xbolinha < 10) {
        pontosdooponente += 1;
        ponto.play();
    }
}


function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

