// JavaScript Document
console.log("hi");

var hamButton = document.querySelector("main button:nth-of-type(1)");
var navBar = document.querySelector("nav");

var shuffleButton = document.querySelector("#playlist section article button:nth-of-type(1)")

hamButton.addEventListener("click", doeIets);
shuffleButton.addEventListener("click", changeShuffle)


function doeIets() {
    if (navBar.classList.contains("shown")) {
        navBar.classList.remove("shown");
        hamButton.classList.remove("shownBurger");
    } else {
        navBar.classList.add("shown");
        hamButton.classList.add("shownBurger");
    }
}

function changeShuffle(){
    if (shuffleButton.classList.contains("inactive")) {
        shuffleButton.classList.remove("inactive");
    } else {
        shuffleButton.classList.add("inactive");

    }
}