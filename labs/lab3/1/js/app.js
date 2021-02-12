

function setup(){
    createCanvas(300,250)
}

function draw(){


    for(var bob = 1; bob < 27; bob++){

    if(bob%3 == 0){
        fill(200,0,255);
        circle(bob*10, 150, 5)
    } else {
        fill(0);
        circle(bob*10, 150, 5)
    }
    if(bob%5 == 0){
        fill(0,255,0);
        rect(bob*10-5, 145, 10, 10);
    } 
    if(bob%5 == 0 && bob%3 == 0){
        fill(0,0,255);
        rect(bob*10-5, 145, 10, 10);
    }
    }

}