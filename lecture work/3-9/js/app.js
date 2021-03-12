/* let helmet = {
    height: 18,
    color: "rgb(255,0,0)",
    weight: 1,
    mandalorian: true
}

console.log( helmet.height );
console.log( helmet.color );
console.log( helmet.weight );
console.log( helmet.mandalorian );

console.log("Start weight: " + helmet.weight);  

helmet.weight -= 1;

console.log("Current weight: " + helmet.weight); */



var myCircle = {
    r:15,
    x:20,
    y:30,
    color: [156, 0, 250],
    update: function () {
        fill(this.color);
        circle(this.x, this.y, this.r);
        this.x += 2;
    }
}


function setup() {
    createCanvas(400,300);
}

function draw() {
    


    myCircle.update();
    
}


