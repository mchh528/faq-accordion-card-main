let button_one = document.getElementById("buttonA");
let text_one = document.getElementById("textA");

let button_two = document.getElementById("buttonB");
let text_two = document.getElementById("textB");

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


rotateButtonA();
rotateButtonB();