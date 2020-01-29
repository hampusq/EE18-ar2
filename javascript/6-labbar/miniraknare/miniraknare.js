// Element vi använder

const elementRutaTal1 = document.querySelector("#tal1");
const elementRutaTal2 = document.querySelector("#tal2");

const elementKnappPlus = document.querySelector("#plus");
const elementKnappMinus = document.querySelector("#minus");
const elementKnappGånger = document.querySelector("#gånger");
const elementKnappDividera = document.querySelector("#dividera");

const elementRutaResultat = document.querySelector("#resultat");

// Lyssna om man klickar på plus knapped 

elementKnappPlus.addEventListener("click", summera)
elementKnappMinus.addEventListener("click", summeraMinus)
elementKnappGånger.addEventListener("click", summeraGanger)
elementKnappDividera.addEventListener("click", summeraDividera)

function summera() {
        // Läs av tal1 & tal2

        var tal1 = Number(elementRutaTal1.value);
        var tal2 = Number(elementRutaTal2.value); 

        // Räkna ut tal1 + tal2
        var summa = tal1 + tal2;

        // Skriver ut svaret i resutlatet rutan

        elementRutaResultat.value = summa;
}

// Minus

function summeraMinus() {
    // Läs av tal1 & tal2

    var tal1 = Number(elementRutaTal1.value);
    var tal2 = Number(elementRutaTal2.value); 

    // Räkna ut tal1 + tal2
    var summa = tal1 - tal2;

    // Skriver ut svaret i resutlatet rutan

    elementRutaResultat.value = summa;
}

function summeraGanger() {
    // Läs av tal1 & tal2

    var tal1 = Number(elementRutaTal1.value);
    var tal2 = Number(elementRutaTal2.value); 

    // Räkna ut tal1 + tal2
    var summa = tal1 * tal2;

    // Skriver ut svaret i resutlatet rutan

    elementRutaResultat.value = summa;
}

function summeraDividera() {
    // Läs av tal1 & tal2

    var tal1 = Number(elementRutaTal1.value);
    var tal2 = Number(elementRutaTal2.value); 

    // Räkna ut tal1 + tal2
    var summa = tal1 / tal2;

    // Skriver ut svaret i resutlatet rutan

    elementRutaResultat.value = summa;
}




