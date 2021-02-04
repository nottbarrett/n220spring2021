let xPos = 0;
let yPos = 100;

let xSpeed = 5;
let ySpeed = 5;

function setup(){
    createCanvas(800,600)
}

function draw(){

background(0)
circle(xPos,yPos,30)

xPos = xPos + xSpeed;
yPos = yPos + ySpeed;

if( yPos == height || yPos == 0 ){
    ySpeed = -ySpeed;
}

if ( xPos == width || xPos == 0 ){
    xSpeed = -xSpeed;
}

}

