var slideIndex = 1; // change initial slide index to 3
  
// Show the slides
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
    
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    
  }
  slides[slideIndex - 1].style.display = "block";
  updateProgressBar(); // call updateProgressBar function to update the progress bar
}

// Show or hide the "Back" button
function showBackButton() {
  var prevButton = document.getElementsByClassName("prev")[0];
  if (slideIndex > 1) {
    prevButton.style.display = "block";
  } else {
    prevButton.style.display = "none";
    
  }
}

// Move to the next or previous slide
function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
  showBackButton();
  if(slideIndex > 10 ){
slideIndex = 1
}
  
}

// Initialize the slideshow
showSlides(slideIndex); // initialize the slideshow with the updated slide index value of 3

function updateProgressBar() {
// Calculate the percentage of completion
var percent = (slideIndex / 10) * 100;
if(slideIndex > 2 ){
document.getElementById("progress-container").style.display = "block";
}
if(slideIndex < 3 ){
document.getElementById("progress-container").style.display = "none";
}

// Update the width of the progress bar
document.getElementById("progress-bar").style.width = percent + "%";

}
