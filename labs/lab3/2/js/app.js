
function setup(){
    createCanvas(300, 300);
}

function draw(){
    background(255);
    fill(255, 0, 0);
    stroke(255);
  
    for (let row = 0; row < 4; row++){
      
        for (let column = 0; column <= row ; column ++){
           rect(column * 50, row * 50, 50, 50);
        }
    }
}