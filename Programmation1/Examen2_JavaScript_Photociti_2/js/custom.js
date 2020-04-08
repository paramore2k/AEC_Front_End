/*
Créé par David Champagne
le 2020-04-01
 */


let lettreRemplacer  = "";
let altLettre = "";
let imageID = "";
let couleurChoisie = "noir";
let couleurPrecedente = "noir";
let mot = [];
let maLettre = [];
let c = "";

// Enlever les accents aigus à partir du formulaire
//Permet de transmettre le mot via la toucher enter
$(document).on("keypress", "input", function(e){
    if(e.which === 13){
        $(this).removeAccentedChar();
        soumettre();
    }
});
// Appel de la fonction de conversion des accents
$("#examenciti_form").change(function () {
    $(this).removeAccentedChar();
});
// Système de conversion d'accent automatique
(function () {
    $.fn.removeAccentedChar = function() {
        return this.each(function() {
            var strString = $(this).val();
            strString = strString.replace(/À|Á|Â|Ã|Ä|Å|Ǻ|Ā|Ă|Ą|Ǎ|Α|Ά|Ả|Ạ|Ầ|Ẫ|Ẩ|Ậ|Ằ|Ắ|Ẵ|Ẳ|Ặ|A/g,'a');
            strString = strString.replace(/à|á|â|ã|å|ǻ|ā|ă|ą|ǎ|ª|α|ά|ả|ạ|ầ|ấ|ẫ|ẩ|ậ|ằ|ắ|ẵ|ẳ|ặ|а/g,'a');
            strString = strString.replace(/È|É|Ê|Ë|Ē|Ĕ|Ė|Ę|Ě|Ε|Έ|Ẽ|Ẻ|Ẹ|Ề|Ế|Ễ|Ể|Ệ|Е|Э/g,'E');
            strString = strString.replace(/è|é|ê|ë|ē|ĕ|ė|ę|ě|έ|ε|ẽ|ẻ|ẹ|ề|ế|ễ|ể|ệ|е|э/g,'e');
            $(this).val(strString);
        });
    };
}());

// Changer la couleur d'arrière-plan

$(".nouvelleCouleur").click(function() {
    couleurChoisie = $(this).attr("id");
    $("#" + couleurPrecedente).removeClass("current", "border-color");

    $(this).addClass("current");
    couleurPrecedente = $(this).attr("id");


    $(".monMot").css("background-image", "url('background/" + couleurChoisie + ".jpg");
});

function soumettre() {
    // On enlève les messages d'erreurs s'il y en avait et les lettres précédemment écrites.
        $("#examenciti_form_error").html("");
    // On applique la variable mot à la valeur du texte entrée

    mot = $("input#examenciti_form").val();

        if (mot.length >= 3 && mot.length <= 12 && /^[a-zA-Z\*]+$/.test(mot)) {

            // Enlever la classe hide des sections 2 et 3
            $(".couleurDeFond").removeClass("couleurDeFond");
            // Placement des colonnes selon la longueur de caractères
            effacerLettres(mot);
            ajusterColonnes(mot);

            // Placement des lettres dans la zone Lettres
            placerLettres(mot);
        }
        // ERreur si le mot contient des nombres, ! . ou ,
        else if(/^[0-9!.,/]+$/.test(mot)){
            $(".Lettres, .text-dark, .nouvelleCouleur").addClass("couleurDeFond");
            $("#examenciti_form_error").html("Votre mot ne doit contenir que des lettres de l'alphabet");

        }
        // Erreur pour tout autre raison
        else{
            $(".Lettres, .text-dark, .nouvelleCouleur").addClass("couleurDeFond");
            $("#examenciti_form_error").html("Votre mot doit contenir entre 3 et 12 caractères. Utilisez * pour les accents.");
        }
}
// Méthode no 1; Appliquer display none sur tous les ID, appliquer display FLEX lors du placement des mots
function effacerLettres(mot){

    // Je réutilise ma variable, celle-ci me permet d'éviter de spécifier sa source
    maLettre = mot.toUpperCase().split("");

    // On convertie les * en CS pour les accents
    for (i=0;i<maLettre.length;i++) {
        if (maLettre[i] === "*") {
            maLettre[i] = "CS";

        }
    }

    for (i=0;i<=12;i++) {
        $('#idLettre' + (i + 1)).css("display","none");
        $('#idLettre' + (i + 1)).attr("class","lettreMot");

    }

}

