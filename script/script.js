const btnPrev = document.querySelector(".buttonPrev");
const btnNext = document.querySelector(".buttonNext");
const slidePage = document.querySelector(".news-slide");

let current = 0;
let interval = null;

if(current == 0){
    btnPrev.style.visibility = "hidden";
} 

function slideToNext(){
    console.log(interval);
    if(current == 2){
        return;
    }
    
    current += 1;
    slidePage.style.translate = `calc(${current} * (-100% - 1rem))`
    btnPrev.style.visibility = "initial";

    if(current == 2){
        btnNext.style.visibility = "hidden";
    }
}

function slideToPrev(){
    console.log("test");
    if(current == 0){
        return;
    } 

    
    current -= 1;
    slidePage.style.translate = `calc(${current} * (-100% - 1rem))`;
    btnNext.style.visibility = "initial";
    
    if(current == 0){
        btnPrev.style.visibility = "hidden";
    }
}

btnPrev.addEventListener("click", function(e){
    slideToPrev();
    createInterval();
})

btnNext.addEventListener("click", function(e){
    slideToNext();
    createInterval();
})

function createInterval(){
    if(interval != null) clearInterval(interval);
    interval = setInterval(function(){
        // console.log('slide');
        if(current < 2){
            slideToNext();
            if(current == 0){
                btnPrev.style.visibility = "hidden";
                btnNext.style.visibility = "initial";
            } 
        }else{
            current = -1;
            slideToNext();
            btnPrev.style.visibility = "hidden";
            btnNext.style.visibility = "initial";
        }

    }, 5000);
}

createInterval();