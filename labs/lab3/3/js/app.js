function setup(){
    createCanvas(300,300);
}

function draw(){
    background(200);

    noFill();

    for( var i = 0; i < 31; i++ ){

        stroke(0);

        circle(150,150,i * 5);
    }
}