let lettreRemplacer  = "";
let altLettre = "";
let srcLettre = [];
let imageID = "";
let couleurChoisie = "noir";
let couleurPrecedente = "noir";
let monMot = [];
let mot = [];
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

    var mot = $("input#examenciti_form").val();

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

function effacerLettres(){
    for (i=0;i<=12;i++) {
        $('#lettreDuMot' + (i + 1)).attr("src", "");
        $("#idLettre" + (i + 1)).removeClass();
    }
}

function ajusterColonnes(mot) {

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

function placerLettres(mot){

    for (i = 0; i < mot.length; i++) {
        if (mot[i] === "*"){
            mot[i] = "CS";
            altLettre = $("#lettreDuMot" + (i + 1)).attr('alt', mot[i]);
            srcLettre[i] = "Letters" + "/" + "CS" + "/" +  "CS" + "1.jpg";
        }
        else {
            altLettre = $("#lettreDuMot" + (i + 1)).attr('alt', mot[i]);
            srcLettre[i] = "Letters" + "/" + mot[i] + "/" + mot[i] + "1.jpg";
        }


        $("#lettreDuMot" + (i+1)).attr("src", srcLettre[i]);

        $("#idLettre" + (i + 1)).css("display", "flex");


        // Ancienne approche à retravailler éventuellement

        // $(".Lettres").append(`<div class="${c}"><img src="./Letters/${mot[i]}/${mot[i]}1.jpg" class="img-fluid photoimg" alt="${alt[i]}${i+1}" id="${alt[i]}${i+1}" data-toggle="modal" data-target="#ModalCenter"></div>`);

    }
    //   Boucle pour savoir si l'image a déjà la classe current et l'enlever

    $(".malettre").click(function () {

        for (var i=0;i<5;i++){
            if ($("#imgLettre" + (i+1)).hasClass("current")) {
                $("#imgLettre" + (i+1)).removeClass("current");
            }
        }
        $(".erreurLettre").hide();
        imageID = $(this).attr("id");
        // Pour faire apparaître les images dans le carousel
        altLettre = $(this).attr("alt");


        for (var i=0;i<5;i++){
            $('#imgLettre' + (i+1)).attr("src", "./Letters/" + altLettre + "/" + altLettre + ( i+1)  + ".jpg");
        }
    });

}
$(".carousel-item img").click(function () {
//   Boucle pour savoir si l'image a déjà la classe current et l'enlever

    lettreRemplacer = $(this).attr("src");
    $(this).addClass("current");

});
$("#btnSave").click(function () {
    $("#erreurLettre").hide();
    if (lettreRemplacer !== ""){
        $("#" + imageID).attr("src", lettreRemplacer);
        $('#ModalCenter').modal('hide');
    }
    else{
        $("#erreurLettre").show();
    }

});


    // TODO: Trouver un autre moyen que ça pour faire effacer le carousel lors de la fermerture si besoin est.
    $("#close").click(function() {
        $("#ModalCenter").find('.carousel-item').html("");
    });


    $("#ModalCenter").on('hidden.bs.modal', function () {
        for (i=0;i<5;i++) {
            $('#imgLettre' + (i + 1)).attr("src", "");
        }
    });



