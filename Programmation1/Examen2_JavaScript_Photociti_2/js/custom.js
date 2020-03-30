let nbMots = 12;



$("#jstype-submit").click(function () {
    // Validation et transformation des caractères spéciaux

    for (var e = $("#examenciti_form").val(), t = 0; t < e.length; t++) "é" !== e[t] && "è" !== e[t] && "ê" !== e[t] ||
    (e = e.substr(0, t) + "e" + e.substr(t + 1, e.length)) && "à" === e[t] && (e = e.substr(0, t) + "a" + e.substr(t + 1, e.length));

    // Validation des caractères spéciaux et du nombre de mots requis

    e.length >= 3 && e.length <= 12 ? /^[a-zA-Z]+$/.test(e) ? (MonMot(e), $("input#examenciti_form").blur()) : alert("Votre nom doit contenir uniquement des lettres de l'alphabet. Inscrivez * pour les caractères spéciaux.") : alert("Votre mot doit être entre 3 et 12 caractères.");
});
function MonMot(e){

    let colonnesOffset = "";
        for (3 === e.length && (c = "col-4"), (4 === e.length) && (c = "col-3"), 5 === e.length && (c = "col-2"),
         6 === e.length && (c = "col-2"), 7 === e.length && (c = "col-1"), 8 === e.length && (c = "col-1"),
        9 === e.length && (c = "col-1"), 10 === e.length && (c = "col-1"), 10 === e.length && (c = "col-1"),
        10 === e.length && (c = "col-1"), 11 === e.length && (c = "col-1"), 12 === e.length && (c = "col-1"), i =1;i<= e.length;i++){
    }

    var a = $("<div>", {
        class: c + " " + i
    });
    $(".Lettres").append(a), maLettre, "*" === e[i - 1] && (maLettre = "CS");
    var b = $("<img />", {

        src: "../Letters/"  + maLettre + "/" + e[i] + "1.jpg",
        alt: "Lettre" + i,
        class: "img-fluid",
        id: "Lettre" + i
    });


}