/* let drop1 = [5]
let drop2 = [5]
let drop3 = [5]
let drop4 = [5]
let drop5 = [5]
let drop6 = [5]
let drop7 = [5]
let circlePos = 0

function setup () {
    createCanvas (400,300)
}

function draw () {
    background(255);
    
    for( var i = 0; i < 100 ; i++ ) {
        noStroke()
        fill("#9dd9fc")
        circle(200,drop1[i], 20)
        drop1[i] = drop1[i] + 5;

        if(drop1[i] > 50){
            noStroke()
            fill("#9dd9fc")
            circle(200,drop2[i], 20)
            drop2[i] = drop2[i] + 5;
        }
        
        if(drop2[i] > 50){
            noStroke()
            fill("#9dd9fc")
            circle(200,drop3[i], 20)
            drop3[i] = drop3[i] + 5;
        }
        
        if(drop3[i] > 50){
            noStroke()
            fill("#9dd9fc")
            circle(200,drop4[i], 20)
            drop4[i] = drop4[i] + 5;
        }

        if(drop4[i] > 50){
            noStroke()
            fill("#9dd9fc")
            circle(200,drop5[i], 20)
            drop5[i] = drop5[i] + 5;
        }

        if(drop5[i] > 50){
            noStroke()
            fill("#9dd9fc")
            circle(200,drop6[i], 20)
            drop6[i] = drop6[i] + 5;
        }
        
        if(drop6[i] > 50){
            noStroke()
            fill("#9dd9fc")
            circle(200,drop7[i], 20)
            drop7[i] = drop7[i] + 5;
        }

        if(drop7[i] > 50){
            circle(200,drop1[i], 20)
            drop1[i] = drop1[i] + 5;
        }

    }
} */

let yPos = [0, 50, 100, 150, 200, 250]

function setup() {
    createCanvas(400,300)
}

function draw() {
    background(255)

for( i = 0; i < 6; i++){
    fill("#9dd9fc")
    circle(200, yPos[i], 20)
    yPos[i] = yPos[i] + 5

    if(yPos[i] > 300){
        yPos[i] = 0;
    }

    if (frameCount%10){
        circle(200, yPos[i], 20 )
        yPos[i] = yPos[i] + 5;
    }
}
}