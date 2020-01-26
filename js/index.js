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

// contact 
$('#contactme').click(function(){
  Email.send({
    SecureToken : "dbb4bd66-61b7-4629-9787-864a556629af",
    To : 'o.messabih@esi-sba.dz',
    From : $('#mail').val(),
    Subject : $('#object').val(),
    Body : $('#content').val()
  }).then(
    message => alert(message)
  );
});

 

