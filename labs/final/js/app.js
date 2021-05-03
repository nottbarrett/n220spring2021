//establish global variables for the board and the cards

var gameBoard = document.getElementById("gameBoard")
var gameCard = document.getElementsByClassName("gameCard")

//set up an array with each card's face value and set up global click counter

let values = ["2","3","6","K","J","10","7","A","7","K","2","6","A","3","J","10"]
let counter = 0

//style all "card" divs by class and assign them their corresponding value from array

for (i = 0; i < gameCard.length; i++){
    gameCard[i].style.width = "50px"
    gameCard[i].style.height = "70px"
    gameCard[i].style.cssFloat = "left"
    gameCard[i].style.backgroundColor = "#132377"
    gameCard[i].style.margin = "15px"
    gameCard[i].setAttribute("data-value", values[i])
}

//event bubble the function so i can use event.target to change the properties of each card

document.addEventListener("click", function (event) {

    //using docuemnt.addEventListener and specifying to only count clicks on cards

    if ( event.target.classList.contains( 'gameCard' ) ) {

        //variable for displaying cards face value

        let selector = event.target.getAttribute("data-value")

        //set up selected cards cache

        let selectedCards = []

        //style face side of card and increase click counter

        event.target.style.backgroundColor = "#F7F4DC"
        event.target.innerHTML = selector
        counter = counter + 1
        selectedCards.push(selector)
        console.log(counter)
        console.log(selectedCards)


        //when counter hits two, check if the two selected cards are the same 
        //if so, remove the cards from the table and reset the counter

        if (selectedCards[1] === selectedCards[2] && counter == 2){

            //remove card color and text

            setTimeout(function(){event.target.style.backgroundColor = "#808080";
            event.target.innerHTML = ""}, 2000)
            counter = 0
        
        }

        //if not, turn the cards back over

        else{
        
            //return card to "facedown" state

            setTimeout(function(){event.target.style.backgroundColor = "#132377";
            event.target.innerHTML = ""}, 2000)
            
        }

        //reset counter after two clicks

        if( counter > 2){
            counter = 0
        }

    }
    
}, false); 


//failed attempt from first couple sessions

/*let help = selector.value.toString()

if (help == "2"){

    function remove (event) {
        setTimeout(function(){event.target.style.backgroundColor = "#808080"; event.target.innerHTML = ""}, 2000)
    }
    
    }
    else{
    function flipBack (event){
        setTimeout(function(){event.target.style.backgroundColor = "#132377"; event.target.innerHTML = ""}, 2000)
    }

    }

    for (i = 0; i < values.length; i++){
    let gameCard = document.createElement("div")
    gameCard.id = "tester"
    gameCard.setAttribute("class", "workPlease")
    gameCard.setAttribute("data-value", values[i])
    gameCard.style.width = "50px"
    gameCard.style.height = "70px"
    gameCard.style.cssFloat = "left"
    gameCard.style.backgroundColor = "#132377"
    gameCard.style.margin = "15px"
    gameBoard.appendChild(gameCard)


    var gameCardIn = document.getElementById("tester")
    var specCard = gameCardIn

    document.addEventListener("click", function (event) {
        if ( event.target.classList.contains( 'workPlease' ) ) {
            let selector = event.target.getAttribute("data-value")
            event.target.style.backgroundColor = "#F7F4DC"
            specCard.innerHTML = selector
        }
    }, false);

}*/
