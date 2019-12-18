// Kod som körs vid start


// Välja ut element vi ska jobba med
const elementBildruta = document.querySelector("#bildruta")

// Kod som körs när efter start, när någon klickar på en miniatyr bild

function visaBild(nr) {
    elementBildruta.innerHTML = "<img src=\"../img/photo" + nr + ".jpg\" alt=\"foto 1\">"; 
}