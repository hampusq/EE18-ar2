const eButton = document.querySelector("#sendIn");
const eInput = document.querySelector("#input");

const eContent1 = document.querySelector(".content1");
const eContent2 = document.querySelector(".content2");
const eContent3 = document.querySelector(".content3");
const eError = document.querySelector("#error");

eContent1.classList.add("hidden");
eContent2.classList.add("hidden");
eContent3.classList.add("hidden");


var intresseVal = eInput.value;



eButton.addEventListener("click", function() {
    // Array med små bokstaver
    let intressenSmall = ['golf', 'fotboll', 'mma']

    // Array första bokstaven stor
    let intressenBig = ['Golf', 'Fotboll', 'Mma']

    // Skriv ut det intresse användaren skriver in
    if (eInput.value == intressenSmall[0] || eInput.value == intressenBig[0]) {
        eContent1.classList.add("show");
    } else {
        if (eInput.value == intressenSmall[1] || eInput.value == intressenBig[1]) {
            eContent2.classList.add("show");
        } else {
            if (intressenSmall[2] || eInput.value == intressenBig[2]) {
                eContent3.classList.add("show");
            } else {
                eError.innerHTML = "Fel, testa att skriv: golf, fotboll eller mma"
            }
        }
    }
});