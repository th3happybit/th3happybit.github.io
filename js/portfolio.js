// Applying animation of menu items on hover
$('.navbar-nav li').hover(function () {
    $(this).addClass('animated pulse');
});
$('.navbar-nav li').mouseleave(function () {
    $(this).removeClass('animated pulse');
});

// Getting Data from Database
var database = firebase.database();
var parentNode = document.getElementById("portfolio");

firebase.database().ref('work/').once('value').then(function(snapshot) {
    snapshot.forEach(function(userSnapshot) {
        var article = userSnapshot.val();
        console.log(article.title);
        console.log(article.subtitle);
        console.log(article.head);
        console.log(article.description);
    });
});