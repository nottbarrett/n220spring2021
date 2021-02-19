
let points = []; 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  let point = {
    x: mouseX,
    y: mouseY
  };
  points.push(point); 

  if (points.length > 10) {
    points.splice(0,1);
  }
  

  for (let i = 0; i < points.length; i++) {

    noStroke();
    fill(150);
    ellipse(points[i].x,points[i].y,20,20);
  }
}