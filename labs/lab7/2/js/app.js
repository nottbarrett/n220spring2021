
function calcTip() {
   
    var textTip = Number(textTotal.value) * .18 ;
    var finTotal = Number(textTotal.value) + textTip;

    console.log("Tip: $" + textTip)
    console.log("Total: $"  + finTotal)
}