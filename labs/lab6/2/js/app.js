var myCircle = {
    radius: 50,
    xPos: 200,
    yPos: 150
}

function setup() {
    createCanvas(400,300);
}

function draw() {
    fill("rgb(255,255,0)");
circle(myCircle.xPos, myCircle.yPos, myCircle.radius);
myCircle.xPos += 1;
myCircle.yPos += 1;
    
}