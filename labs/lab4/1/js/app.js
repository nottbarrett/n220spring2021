let flavors = [ "#ffb0f1", "#99755a", "#fff3c4" ]

function setup () {
    createCanvas (400,300)
}

function draw () {
    for( var i = 0; i < 12 ; i++ ) {
        noStroke()
        fill(flavors[i])
        flavors.push ("#ffb0f1", "#99755a", "#fff3c4")
        rect(i * 25, 0, 25, 300)
        
    }
}