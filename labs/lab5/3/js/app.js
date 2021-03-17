//set up variables
let xPos = 50
let yPos = 50

let circSpeedX = 2
let circSpeedY = 3


// set up canvas

function setup (){
    createCanvas(400,300)
}

//draw

function draw(){
    background(255)

    fill("#000000")
    circle(xPos, yPos, 25 )

//set ball in motion

    xPos = xPos + circSpeedX 
    yPos = yPos + circSpeedY

//set bounce physics

    gravity()

}

//simulate decrease in momentum

function gravity (){
    for (var i = 1; i < 6; i++){
        if (yPos >= 300){
            circSpeedY *= -1
        }
        circSpeedY = circSpeedY + i

    }

}