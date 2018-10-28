var vett = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var v2=[];
var i; 
for (i= 0; i < vett.length; i++) {
    v2[i]=vett[i]*vett[i];
}


document.getElementById("vett").innerText = vett;
document.getElementById("v2").innerText = v2;
document.getElementById("fine").innerText = "Fine Elaborazione";