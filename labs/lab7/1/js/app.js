let dvResponse = document.getElementById("dvResponse");
let txtGreet = document.getElementById("textGreet");

function doGreet() {
   
    var greetText = txtGreet.value.toString();

    dvResponse.innerHTML = "Hello " + greetText + "";

    console.log(dvResponse.innerHTML)
}