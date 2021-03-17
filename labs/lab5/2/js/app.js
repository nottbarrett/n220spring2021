//set up all variables

let circleX = 50
let circleY = 50

var rectX = 100
var rectY = 200
var rectW = 200
var rectH = 50

let circSpeedX = 3
let circSpeedY = 3

//set up canvas

function setup (){
    createCanvas(400,300)

}

//draw

function draw (){
    background(0)
    noStroke()
    rect(rectX,rectY,rectW,rectH)

    fill("#ffffff")
    circle(circleX, circleY, 15)
    circleX += circSpeedX
    circleY += circSpeedY
 


    collideRect(circleX, circleY, rectX, rectY, rectW, rectH)

    var check =  collideRect(circleX, circleY, rectX, rectY, rectW, rectH)
    if (check == true){
        circSpeedY *= -1
    }
}

//collision function

function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {

    var colliding = false;

    if(circleX > rectX && circleX < rectX + rectW) {

        if(circleY > rectY && circleY < rectY + rectH) {

              return true;
              

            }

        }

   return false;


}
