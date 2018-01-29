import '../../components/head/fullpage/jquery.fullPage'
import Parallax from 'parallax-js'

$(document).ready(function () {

    $('#fullpage').fullpage({
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
    });

    $('.slide-one').addClass('animated bounceInUp');

    $('.text-panki').addClass('animated zoomInLeft');

    $('.logo').addClass('animated rotateIn');

    setTimeout(function () {
        $('.slide-one').addClass('slideOutDown').removeClass('bounceInUp');
        setTimeout(function () {
            $('.slide-one').remove();
            $('.slide-two').addClass('active');
            $('#fullpage').css({background: 'white'})
        },1000)
    },6000);

    $('.slide-two > .fp-tableCell').attr('id', 'scene');
    //
    // let scene = document.getElementById('scene');
    // let parallaxInstance = new Parallax(scene);
    // parallaxInstance.enable();

});