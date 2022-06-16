$(window).scroll(function(e) {

    var distanceScrolled = $(this).scrollTop();
    var blurRatio=distanceScrolled/60;
    var blurAmount = blurRatio;
    var lightAmount=100-blurRatio*8;
    var textOpacity=(100-blurRatio*12)/100;
    if (blurRatio >15) {blurAmount = 15;}
    if (lightAmount <15) {lightAmount=15;}


    // $('.no-blur').css('backdrop-filter', 'blur('+blurAmount+'px)'+'brightness('+lightAmount+'%)');
    // $('div#web-professional-box').css('filter', 'opacity('+textOpacity+')');
    // $('.background-image').css('filter', 'opacity('+textOpacity+')');

    //$('.no-blur').css('backdrop-filter', 'brightness('+lightAmount+'%)');

});