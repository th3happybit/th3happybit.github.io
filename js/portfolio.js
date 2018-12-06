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
        var parent = document.createElement("div");
        parent.setAttribute("class", "col-md-4 col-sm-4 team animated slideInUp");
        parent.setAttribute("data-tag", article.type);
        parent.innerHTML = '<div class="team-member">' +
        '<div class="team-img"> <img src="'+ article.img +'" alt="team member" class="h-100 w-100"> </div>' +
        ' <div class="team-hover">'
            + '<div class="desk">'
                +'<h4>' + article.head + '</h4>'
                +'<p>' + article.description +'</p>'
            +'</div>'
            +'<div class="s-link"> <a href="' + article.link + '"class="blue"><h4>DETAILS</h4></a> </div>'
        +'</div>'
        +'</div>'
        +'<div class="team-title text-left">'
        +'<h5 class="green">'+ article.title +'</h5> <span>'+ article.subtitle +'</span> </div>'

        parentNode.append(parent);
    });
});