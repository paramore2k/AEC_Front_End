/**
 * Créé par David Champagne
 * 2020/03/14
 *
 */

function swButton() {
    var radio = $("input[name='listeSW']:checked").val();
   var yoda = document.getElementById('yoda');
   $(yoda).html('<img src="img/yoda1.png" class="col-md-6"/>' +
       '<select class="col-md-6 text-right" id="sw1">' +
       '<option>Yoda</option>' +
       '<option>Obiwan</option>' +
       '<option>Darth Vader</option>' +
       '</select></div></div>');
}
function spButton() {
    var radio = $("input[id='listeMarvel']:checked").val();
    var yoda = document.getElementById('yoda');
    $(yoda).html('<img src="img/spiderman1.png" class="col-md-6"/>' +
        '<select class="col-md-6" id="sw1">' +
        '<option>Spideman</option>' +
        '<option>Thor</option>' +
        '<option>Hulk</option>' +
        '</select></div></div>');
}
function bmButton() {
    var radio = $("input[id='listeDC']:checked").val();
    var yoda = document.getElementById('yoda');
    $(yoda).html('<img src="img/batman2.jpg" class="col-md-3"/>' +
        '<select class="col-md-9" id="sw1">' +
        '<option>Batman</option>' +
        '<option>Superman</option>' +
        '<option>Flash</option>' +
        '<option>Arrow</option>' +
        '</select></div></div>');
}