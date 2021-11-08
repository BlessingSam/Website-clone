const slideimage = document.querySelectorAll(".slide-image");
const slidescontainer = document.querySelector(".slidescontainer");
const prevbtn = document.querySelector(".prevbtn");
const nextbtn = document.querySelector(".nextbtn");

let numberofimages = slideimage.length;
let slideWidth = slideimage[0].clientWidth;
currentSlide=0;

function init(){
    slideimage.forEach((img,i) =>{
       img.style.left = i * 100 + "%";
    });

    slideimage[0].classList.add("active");
}

init();
    
nextbtn.addEventListener("click", () => {
    if(currentSlide >= numberofimages - 1){
        goToSlide(0);
        return;
    }
    currentSlide++;
    goToSlide(currentSlide);
});

prevbtn.addEventListener("click", () => {
    if(currentSlide <= 0 ){
        goToSlide(numberofimages - 1);
        return;
    }
    currentSlide--;
    goToSlide(currentSlide);
});

function goToSlide(slideNumber){
    slidescontainer.style.transform = "translateX(-" + slideWidth * slideNumber + "px)";

    currentSlide = slideNumber;
}

function selectActiveClass(){
    let currentActive = document.querySelector(".slide-image.active")
    slideimage[currentSlide].classList.add(".active");
}