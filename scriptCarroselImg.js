/* Carousel function for news */
$(document).ready(function() {
    $(".thumbnail").click(function() {
        $(".thumbnail").removeClass("active-thumbnail");
        $(this).addClass("active-thumbnail");
        // take the image path from the thumbnail
        var imagePath = $(this).find("img").attr("src");
        $(".main-image img").attr("src", imagePath);
    });
    // set the first thumbnail as active
    $(".thumbnail:first-child").addClass("active-thumbnail");
  });