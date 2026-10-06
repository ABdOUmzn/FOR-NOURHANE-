// =============================
// GET ELEMENTS
// =============================

const welcome = document.getElementById("welcome");
const birthday = document.getElementById("birthday");
const letter = document.getElementById("letter");
const things = document.getElementById("things");
const surprise = document.getElementById("surprise");

const openGift = document.getElementById("openGift");
const letterButton = document.getElementById("letterButton");
const thingsButton = document.getElementById("thingsButton");
const surpriseButton = document.getElementById("surpriseButton");


// =============================
// CHANGE SCREEN
// =============================

function showScreen(screen) {

    document.querySelectorAll(".screen").forEach(section => {
        section.classList.remove("active");
    });

    screen.classList.add("active");
}


// =============================
// OPEN GIFT
// =============================

openGift.addEventListener("click", () => {

    showScreen(birthday);

    createHearts(20);

});


// =============================
// OPEN LETTER
// =============================

letterButton.addEventListener("click", () => {

    showScreen(letter);

});


// =============================
// OPEN THINGS
// =============================

thingsButton.addEventListener("click", () => {

    showScreen(things);

});


// =============================
// FINAL SURPRISE
// =============================

surpriseButton.addEventListener("click", () => {

    showScreen(surprise);

    startCountdown();

});


// =============================
// COUNTDOWN
// =============================

function startCountdown() {

    const countdown = document.getElementById("countdown");

    const finalBirthday =
        document.getElementById("finalBirthday");

    const bigHeart =
        document.querySelector(".big-heart");

    const finalMessage =
        document.querySelector(".final-message");

    const forever =
        document.querySelector(".forever");


    let number = 3;

    countdown.textContent = number;

    const timer = setInterval(() => {

        number--;

        if (number > 0) {

            countdown.textContent = number;

        } else {

            clearInterval(timer);

            countdown.style.display = "none";

            finalBirthday.style.display = "block";

            bigHeart.style.display = "block";

            finalMessage.style.display = "block";

            forever.style.display = "block";

            createHearts(60);

        }

    }, 1000);

}


// =============================
// FLOATING HEARTS
// =============================

function createHearts(amount) {

    for (let i = 0; i < amount; i++) {

        const heart = document.createElement("div");

        heart.innerHTML =
            Math.random() > .5 ? "❤️" : "💗";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "-50px";

        heart.style.fontSize =
            (15 + Math.random() * 30) + "px";

        heart.style.zIndex = "1000";

        heart.style.pointerEvents = "none";

        heart.style.animation =
            `heartFloat ${4 + Math.random() * 5}s linear forwards`;

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 9000);

    }

}


// =============================
// HEART ANIMATION
// =============================

const style = document.createElement("style");

style.innerHTML = `

@keyframes heartFloat {

    0% {

        transform:
            translateY(0)
            rotate(0deg);

        opacity: 1;

    }

    100% {

        transform:
            translateY(-110vh)
            rotate(360deg);

        opacity: 0;

    }

}

`;

document.head.appendChild(style);