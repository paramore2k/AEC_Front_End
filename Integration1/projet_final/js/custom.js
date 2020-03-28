/**
 * Créé par David Champagne
 * 2020/03/15
 *
 */

// Récupérer la source de l'url via le id du modal
var url = $('#keep-modal').attr('src');

// Assigner une url vide à la valeur du iframe quand on ferme le modal
$("#myModal").on('hide.bs.modal', function(){
    $("#keep-modal").attr('src', '');
});

$("#myModal").on('show.bs.modal', function(){
    $("#keep-modal").attr('src', url);
});
