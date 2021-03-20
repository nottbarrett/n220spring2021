//set array for number of circles

let circNum = []

//set up canvas

function setup (){
    createCanvas(400,300)
}

//set up draw function

function draw (){
background(0)

//set up our circles using objects

var myCircles = {
    x: mouseX,
    y: mouseY,

    //move circles if mouse is pressed and create a floor

    update: function (){
        if (mouseIsPressed == true && myCircles.y <= 300){
            myCircles.y = mouseY ++
        }
    }
}
    circNum.push(myCircles); 



// limit circle numbers to 10

    if (circNum.length > 10) {
      circNum.splice(0,1);
    }
    
//for loop to create our circles

    for (let i = 0; i < circNum.length; i++) {
      noStroke();

      //set color brightness to be based on mouseX
      fill(0 + 25*i);
    
      // set circle trail and sizes
      circle(circNum[i].x,circNum[i].y,i*3);
    
    }
      //make circles move downward if mouse is pressed


    myCircles.update()

}