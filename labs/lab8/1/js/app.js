var size = 100
var sizeElement = document.getElementById("greenSquare")

function onClick() {
    size = size * 1.1;
    sizeElement.style.width = size + "px"
    sizeElement.style.height = size + "px"
}
