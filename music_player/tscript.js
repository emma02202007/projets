// heure

function afficherHeure() {
    var dateActuelle = new Date();
    var heures = dateActuelle.getHours();
    var minutes = dateActuelle.getMinutes();
    var secondes = dateActuelle.getSeconds();

    heures = heures < 10 ? "0" + heures : heures;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;

    var heureAffichee = heures + ":" + minutes + ":" + secondes;

    document.getElementById("heure").innerHTML = heureAffichee;
}

setInterval(afficherHeure, 1000);

afficherHeure(); 