function ajusterColonnes(mot) {

// Je réutilise ma variable, celle-ci me permet d'éviter de spécifier sa source
    for (i=0;i<mot.length;i++){

    // On défini la lettre C pour les colonnes afin de les enlever avant d'écrire un autre mot
    if (mot.length === 3) {
        c = "col-4";
        $("#idLettre" +(i+1)).addClass(c);

    } else if (mot.length === 4) {
        c = "col-3";
        $("#idLettre" +(i+1)).addClass(c);
    } else if (mot.length === 5) {
        // Remplacement de col-2 pour col à la permission de Shany
        c = "col";
        $("#idLettre" +(i+1)).addClass(c);

    } else if (mot.length === 6) {
        c = "col-2";
        $("#idLettre" +(i+1)).addClass(c);

    } else if (mot.length >= 7 && mot.length <= 12) {
        c = "col";
        // Remplacement de col-2 pour col à la permission de Shany
        $("#idLettre" +(i+1)).addClass(c);

        }
    }
}

function placerLettres(){

    // Bien que cet étape aurait pu être inclue avec la fonction EffacerLettres, pour séparer le tout je préfère qu'il ait sa propre fonction
    for (i = 0; i < maLettre.length; i++) {
            // On spécifie ici que altLettre = maLettre étant donné que l'on va reprendre altLettre pour l'attribut ALT.
            altLettre = maLettre[i];
            lettreRemplacer = `Letters/${maLettre[i]}/${maLettre[i]}1.jpg`;

        // On place les lettres selon la source LettreRemplacer (nom de variable utiliser car c'est cette lettre que la personne peut remplacer)
        let  lettredumot = $("#lettreDuMot" + (i+1));
        lettredumot.attr("src",`${lettreRemplacer}`);
        // J'assigne la lettre seulement à l'attribut ALT afin de m'en servir à nouveau pour les carousel
        lettredumot.attr("alt",`${maLettre[i]}`);
        $("#idLettre" + (i + 1)).css("display", "flex");


        // Ancienne approche que je laisse en place pour retravailler éventuellement.

        // $(".Lettres").append(`<div class="${c}"><img src="./Letters/${mot[i]}/${mot[i]}1.jpg" class="img-fluid photoimg" alt="${alt[i]}${i+1}" id="${alt[i]}${i+1}" data-toggle="modal" data-target="#ModalCenter"></div>`);

    }


}
$(".malettre").click(function (mot) {
    // On enlève la classe current à l'image du carrousel
    for (i=0;i<5;i++) {
//   Boucle pour savoir si l'image a déjà la classe current et l'enlever
        if ($("#imgLettre" + (i + 1)).hasClass("current")) {
            $("#imgLettre" + (i + 1)).removeClass("current");
        }
    }
    imageID = $(this).attr("id");
    altLettre = $(this).attr("alt");

    // Pour faire apparaître les images dans le carousel

    for (var i=0;i<5;i++){
            $('#imgLettre' + (i+1)).attr("src", "./Letters/" + altLettre + "/" + altLettre+ ( i+1)  + ".jpg");
        }
});

$(".carousel-item img").click(function () {
    for (i=0;i<5;i++) {
//   Boucle pour savoir si l'image a déjà la classe current et l'enlever
        if ($("#imgLettre" + (i + 1)).hasClass("current")) {
            $("#imgLettre" + (i + 1)).removeClass("current");
        }
    }
    lettreRemplacer = $(this).attr("src");

    $(this).addClass('current');

});
$("#btnSave").click(function () {
    $(".erreurLettre").hide();
    if (lettreRemplacer !== ""){
        $("#" + imageID).attr("src", lettreRemplacer);
        $('#ModalCenter').modal('hide');
    }
    else{
        $(".erreurLettre").show();

    }

});

    $("#ModalCenter").on('hidden.bs.modal', function () {
        for (i=0;i<5;i++) {
            $('#imgLettre' + (i + 1)).attr("src", "");
        }
    });



