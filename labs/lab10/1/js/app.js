let divOne = document.getElementById("divOne")
let divTwo = document.getElementById("divTwo")
let divThree = document.getElementById("divThree")

divOne.addEventListener("click", colorSwap)
divTwo.addEventListener("click", colorSwap)
divThree.addEventListener("click", colorSwap)

function colorSwap(event) {

    let sorter = event.target.getAttribute("data-color");
    event.target.style.backgroundColor = sorter;

}