// Slider automatique géré par CSS
// Ici tu peux ajouter plus tard:
// - boutons
// - arrêt au hover
// - version mobile
let slides = document.querySelectorAll(".slide");
let index = 0;

function nextSlide(){

slides[index].classList.remove("active");

index++;

if(index >= slides.length){
index = 0;
}

slides[index].classList.add("active");

}

setInterval(nextSlide,4000);