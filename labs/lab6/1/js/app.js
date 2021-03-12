var myDisplay = {
    width: 100,
    height: 100,
    color: "rgb(255, 255, 0)",
    xPos: 100,
    yPos: 50


}

function setup() {
    createCanvas(400,300);
}

function draw() {
    
fill(myDisplay.color);
rect(myDisplay.xPos, myDisplay.yPos, myDisplay.width, myDisplay.height);

    
}