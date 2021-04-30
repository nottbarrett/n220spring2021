var container = document.getElementById("container")

for (i = 0; i < 100; i++){
let loopDiv = document.createElement("div")
loopDiv.style.width = "20px"
loopDiv.style.height = "20px"
loopDiv.style.float = screenLeft

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

var color = random_rgba();

loopDiv.style.backgroundColor = color
loopDiv.style.margin = "50px"
container.appendChild(loopDiv)
}