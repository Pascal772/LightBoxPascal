window.onload = () => {


    let liens = document.querySelectorAll("a")

    let modal = document.querySelector("#modale");

    for (let lien of liens) {

        lien.addEventListener("click", function (bloqueur) {
            bloqueur.preventDefault();

            let image = modal.querySelector("img")

            image.src = this.href;

            // modal.style.display = "block";
            modal.classList.add("show");

        });
    }
    // Fermeture de modale
    let close = modal.querySelector(".close");

    close.addEventListener("click", function () {

        modal.classList.remove("show")

        // modal.style.display = "none";
    });

    modal.addEventListener("click", function () {

        this.classList.remove("show");

        // modal.style.display = "none";
    });

}
