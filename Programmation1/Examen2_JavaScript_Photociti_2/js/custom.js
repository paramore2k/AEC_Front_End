let maxLettres = 12;
let minLettres = 3;
let nombreDePhotos = 12;
let ancienneLettre = "";
let lettreAchanger = 0;



$("#jstype-submit").click(function () {
    // On enlève les messages d'erreurs s'il y en avait et les lettres précédemment écrites.

    $(".Lettres").html(""),$("#examenciti_form_error").html("");

    // On applique la varaible mot à la valeur du texte entrée

    var mot = $("input#examenciti_form").val();

        if (mot.length >= 3 && mot.length <= 12 && /^[a-zA-Z\*]+$/.test(mot)) {

            (MonMot(mot))

        }
        else{
            $("#examenciti_form_error").html("Votre mot doit contenir entre 3 et 12 caractères et de ne doit pas contenir d'accent");
        }
        // mot.length >= 3 && mot.length <= 12 ? /^[a-zA-Z\*]+$/.test(mot) ? (MonMot(mot), $("input#examenciti_form").blur()) : $("#examenciti_form_error").html("Votre mot ne doit pas contenir d'accent. Utiliser * pour voir les caractères spéciaux.") : $("#examenciti_form_error").html("Votre mot doit contenir entre 3 et 12 caractères.")

});
function MonMot(mot){


    var motEntrer = mot;
    //

    for (i=0;i<=mot.length;i++) {
        if (mot.charAt(i) === "*") {
            var monMot = "CS";
        }
    }




    // On défini la variable C comme étant la grandeur de colonne selon le nombre de lettre entrée.
    var c;

        for (3 === mot.length && (c = "col-4"), (4 === mot.length) && (c = "col-3"), 5 === mot.length && (c = "col"),
         6 === mot.length && (c = "col-2"), 7 === mot.length && (c = "col-1"), 8 === mot.length && (c = "col-1"),
        9 === mot.length && (c = "col"), 10 === mot.length && (c = "col"), 10 === mot.length && (c = "col"),
        10 === mot.length && (c = "col"), 11 === mot.length && (c = "col"), 12 === mot.length && (c = "col-1"), i =1;i<= mot.length;i++){


    }
        for (i=0;i<=mot.length -1;i++) {
            var monMot = mot.charAt(i).toUpperCase();
            $(".Lettres").append(`<div class="${c}"><img src="./Letters/${monMot}/${monMot}1.jpg" class="img-fluid photoimg" alt="${monMot}${i}" id="${monMot}" data-toggle="modal" data-target="#ModalCenter"></div>`);
        }
    $(".photoimg").click(function () {
        // on applique la variable M à "maLettre"
        var maLettre = $(this).attr("id");


        $("#ModalCenter").on('show.bs.modal', function () {
                var image = `<img src="./Letters/${monMot}/${monMot}1.jpg"`;
                $("#ModalCenter").find('.carousel-item').html(`
        ${image} class="d-block img-fluid" alt="${maLettre}${i+1}" id="${monMot}${i}"/>`);

        });
    });


    $("#close").click(function() {
        $("#ModalCenter").find('.carousel-item').html("");
    });

    // $("#ModalCenter").on('hide.bs.modal', function () {
    //     $("#ModalCenter").find('.carousel-inner').append("");
    // })



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