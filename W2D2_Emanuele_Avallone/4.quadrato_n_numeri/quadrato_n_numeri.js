document.getElementById("quadrato").addEventListener("click", function () {

    var n = document.getElementById("n").value;
    var i;
    var ris=[];
    for (i = 0; i < n; i++) {
        ris[i] = (i+1)*(i+1);
    }
    document.getElementById("ris").innerText = ris;
    document.getElementById("fine").innerText = "Fine Elaborazione";

});