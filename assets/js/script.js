(function($) {
    'use strict'

    $(document).ready(function() {
        

        /*
        ========================================
        Top Nav
        ========================================
        */
        $(window).on('scroll', function() {
            var wScroll = $(this).scrollTop();
            if (wScroll > 1) {
                $('.top-nav').addClass('topnav');
            } else {
                $('.top-nav').removeClass('topnav');
            };
        });

        /*
        ========================================
        doest work video
        ========================================
        */
        $('.video-play-button').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });

        /*
        ========================================
        Animet Aos
        ========================================
        */
        AOS.init({
            duration: 1000, // values from 0 to 3000, with step 50ms
        });

        /*
        ========================================
        Counter
        ========================================
        */
        $('.counter').countUp({
            'time': 3000,
            'delay': 10
        });

        /*
        ========================================
        Testiminial Logo
        ========================================
        */
        $('.testiminial-logo').owlCarousel({
            loop: true,
            navText: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });

        /*
        ========================================
        Testiminial Content
        ========================================
        */
        $('.testiminial-content').owlCarousel({
            loop: true,
            navText: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 4000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2,
                    margin: 30,
                },
                1000: {
                    items: 3,
                    margin: 30,
                }
            }
        });

        /*
        ========================================
        Footer Auto Height
        ========================================
        */
        var footerHeight = $(".side-fixed").height();
        $(".side-wrapper").css('margin-bottom', footerHeight + 'px');

      
    });


})(jQuery);