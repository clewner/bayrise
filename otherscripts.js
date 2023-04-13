
let slideIndex = 1;
showSlides(slideIndex);




// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}



function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
  
}


let slideIndexSec = 1;
showSlider(slideIndexSec);




// Next/previous controls
function plusSlider(n) {
  showSlider(slideIndexSec += n);
}



function showSlider(n) {
  let i;
  let slides = document.getElementsByClassName("secslide");
  
  if (n > slides.length) {slideIndexSec = 1}
  if (n < 1) {slideIndexSec = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndexSec-1].style.display = "block";
  
}

