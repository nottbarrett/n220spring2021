function checkGuess() {
    var ans = Number(textGuess.value);

    if(ans > 7) {
        dvResponse.innerHTML = "You are: too high!"
    }

    if(ans < 7) {
        dvResponse.innerHTML = "You are: too low!"
    }

    if(ans == 7) {
        dvResponse.innerHTML = "You are: correct!"
    }

    document.getElementById("textGuess").value = "";
}