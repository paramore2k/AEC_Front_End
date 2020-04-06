let lettreRemplacer  = "";
let nouvelleCouleur = "noir";
let validationMot = "";
let maLettre = "";
let altLettre = "";
let srcLettre = [];
let imageID = "";

// Enlever les accents aigus à partir du formulaire
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
    let couleurChoisie = $(this).attr("id");
    $(".monMot").css("background-image", "url('background/" + couleurChoisie + ".jpg");
});

function soumettre() {

    // On enlève les messages d'erreurs s'il y en avait et les lettres précédemment écrites.

        $("#examenciti_form_error").html("");
    // On applique la varaible mot à la valeur du texte entrée

    var mot = $("input#examenciti_form").val();

        if (mot.length >= 3 && mot.length <= 12 && /^[a-zA-Z\*]+$/.test(mot)) {
            $(".couleurDeFond").removeClass("couleurDeFond");

            ajusterColonnes(mot);
            placerLettres(mot);
        }
        else if(/^[0-9!.,/]+$/.test(mot)){
            $(".Lettres, .text-dark, .nouvelleCouleur").addClass("couleurDeFond");
            $("#examenciti_form_error").html("Votre mot ne doit contenir que des lettres de l'alphabet");

        }
        else{
            $(".Lettres, .text-dark, .nouvelleCouleur").addClass("couleurDeFond");
            $("#examenciti_form_error").html("Votre mot doit contenir entre 3 et 12 caractères. Utilisez * pour les accents.");
        }
}

function ajusterColonnes() {

    var mot = $("input#examenciti_form").val();

    for (i=0;i<mot.length;i++){
    // On défini la variable C comme étant la grandeur de colonne selon le nombre de lettre entrée.
    let c = "";

    if (mot.length === 3) {
        $("#idLettre" +(i+1)).addClass("col-4");
    } else if (mot.length === 4) {
        $("#idLettre" +(i+1)).addClass("col-3");
    } else if (mot.length === 5) {
        // Remplacement de col-2 pour col à la permission de Shany
        $("#idLettre" +(i+1)).addClass("col");
    } else if (mot.length === 6) {
        $("#idLettre" +(i+1)).addClass("col-2");
    } else if (mot.length >= 7 && mot.length <= 12) {
        // Remplacement de col-2 pour col à la permission de Shany
        $("#idLettre" +(i+1)).addClass("col");
        }

    }

}
function placerLettres(mot){
    // Application de -1 à mot.length car les lettres commencent à 1
    for (i = 0; i < mot.length; i++) {
        // Application de +1 au mot pour obtenir 1-2-3 au lieu de 0-1-2
        altLettre = $("#lettreDuMot" + (i+1)).attr('alt', mot[i]);

        srcLettre[i] = "Letters" + "/" + mot[i] + "/" +  mot[i] + "1.jpg";
        $("#lettreDuMot" + (i+1)).attr("src", srcLettre[i]);
        $("#idLettre" + (i + 1)).css("display", "flex");
        monMot = mot.charAt(i).toUpperCase();
        var monMot = mot[i + 1];
        if (mot.charAt(i) === "*") {
            monMot = "CS";
        }


        // $(".Lettres").append(`<div class="${c}"><img src="./Letters/${mot[i]}/${mot[i]}1.jpg" class="img-fluid photoimg" alt="${alt[i]}${i+1}" id="${alt[i]}${i+1}" data-toggle="modal" data-target="#ModalCenter"></div>`);

    }
    //   Boucle pour savoir si l'image a déjà la classe current et l'enlever

    $(".malettre").click(function () {
        for (var i=0;i<5;i++){
            if ($("#imgLettre" + (i+1)).hasClass("current")) {
                $("#imgLettre" + (i+1)).removeClass("current");
            }
        }
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
    $("erreurLettre").hide();
    for (var i=0;i<5;i++) {
        if ($("#imgLettre" + (i + 1)).hasClass("current")) {
            $("#imgLettre" + (i + 1)).removeClass("current");
        }
    }

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
    // $("#close").click(function() {
    //     $("#ModalCenter").find('.carousel-item').html("");
    // });


    $("#ModalCenter").on('hidden.bs.modal', function () {
        for (i=0;i<5;i++) {
            $('#imgLettre' + (i + 1)).attr("src", "");
        }
    });



