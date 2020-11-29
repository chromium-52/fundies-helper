//Get the button:
mybutton = document.getElementById("scrollTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// on scroll navbar change
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementsByClassName("navbar")[0].style.opacity = 1;
    document.getElementsByClassName("navbar")[0].style.backgroundColor = "rgb(58, 47, 47)";
  } else {
    document.getElementsByClassName("navbar")[0].style.opacity = 0.85;
    document.getElementsByClassName("navbar")[0].style.backgroundColor = "#903749";
  }
}