/**
 * Créé par David Champagne
 * 2020/05/30
 *
 */

AOS.init();
$(document).ready(function(){
    $('.mes_images').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        adaptiveHeight: true
    });

});
