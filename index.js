let toggleList = document.getElementsByClassName("toggle");

let button_one = document.getElementById("buttonA");
let text_one = document.getElementById("textA");

let button_two = document.getElementById("buttonB");
let text_two = document.getElementById("textB");

let button_three = document.getElementById("buttonC");
let text_three = document.getElementById("textC");

let button_four = document.getElementById("buttonD");
let text_four = document.getElementById("textD");

let button_five = document.getElementById("buttonE");
let text_five = document.getElementById("textE");

function rotateButtonA() {
    button_one.classList.toggle('rotate');
    button_one.onclick = rotateButtonA;

    if (text_one.style.display === "inline-block") {
        text_one.style.display = "none";
    } else {
        text_one.style.display = "inline-block";
    }
}

function rotateButtonB() {
    button_two.classList.toggle('rotate');
    button_two.onclick = rotateButtonB;

    if (text_two.style.display === "inline-block") {
        text_two.style.display = "none";
    } else {
        text_two.style.display = "inline-block";
    }
}

function rotateButtonC() {
    button_three.classList.toggle('rotate');
    button_three.onclick = rotateButtonC;

    if (text_three.style.display === "inline-block") {
        text_three.style.display = "none";
    } else {
        text_three.style.display = "inline-block";
    }
}

function rotateButtonD() {
    button_four.classList.toggle('rotate');
    button_four.onclick = rotateButtonD;

    if (text_four.style.display === "inline-block") {
        text_four.style.display = "none";
    } else {
        text_four.style.display = "inline-block";
    }
}

function rotateButtonE() {
    button_five.classList.toggle('rotate');
    button_five.onclick = rotateButtonE;

    if (text_five.style.display === "inline-block") {
        text_five.style.display = "none";
    } else {
        text_five.style.display = "inline-block";
    }
}

rotateButtonA();
rotateButtonA();

rotateButtonB();
rotateButtonB();

rotateButtonC();
rotateButtonC();

rotateButtonD();
rotateButtonD();

rotateButtonE();
rotateButtonE();