let dvResponse = document.getElementById("dvResponse");
let txtCoat = document.getElementById("textCoat");
let txtTemperature = document.getElementById("txtTemperature");

function doThing() {
    var temp = Number(txtTemperature.value);
    var coatText = txtCoat.value.toUpperCase();
    dvResponse.innerHTML = coatText

    if(temp < 20 && coatText == "YES") {
        dvResponse.innerHTML = "Wear your coat!"
    }


}