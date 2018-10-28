var col = ["orange", "green", "blue","yellow"];
var i = 0;
var int;
var go;

document.getElementById("body").onload = function () {
    int=window.setInterval(start, 15000);
};


function start() {
    if (i === col.length) {
        i = 0;
        document.getElementById("body").style.backgroundColor = col[i];
    } else {
        document.getElementById("body").style.backgroundColor = col[i];
        i++;
    }
}

document.getElementById("stop").addEventListener("click", function () {
    clearInterval(int);
    var temp = document.getElementById("body").style.backgroundColor;
    document.getElementById("body").style.backgroundColor = temp;
go=i;
});

document.getElementById("go.on").addEventListener("click", function () {
    inter=window.setInterval(start, 15000);
});