let maxLettres = 12;
let minLettres = 3;
let nombreDePhotos = 12;
let ancienneLettre = "";
let lettreAchanger = 0;



$("#jstype-submit").click(function () {
    // On enlève les messages d'erreurs s'il y en avait et les lettres précédemment écrites.

    $(".Lettres").html(""),$("#examenciti_form_error").html("");

    // On applique la varaible mot à la valeur du texte entrée

    for (let mot = $("input#examenciti_form").val(), t = 0; t < mot.length; t++) {
        if (mot.length >= 3 && mot.length <= 12 && /^[a-zA-Z\*]+$/.test(mot)) {


        }
        (MonMot(mot, t))
    }
        // mot.length >= 3 && mot.length <= 12 ? /^[a-zA-Z\*]+$/.test(mot) ? (MonMot(mot), $("input#examenciti_form").blur()) : $("#examenciti_form_error").html("Votre mot ne doit pas contenir d'accent. Utiliser * pour voir les caractères spéciaux.") : $("#examenciti_form_error").html("Votre mot doit contenir entre 3 et 12 caractères.")

});
function MonMot(mot, t){

    var motEntrer = mot.toUpperCase();
    var monMot = mot.charAt(t).toUpperCase();



    // On défini la variable C comme étant la grandeur de colonne selon le nombre de lettre entrée.
    var c;

        for (3 === mot.length && (c = "col-4"), (4 === mot.length) && (c = "col-3"), 5 === mot.length && (c = "col"),
         6 === mot.length && (c = "col-2"), 7 === mot.length && (c = "col-1"), 8 === mot.length && (c = "col-1"),
        9 === mot.length && (c = "col"), 10 === mot.length && (c = "col"), 10 === mot.length && (c = "col"),
        10 === mot.length && (c = "col"), 11 === mot.length && (c = "col"), 12 === mot.length && (c = "col-1"), i =1;i<= mot.length;i++){

            // let b = $(".colLettres").append(`'<img src="./Letters/${motEntrer.charAt(mot)}/${motEntrer.charAt(mot)}1.jpg/">`);

    }
    $(".Lettres").append(`<div class="${c}"><img src="./Letters/${monMot}/${monMot}1.jpg/" class="img-fluid" alt="${monMot}1" id="${monMot}" data-target="modal" data-target="#ModalCenter"></div>`);
    $(".Lettres").click(function () {

            var mot3 = $(this).attr('id');
            console.log(mot3);
            $("#ModalCenter").appendTo("body").modal('show');

            $("#ModalCenter").on('shown.bs.modal', function (mot) {
                $("#ModalCenter").find('.carousel-inner').append(`<img src="./Letters/${monMot}/${monMot}1.jpg/" class="img-fluid" alt="${monMot}${i}" id="${monMot}${i}"/>`);

                })
    });




    // let a = $("<div>", {
    //     class: c +  " "  + i,
    //
    // });


    //
    // var b = $("<img />", {
    //     src: "Letters/"  + motEntrer.charAt(mot) + "/" + motEntrer.charAt(mot) + "1.jpg",
    //     alt: "Lettre" + i,
    //     class: "img-fluid",
    //     id: "Lettre" + i
    // });
    // $(".colLettres").append(b);
}