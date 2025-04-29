const nav = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function(e){
    nav.classList.toggle("open");
})