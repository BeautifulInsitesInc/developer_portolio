$(window).scroll(function(e) {

    var distanceScrolled = $(this).scrollTop();
    var blurRatio=distanceScrolled/60;
    var blurAmount = blurRatio;
    var lightAmount=100-blurRatio*8;
    var textOpacity=(100-blurRatio*12)/100;
    if (blurRatio >15) {blurAmount = 15;}
    if (lightAmount >100) {lightAmount=100;}


    //$('#title-container').css('filter', 'blur('+blurAmount+'px)'+'brightness('+lightAmount+'%)');
    // $('#background-desk-image').css('filter', 'blur('+blurAmount+'px)'+'brightness('+lightAmount+'%)');

    // $('#title-container').css('filter', 'opacity('+textOpacity+')');

    $('section#techstack.background').css('filter', 'brightness('+lightAmount+'%)');

});