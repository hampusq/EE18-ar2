const elementFönster = document.querySelector("#fönster");
const elementKol4 = document.querySelector(".kol4");

elementKol4.addEventListener("click", tryck);

function tryck(event) {

    if (event.target.tagName == "BUTTON") {
        console.log(event.target.textContent);

        // elementFönster.value = event.target.textContent;


    }
}