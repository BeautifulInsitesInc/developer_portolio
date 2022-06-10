$(window).scroll(function(e) {

    var distanceScrolled = $(this).scrollTop();

    $('.main').css('backdrop-filter', 'blur('+distanceScrolled/60+'px)');

});