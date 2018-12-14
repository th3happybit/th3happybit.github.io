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
  var email = {
    mail : $('#mail').val(),
    object : $('#object').val(),
    content : $('#content').val(),
    date : new Date().getDay()+"-"+new Date().getMonth()+"-"+new Date().getFullYear(),
    time : new Date().getHours()+":"+new Date().getMinutes()
  }
  firebase.database().ref().child('inbox').push(email);
});

