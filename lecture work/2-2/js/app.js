//While loop syntax

/*
let i = 0;

while(i < 5)
{
    console.log(i);
    i++;
}
console.log("Afterwards: " + i);
*/

/*

//For loop syntax
for( var y = 0; y < 5; y++ ) {
    console.log(y);

}
console.log( "Afterwards: " + y);

*/

function setup(){
    createCanvas(400,300);
}

function draw(){
    background(100);

    noFill();

    for( var i = 0; i < 15; i++ ){

        var color = Math.random();
        console.log(color);

        stroke(255 - (i*15));

        circle(200,150,i * 10);
    }
    console.log("Afterwards: " + i);
}