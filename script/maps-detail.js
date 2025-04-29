const mapsContainer = document.querySelector(".maps-slider");
const slides = document.querySelectorAll(".slide");

let tempCloneSLide = '';
let slideLen = slides.length;

tempCloneSlide = slides[0].cloneNode(true);
mapsContainer.appendChild(tempCloneSlide);
slideLen += 1;

let currentSlide = 0;
let interval = null;

function nextSlide(){
    mapsContainer.style.transition = "0.3s";
    mapsContainer.style.translate = `calc(${currentSlide} * -100%)`;
}

function reset(){
    setTimeout(() => {
        mapsContainer.style.transition = "none";
        mapsContainer.style.translate = `0%`;
        currentSlide = 0;
        clearInterval(interval);
        createInterval();
    }, 210);
}

function createInterval(){
    interval = setInterval(function(e){
        currentSlide += 1;
        
        nextSlide();
        if (currentSlide == slideLen-1) {
            reset();
        }
        
    }, 3000);
}

createInterval();