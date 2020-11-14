// On trouve le bouton:
mybutton = document.getElementById("myBtn");

// Quand l'utilisateur descends la page de 20px, le bouton retour vers le haut apparaît
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

//Quand l'utilisateur clique sur le bouton, il retourne vers le haut de la page
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
