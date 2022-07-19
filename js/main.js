/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function showDropdownMenu() {
  document.getElementById("myDropDown").classList.toggle("show");
  if (window.location.pathname === "/chambres") {
    document.getElementById("IMGchambre").classList.toggle("behind");
  }
}

//Slideshow
let slideIndex = 0;
showSlides(slideIndex);

console.log("hello?");

let rooms = document.getElementsByClassName("rooms");
let chambreNo = document.getElementById("chambreNo");

function changeRoom() {
  for (let i = 0; i < rooms.length; i++) {
    rooms[i].style.display = "none";
  }
  rooms[slideIndex-1].style.display = "block";
  chambreNo.innerHTML = "Chambre " + slideIndex;
}


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  if (window.location.pathname === "/index") {
    dots[slideIndex-1].className += " active";
  }
}

if (window.location.pathname === "/index") {
  setInterval(function () {
    plusSlides(1);
  },4000);
}