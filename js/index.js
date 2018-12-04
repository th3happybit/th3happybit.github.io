// One Page Scroll Function
$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
});

// Applying animation of main menu items on hover
$('.navbar-nav li').hover(function () {
    $(this).addClass('animated pulse');
});
$('.navbar-nav li').mouseleave(function () {
    $(this).removeClass('animated pulse');
});

