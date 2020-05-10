// setInterval(demarrerLaMontre,1000)
// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()


//Ajouter l'heure , minite , seconde  dans des varaiables

var date = new Date();
let sec = date.getSeconds() / 60;
let min = date.getMinutes() / 60,
    hr = (min + date.getHours()) / 12;

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
// Déplacer les aiguilles

function demarrerLaMontre() {

    sec = sec + (6 / 360);

    min = min + (6 / (360 * 60));

    hr = hr + (3 / (360 * 60));

    AIGUILLEHR.style.transform = `rotate(${hr*360}deg)`;
    AIGUILLEMIN.style.transform = `rotate(${min*360}deg)`;
    AIGUILLESEC.style.transform = `rotate(${sec*360}deg)`;

}
demarrerLaMontre();

// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);
