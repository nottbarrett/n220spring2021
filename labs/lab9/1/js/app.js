let dvResponseA = document.getElementById("dvResponseA")
let dvResponseS = document.getElementById("dvResponseS")
let numberSet = document.getElementById("numberSet")

function findAvg() {

let userInput = numberSet.value

let splitNumber = userInput.split(",")
console.log(splitNumber)

let average = 0
let sum = 0

for(let i = 0; i < splitNumber.length; i++){
    finalA = average += Number(splitNumber[i]) / splitNumber.length
    finalS = sum += Number(splitNumber[i])

    dvResponseA.innerHTML = "Average = " + finalA
    dvResponseS.innerHTML = "Sum = " + finalS

 
}

document.getElementById("numberSet").value = "";

}