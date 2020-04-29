const eNamn = document.querySelector("#namn");
const eVerb = document.querySelector("#verb");
const eKnapp = document.querySelector("button");
const eOutput = document.querySelector("#output");


// Vad händer när vi klickar på gå
var rum = "entren";

eOutput.innerHTML += "du är i" + rum + ".<br>";



eKnapp.addEventListener("click", function() {

    var namn = eNamn.value;
    var verb = eVerb.value;

    if (rum == "entren") {
        if (verb == "fram") {
            rum = "kafeterian"
            eOutput.innerHTML += "du är i " + rum + ".<br>";
        } else if (verb == "höger") {
            rum = "bibloteket";
            eOutput.innerHTML += "du är i " + rum + ".<br>";
        } else if (verb == "vänster") {
            rum = "rum 1";
            eOutput.innerHTML += "du är i " + rum + ".<br>";
        }

    } else if (rum == "kafeterian") {
        if (verb == "tillbaka") {
            rum = "entren"
            eOutput.innerHTML += "du är i " + rum + ".<br>";

        }
    }



})