let maxLettres = 12;
let minLettres = 3;
let nombreDePhotos = 12;
let ancienneLettre = "";
let lettreAchanger = 0;
let nouvelleCouleur = "noir";

// Enlever les accents aigus à partir du formulaire
$(document).on("keypress", "input", function(e){
    if(e.which === 13){
        $(this).removeAccentedChar();
        soumettre();
    }
});

$("#examenciti_form").change(function () {
    $(this).removeAccentedChar();
});
(function () {
    $.fn.removeAccentedChar = function() {
        return this.each(function() {
            var strString = $(this).val();
            strString = strString.replace(/À|Á|Â|Ã|Ä|Å|Ǻ|Ā|Ă|Ą|Ǎ|Α|Ά|Ả|Ạ|Ầ|Ẫ|Ẩ|Ậ|Ằ|Ắ|Ẵ|Ẳ|Ặ|А/g,'a');
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
    $(this).addClass("active");
    $(".monMot").css("background-image", "url('background/" + couleurChoisie + ".jpg");
});

function soumettre() {

    $(".couleurDeFond").removeClass("couleurDeFond");
    // On enlève les messages d'erreurs s'il y en avait et les lettres précédemment écrites.

    $(".Lettres").html(""),$("#examenciti_form_error").html("");
    // On applique la varaible mot à la valeur du texte entrée

    var mot = $("input#examenciti_form").val();

        if (mot.length >= 3 && mot.length <= 12 && /^[a-zA-Z\*]+$/.test(mot)) {
            (MonMot(mot))
        }
        else{
            $("#examenciti_form_error").html("Votre mot doit contenir entre 3 et 12 caractères. Utilisez * pour les accents.");
        }
}

function MonMot(mot){

    // On défini la variable C comme étant la grandeur de colonne selon le nombre de lettre entrée.
    var c = "";

    if (mot.length === 3) {
        var c = "col-4";
    } else if (mot.length === 4) {
        var c = "col-3";
    } else if (mot.length === 5) {
        // Remplacement de col-2 pour col à la permission de Shany
        var c = "col";
    } else if (mot.length === 6) {
        var c = "col-2";
    } else if (mot.length >= 7 && mot.length <= 12) {
        // Remplacement de col-2 pour col à la permission de Shany
        var c = "col";
    }
        // Application de -1 à mot.length car les lettres commencent à 1
        for (i=0;i<=mot.length-1;i++) {
            // Application de +1 au mot pour obtenir 1-2-3 au lieu de 0-1-2
            var monMot = mot[i + 1];

            monMot = mot.charAt(i).toUpperCase();

            if (mot.charAt(i) === "*") {
                monMot = "CS";
            }

                $(".Lettres").append(`<div class="${c}"><img src="./Letters/${monMot}/${monMot}1.jpg" class="img-fluid photoimg" alt="${mot}${i}" id="${mot.charAt(i).toUpperCase()}" data-toggle="modal" data-target="#ModalCenter"></div>`);

        }
            $(".photoimg").click(function () {
                // TODO: Obtenir le ID de l'image pour ensuite pouvoir la remplacer dans le modal
                var maLettre = $(this).attr("id").toUpperCase();

                    //
                    // // TODO: Faire fonctionner le !@!@* de carousel
                    $("#ModalCenter").on('shown.bs.modal', function () {{
                        for (var j=0;j<=5;j++){
                        $('.carousel-item-active .img-fluid, .carousel-item .img-fluid').attr('src', `./Letters/${maLettre}/${maLettre}${j}.jpg`);
                        console.log(j);
                     }}
                    });

            });

    // TODO: Trouver un autre moyen que ça pour faire effacer le carousel lors de la fermerture si besoin est.
    $("#close").click(function() {
        $("#ModalCenter").find('.carousel-item').html("");
    });

    $("#ModalCenter").on('hidden.bs.modal', function () {
        $(".item .item-active").remove();
    });



}