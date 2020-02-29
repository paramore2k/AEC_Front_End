
// Boutons

$('#boutonGauche').click(function () {

    // $('#flashID').css('left', '50px');
    $('#flashID').animate({ "left": "-=170px" });
});

$('#boutonDroite').click(function () {

    $('#flashID').animate({ "left": "+=170px" });
    $('#flashID').animate({ "right": "+=170px" });
});

$('#boutonChangerImage').click(function(){
    let imageUrl = 'https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';
    $('.centralCity').css('background-image', 'url(' + imageUrl + ')');
    $('.centralCity').css('background-size', 'cover');
    $('.centralCity').css('background-repeat', 'no-repeat');
    $('.centralCity').css('height', '100vh');
});

$('#boutonEnleverImage').click(function(){
    $('.centralCity').css('background-image', 'none');

});