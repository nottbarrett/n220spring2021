let colors = [ "#FA0000", "#FAD400", "#11CF00" ]

function setup () {
    createCanvas (400,300)
}

function draw () {
    noStroke()
    fill("#FAA700")
    rect(175, 75, 50, 150)


    for( var i = 0; i < 3 ; i++ ) {
        noStroke()
        fill(colors[i])
        circle(200, 100 + i*50, 25)


        
    }
}