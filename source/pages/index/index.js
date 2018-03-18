import '../../components/head/fullpage/jquery.fullPage'
import Parallax from 'parallax-js'

$(document).ready(function () {
    /*
    *
    * initialize variables
    *
    *
    */
    const $first_slide_logo = $('.logo');
    const $first_slide_stena = $('.stena');
    const $first_slide_img_panki_v_kremle = $('.text-panki');
    const $second_slide_bg = $('.steklo');
    const $second_slide_block_bottom = $('.block-bottom');
    const $full_page_slide_section = $('.section');
    /*
    *
    * add animation css class for Animate.css in first_slide
    *
    */
    $first_slide_stena.addClass('animate bounceInUp');
    $first_slide_img_panki_v_kremle.addClass('animate jackInTheBox');

    setTimeout(function () {
        $first_slide_logo.addClass('animate bounceInRight');
    }, 1500);

    setTimeout(function () {
        $first_slide_img_panki_v_kremle.hide();
        $first_slide_logo.hide();
    }, 3500);

    setTimeout(function () {
        $first_slide_stena.addClass('slideOutDown').removeClass('bounceInUp');
        $first_slide_stena.addClass('animated bounceInDown');
    }, 3500);

    setTimeout(function () {
        /*
        *
        * change class animate for elements in first_slide
        *
        */

        /*
        *
        * remove first_slide
        *
        */
        $first_slide_stena.remove();
        /*
        *
        * manipulate with Fullpage selector
        *
        */
        $full_page_slide_section.css({display: 'table'});
        $('.slide-one').addClass('active');
        $('#fullpage').css({background: 'white'});
        /*
        *
        * manipulate second_slide
        *
        */
        $second_slide_bg.addClass('animated zoomIn').css({opacity: '1', transition: "opacity .5s"});
        /*
        *
        * animate logic for second_slide
        *
        */
        setTimeout(function () {
            /*
            *
            * initialize paralax effect
            *
            */
            let scene = document.getElementById('scene');
            $('.bounceInUp').removeClass('bounceInUp');
            let parallaxInstance = new Parallax(scene, {
                pointerEvents:true
            });
            parallaxInstance.enable();
        }, 2000);

        setTimeout(function () {
            $($second_slide_block_bottom).addClass('animated bounceInUp').css({opacity: '1', transition: "opacity 0s"});
        },300);


        setTimeout(function () {
            $('.gos-kreml').addClass('animated bounceIn').css({opacity: 1});
        },1100);

        setTimeout(function () {
            $('.date').addClass('animated bounceIn').css({opacity: 1});
        },1600);

        // setTimeout(function () {
        //     $('.logo2').addClass('animated bounceIn').css({opacity: 1});
        // },4000);

        setTimeout(function () {
            $('.warn').addClass('animated bounceIn').css({opacity: 1});
        },2200);

        setTimeout(function () {
            $('.buy-ticket').addClass('animated bounceIn').css({opacity: 1});
        },3000);

        setTimeout(function () {
            $('.arrow').css({opacity: 1});
        },4000);

    }, 4400);

    /*
    *
    * create animated elements logic
    *
    */
    setTimeout(function () {
        /*
        *
        * initialize FullPage plugin
        *
        */
        $('#fullpage').fullpage({
            navigation: false,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSectionDelay: 1000,
            scrollBar: false,
            responsiveWidth: 900,
            loopTop: false,
            loopBottom: true,
            controlArrows: false,

            onLeave: function(index, nextIndex, direction) {
                // if (direction === 'up' && nextIndex <= 3) {
                //     console.log("1234");
                //     return false;
                // } else {
                //     return true;
                // }
            },

            afterLoad: function(anchorLink, index) {

                if(index === 2) {
                    
                }

                if(index === 2) {
                    $('.screen-effect-for-img').addClass('animated fadeInRight');
                    $('.screen-effect-for-text').addClass('animated fadeInUp');
                    setTimeout(function () {
                        $('.no-melancholy').addClass('animated swing').css({opacity: 1});
                    },1500);
                    setTimeout(function () {
                        $('.no-melancholy').removeClass('swing').css({transform: 'rotate(0)'});
                    },2200);
                }

                if(index === 3) {
                    $('.img-slide').addClass('animated fadeInRight');
                    $('.text-silde').addClass('animated fadeInUp');
                    setTimeout(function () {
                        $('.logo2').addClass('animated swing').css({opacity: 1});
                    },1500);
                    setTimeout(function () {
                        $('.logo2').removeClass('swing').css({transform: 'rotate(-15deg)'});
                    },2200);
                    setTimeout(function () {
                        $('.buy-ticket').css({display: 'block'});
                    }, 2400);
                }

                if (index === 3) {
                    $.fn.fullpage.moveTo(0, 0);
                    return true
                }
            }

        });

        setTimeout(function () {
            $('.slide-one > .fp-tableCell').attr('id', 'scene');
        },1000)
    },4400);


    $(document).on('click', '.buy-ticket', function () {
        // $.fn.fullpage.moveTo(2,0);
    })

});