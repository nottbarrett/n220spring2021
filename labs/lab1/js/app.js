function setup() {
    createCanvas(800,600);

    // white and outline

    fill(255,255,255)
    strokeWeight(1)
    rect(99,99,601,274);

    // blue
    let a = color (60, 59, 110)
    fill(a)
    noStroke()
    rect(100,100,200,147);

    // star
    let b = color (255,255,255)
    fill(b)

    beginShape()
    vertex(200,125)
    vertex(210,160)
    vertex(250,160)
    vertex(215,175)
    vertex(225,210)
    vertex(200,185)
    vertex(175,210)
    vertex(185,175)
    vertex(150,160)
    vertex(190,160)
    endShape(CLOSE)
  
    // short red stripes
    let c = color (178, 34, 52)
    fill(c)

    rect(300,100,400,21);

    rect(300,142,400,21);

    rect(300,184,400,21);

    rect(300,226,400,21);

    // long red stripes

    rect(100,268,600,21);

    rect(100,310,600,21);

    rect(100,352,600,21);
}

