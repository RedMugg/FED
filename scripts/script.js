// JavaScript Document
console.log("hi");

var hamButton = document.querySelector("header img:nth-of-type(1)");
var navBar = document.querySelector("nav");

hamButton.addEventListener("click", doeIets);

function doeIets() {
    if (navBar.classList.contains("shown")) {
        navBar.classList.remove("shown");
    } else {
        navBar.classList.add("shown");
    }

}