var amm= ["Emanuele", "Avallone", "Uiip"];
document.getElementById("verifica").addEventListener("click", function () {

    var nome = document.getElementById("nome").value;
    var i;
    var abilitato = false;
    for (i = 0; i < amm.length; i++) {
        if (nome.toString() === amm[i]) {
            abilitato = true
        }
    }
    if (abilitato === true) {
        document.getElementById("abilit").innerText = "Utente Abilitato";
    } else {
        document.getElementById("abilit").innerText = "Utente NON Abilitato";
    }

});
