

// Méthode pour changer ce qui se trouve dans

$('#monTitre').html("Hello jQuery World !!");

$( "#monTitre" ).click(function() {
    let montitre = $('#monTitre').html("");
    $( "#monTitre" ).html("Evenement sur clique");
});
