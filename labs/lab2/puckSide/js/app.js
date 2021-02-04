function setup(){
    createCanvas(400,300)
}

function draw() {

    //2. Puck Side

    background(255,255,255)

    if(mouseX <= 200){
        fill (8, 144, 255)
    } 

    if (mouseX > 200){
        fill(255, 8, 12)
    }

    circle(mouseX,mouseY,30)
}