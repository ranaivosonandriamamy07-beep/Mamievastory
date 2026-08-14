/* =========================
   VARIABLES
========================= */

let answerQuestion1 = "";
let answerQuestion2 = "";
let finalChoice = 0;
let yesClicks = 0;


/* =========================
   CHANGER DE PAGE
========================= */

function showPage(number) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const page = document.getElementById("page" + number);

    if (page) {
        page.classList.add("active");
    }
}


/* =========================
   MOT DE PASSE
========================= */

function checkPassword() {

    const password =
        document.getElementById("password").value;

    const message =
        document.getElementById("passwordMessage");

    if (password === "1706") {

        message.textContent =
            "Tu nous connais bien dis donc ❤️";

        setTimeout(function() {
            showPage(4);
        }, 1200);

    } else {

        message.textContent =
            "Vas-y fais un effort, tu nous connais 🥺😭";
    }
}


/* =========================
   QUESTION 1
========================= */

function question1Yes() {

    answerQuestion1 = "oui";

    yesClicks++;

    const message =
        document.getElementById(
            "question1Message"
        );

    if (yesClicks < 3) {

        message.textContent =
            "Appuie avec tes petits pieds bijoux s'il te plaît 🥺😭";

    } else {

        showPage(5);
    }
}


function question1No() {

    answerQuestion1 = "non";

    const noButton =
        document.getElementById("no1");

    noButton.style.display = "none";

    document.getElementById(
        "question1Message"
    ).textContent =
        "Soit sincère sinon on ne va pas aller loin bb";

    yesClicks = 0;
}


/* =========================
   QUESTION 2
========================= */

function question2(answer) {

    answerQuestion2 = answer;

    showPage(6);
}


/* =========================
   QUESTION 3
========================= */

function finishQuestion3() {

    const text =
        document.getElementById(
            "heartText"
        ).value.trim();

    if (text === "") {

        document.getElementById(
            "heartText"
        ).placeholder =
            "Écris quelque chose avant de continuer ❤️";

        return;
    }

    document.getElementById(
        "thankYou"
    ).style.display = "flex";
}


/* =========================
   APRÈS LA QUESTION 3
========================= */

function continueAfterThankYou() {

    document.getElementById(
        "thankYou"
    ).style.display = "none";

    showPage(7);
}


/* =========================
   QUESTION 4
========================= */

function selectFinalChoice(choice) {

    finalChoice = choice;

    document.getElementById(
        "finalButton"
    ).disabled = false;
}


/* =========================
   FIN
========================= */

function finishEverything() {

    if (finalChoice === 0) {
        return;
    }

    preparePhotos();

    showPage(8);
}


/* =========================
   PHOTOS
========================= */

function preparePhotos() {

    const photo1 =
        document.getElementById("photo1");

    const photo2 =
        document.getElementById("photo2");

    const photo3 =
        document.getElementById("photo3");

    const photo4 =
        document.getElementById("photo4");


    /* QUESTION 1 */

    if (answerQuestion1 === "oui") {

        photo1.src =
            "images/q1_oui.jpg";

    } else {

        photo1.src =
            "images/q1_non.jpg";
    }


    /* QUESTION 2 */

    if (answerQuestion2 === "oui") {

        photo2.src =
            "images/q2_oui.jpg";

    } else {

        photo2.src =
            "images/q2_non.jpg";
    }


    /* QUESTION 3 */

    photo3.src =
        "images/q3.jpg";


    /* QUESTION 4 */

    if (
        finalChoice === 1 ||
        finalChoice === 2
    ) {

        photo4.src =
            "images/q4_12.jpg";

    } else if (finalChoice === 3) {

        photo4.src =
            "images/q4_3.jpg";

    } else if (finalChoice === 4) {

        photo4.src =
            "images/q4_4.jpg";
    }
}
