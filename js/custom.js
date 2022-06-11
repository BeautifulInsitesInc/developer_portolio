$(window).scroll(function(e) {

    var distanceScrolled = $(this).scrollTop();
    var blurRatio=distanceScrolled/60;
    var blurAmount = blurRatio;
    var lightAmount=100-blurRatio*5;
    if (blurRatio >15) {blurAmount = 15;}
    if (lightAmount <15) {lightAmount=15;}

    $('.no-blur').css('backdrop-filter', 'blur('+blurAmount+'px)'+'brightness('+lightAmount+'%)');
    
    //$('.no-blur').css('backdrop-filter', 'brightness('+lightAmount+'%)');

});