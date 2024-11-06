// Open the Modal
function openModal() {
    if (window.innerWidth > 700 || screen.width > 700) {
        document.getElementById("myModal").style.display = "block";
    }
}
  
// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var lightBoxImg = document.getElementsByClassName("light-box-img");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < lightBoxImg.length; i++) {
      lightBoxImg[i].className = lightBoxImg[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    lightBoxImg[slideIndex-1].className += " active";
  }

