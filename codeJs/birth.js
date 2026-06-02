const snowContainer = document.querySelector(".snow");

/* ICONOS */
const icons = [
    '<i class="fa-solid fa-gift"></i>',
    '<i class="fa-solid fa-moon"></i>',
    '<i class="fa-solid fa-heart"></i>',
    '<i class="fa-solid fa-sun"></i>'
];

function createFloatingItem(){

    const item = document.createElement("span");

    item.classList.add("snowflake");

    /* ICONO RANDOM */
    item.innerHTML =
        icons[Math.floor(Math.random() * icons.length)];

    /* POSICION */
    item.style.left =
        Math.random() * window.innerWidth + "px";

    /* TAMAÑO */
    item.style.fontSize =
        Math.random() * 20 + 15 + "px";

    /* DURACION */
    item.style.animationDuration =
        Math.random() * 6 + 7 + "s";

    /* OPACIDAD */
    item.style.opacity =
        Math.random() * .5 + .4;

    snowContainer.appendChild(item);

    /* COLOR GLOBOS RANDOM */
    const balloon = item.querySelector(".fa-gift");

    if(balloon){

        const colors = [
            "#b510ba",
            "#74b9ff",
            "#ffeaa7",
            "#55efc4",
            "#a29bfe",
            "#36c51d"
        ];

        balloon.style.color =
            colors[Math.floor(Math.random() * colors.length)];
    }

    setTimeout(() => {
        item.remove();
    }, 14000);

}

/* GENERAR */
setInterval(createFloatingItem, 350);

const openLetter = document.getElementById("openLetter");
const overlay = document.getElementById("overlay");
const closeOverlay = document.getElementById("closeOverlay");

openLetter.addEventListener("click", (e) => {
    e.preventDefault();

    overlay.classList.add("active");
});

closeOverlay.addEventListener("click", () => {
    overlay.classList.remove("active");
});

/* CERRAR AL HACER CLICK AFUERA */
overlay.addEventListener("click", (e) => {

    if(e.target === overlay){
        overlay.classList.remove("active");
    }

});


/* ABRIR */
const openPink = document.getElementById("openPink");
const openBlue = document.getElementById("openBlue");
const openBlack = document.getElementById("openBlack");

/* OVERLAYS */
const pinkOverlay = document.getElementById("pinkOverlay");
const blueOverlay = document.getElementById("blueOverlay");
const blackOverlay = document.getElementById("blackOverlay");

/* OPEN */
openPink.addEventListener("click", (e) => {
    e.preventDefault();
    pinkOverlay.classList.add("active");
});

openBlue.addEventListener("click", (e) => {
    e.preventDefault();
    blueOverlay.classList.add("active");
});

openBlack.addEventListener("click", (e) => {
    e.preventDefault();
    blackOverlay.classList.add("active");
});

/* CLOSE BUTTON */
document.querySelectorAll(".closeGift").forEach(button => {

    button.addEventListener("click", () => {
        button.closest(".gift-overlay").classList.remove("active");
    });

});

/* CLICK AFUERA */
document.querySelectorAll(".gift-overlay").forEach(overlay => {

    overlay.addEventListener("click", (e) => {

        if(e.target === overlay){
            overlay.classList.remove("active");
        }

    });

});

const memoryButtons = document.querySelectorAll(".memory-btn");

memoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".memory-card");
        const text = card.querySelector(".memory-text");

        card.classList.add("active");
        text.classList.add("active");

    });

});

const closeMemoryButtons = document.querySelectorAll(".close-memory");

closeMemoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".memory-card");
        const text = card.querySelector(".memory-text");

        card.classList.remove("active");
        text.classList.remove("active");

    });

});