let dvResponse = document.getElementById("dvResponse");
let dvResponseTwo = document.getElementById("dvResponseTwo");
let typeInput = document.getElementById("typer");

let badWordOne = "clear"
let badWordTwo = "water"
let badWordThree = "tires"

function badCheck() {
    let typer = typeInput.value

    let splitString = typer.split(" ")
    console.log(splitString)

    let badTally = 0

    for(i = 0; i < splitString.length; i++) {
        if( splitString[i] == badWordOne){
            badTally = badTally + 1
            dvResponseTwo.innerHTML = "Bad Word Found!"
        }

        if( splitString[i] == badWordTwo){
            badTally = badTally + 1
            dvResponseTwo.innerHTML = "Bad Word Found!"
        }

        if( splitString[i] == badWordThree){
            badTally = badTally + 1
            dvResponseTwo.innerHTML = "Bad Word Found!"
        }

        dvResponse.innerHTML = "Bad Word Count = " + badTally
    }
    
    document.getElementById("typer").value = "";

  
}