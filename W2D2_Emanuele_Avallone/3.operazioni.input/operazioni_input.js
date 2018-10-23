var somma = document.getElementById("somma");
var sott = document.getElementById("sott");
var mol = document.getElementById("mol");
var div = document.getElementById("div");


somma.addEventListener("click", function () {
    var somma1 = parseInt(document.getElementById("num1").value);
    var somma2 = parseInt(document.getElementById("num2").value);
    var ris = somma1 + somma2;
    document.getElementById("ris").innerText = ris;
});

sott.addEventListener("click", function () {
    var sott1 = parseInt(document.getElementById("num1").value);
    var sott2 = parseInt(document.getElementById("num2").value);
    var ris = sott1 - sott2;
    document.getElementById("ris").innerText = ris;
});

mol.addEventListener("click", function () {
    var mol1 = parseInt(document.getElementById("num1").value);
    var mol2 = parseInt(document.getElementById("num2").value);
    var ris = mol1 * mol2;
    document.getElementById("ris").innerText = ris;
});

div.addEventListener("click", function () {
    var div1 = parseFloat(document.getElementById("num1").value);
    var div2 = parseFloat(document.getElementById("num2").value);
    var ris = div1 / div2;
    document.getElementById("ris").innerText = ris;
});