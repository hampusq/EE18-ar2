const eButton = document.querySelector("#sendIn");
const eInput = document.querySelector("#input");

const eContent1 = document.querySelector(".content1");
const eContent2 = document.querySelector(".content2");
const eContent3 = document.querySelector(".content3");

eContent1.classList.add("hidden");
eContent2.classList.add("hidden");
eContent3.classList.add("hidden");


var intresseVal = eInput.value;

eButton.addEventListener("click", function intresse() {

    if (eInput.value == "golf") {
        eContent1.classList.add("show");
    }
    if (eInput.value == "fotboll") {
        eContent2.classList.add("show");
    }
    if (eInput.value == "mma") {
        eContent3.classList.add("show");
    }
    else {
        eInput.value = "Fel"
    }
});
