let dvFound = document.getElementById("dvFound")

let objects = [
    { color: "#FF0000", height: 100, width: 300 },
    { color: "#FFFF00", height: 200, width: 200 },
    { color: "#ff0000", height: 300, width: 100 },
];


function divMaker() {

    console.log(objects[0])

       for( var i = 0; i < objects.length; i++){
           let newDiv = document.createElement("div")
           newDiv.style.height = objects[i].height
           newDiv.style.width = objects[i].width
           newDiv.style.color = objects[i].color
       }
}