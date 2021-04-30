var size = 100
var greenSquare = document.getElementById("greenSquare")

greenSquare.style.width = size + "px"
greenSquare.style.height = size + "px"
greenSquare.style.backgroundColor = "#00FF00"
greenSquare.style.margin = "50px"

function onClick() {
    size = size * 1.1;
    greenSquare.style.width = size + "px"
    greenSquare.style.height = size + "px"
}
