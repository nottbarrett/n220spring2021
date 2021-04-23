let container = document.getElementById("container")
let calculator = document.getElementById("calculator")

let x = 0
let y = 0
let z = 0

let currentColor = "rgb(" +x+ "," +y+ "," +z+ ")"

let colorBox = document.createElement("div")
colorBox.style.width = "600px"
colorBox.style.height = "400px"
colorBox.style.backgroundColor = currentColor
colorBox.style.margin = "15px"

container.appendChild(colorBox)

function redOne() {

    x = x + 100

    colorBox.style.backgroundColor = "currentColor" 

}