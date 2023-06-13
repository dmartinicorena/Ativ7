/*Countdown function for next IFSul Selection Process*/

$(document).ready(function () {
  // Countdown timer for next IFSul Selection Process
  var targetDate = new Date("11/30/2023").getTime();
  var countdownTimer = setInterval(function () {
    var currentDate = new Date().getTime();
    var distance = targetDate - currentDate;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("countdown-days").innerHTML = days;

    if (distance < 0) {
      clearInterval(countdownTimer);
      document.getElementById("countdown-days").innerHTML = "0";
    }
  }, 1000);
});

/* Carousel function for testimonials */
$(document).ready(function() {
    // Carousel configuration
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var slides = $(".testimonial-slide");
        var dots = $(".carousel-nav button");

        // Hide all slides and remove active class from all dots
        slides.hide();
        dots.removeClass("active");

        // Show the current slide and add active class to the current dot
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides.eq(slideIndex - 1).fadeIn();
        dots.eq(slideIndex - 1).addClass("active");

        // call showSlides() again after 6 seconds
        setTimeout(showSlides, 6000);
    }
});