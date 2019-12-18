// Kod som körs vid start


// Välja ut element vi ska jobba med
const elementBild = document.querySelector("img")
var bildNr = 1;
// Kod som körs när efter start, när någon klickar på en miniatyr bild

function föreBild() {
    bildNr -= 1;
    if (bildNr == 0) {
        bildNr = 8
    }
    elementBild.src = "../img/photo" + bildNr + ".jpg";
}

function nästaBild() {
    bildNr += 1;
    if (bildNr == 9) {
        bildNr = 1
    }
    elementBild.src = "../img/photo" + bildNr + ".jpg";
}

function play() {
    setInterval(1000, nästaBild());
}