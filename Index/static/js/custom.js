(function($) {
    "use strict";
    var KIT = {};

    /*--------------------
      * Pre Load
    ----------------------*/
    KIT.WebLoad = function() {
        document.getElementById("loading").style.display = "none";
    };

    /*--------------------
        * Header Class
    ----------------------*/
    KIT.HeaderSticky = function() {
        $(".navbar-toggler").on("click", function(a) {
            a.preventDefault(), $(".header").addClass("fixed-header");
        });
    };

    /*--------------------
        * Menu Close
    ----------------------*/
    KIT.MenuClose = function() {
        $(".navbar-nav .nav-link").on("click", function() {
            var toggle = $(".navbar-toggler").is(":visible");
            if (toggle) {
                $(".navbar-collapse").collapse("hide");
            }
        });
    };

    /*--------------------
        * Smooth Scroll
    ----------------------*/
    KIT.HeaderScroll = function() {
        $('.header a[href*="#"]:not([href="#"])').on("click", function() {
            if (
                location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") ||
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ?
                    target :
                    $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html,body").animate({
                            scrollTop: target.offset().top - 65,
                        },
                        1000
                    );
                    return false;
                }
            }
        });
    };

    /*--------------------
        * Header Fixed
    ----------------------*/
    KIT.HeaderFixed = function() {
        if ($(window).scrollTop() >= 60) {
            $(".header").addClass("fixed-header");
        } else {
            $(".header").removeClass("fixed-header");
        }
    };

    /*--------------------
    * Counter JS
    ----------------------*/
    var a = 0;
    KIT.Counter = function() {
        var oTop = $(".counter-box").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $(".count").each(function() {
                $(this)
                    .prop("Counter", 0)
                    .animate({
                        Counter: $(this).text(),
                    }, {
                        duration: 4000,
                        easing: "swing",
                        step: function(now) {
                            $(this).text(Math.ceil(now));
                        },
                    });
            });
            a = 1;
        }
    };

    /*--------------------
        * Owl
    ----------------------*/
    KIT.ClientSlider = function() {
        var testimonials_slider = $("#client-slider-single");
        testimonials_slider.owlCarousel({
            auto: true,
            loop: true,
            margin: 0,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                991: {
                    items: 1,
                },
                1140: {
                    items: 2,
                },
            },
        });
    };

    KIT.SliderImage = function() {
        var image1 = $(".header-img-item1");
        var image2 = $(".header-img-item2");
        var image3 = $(".header-img-item3");
        var length = 3;
        image1.animate({
            opacity: "1"
        }, "slow");
        var i = 2;
        setInterval(() => {
            if (i === 1) {
                image1.animate({
                    opacity: "1"
                }, "slow");
                image2.animate({
                    opacity: "0"
                }, "slow");
                image3.animate({
                    opacity: "0"
                }, "slow");
            }
            if (i === 2) {
                image1.animate({
                    opacity: "0"
                }, "slow");
                image2.animate({
                    opacity: "1"
                }, "slow");
                image3.animate({
                    opacity: "0"
                }, "slow");
            }
            if (i === 3) {
                image1.animate({
                    opacity: "0"
                }, "slow");
                image2.animate({
                    opacity: "0"
                }, "slow");
                image3.animate({
                    opacity: "1"
                }, "slow");
            }
            i++;
            if (i === length) i = 1;
        }, 3000);
    };

    // Window on Load
    $(window).on("load", function() {
        setTimeout(KIT.WebLoad, 1200)
    });

    $(document).on("ready", function() {
        KIT.HeaderFixed(),
            KIT.ClientSlider(),
            KIT.MenuClose(),
            KIT.Counter(),
            KIT.HeaderScroll(),
            KIT.HeaderSticky(),
            KIT.SliderImage();
    });

    $(window).on("scroll", function() {
        KIT.Counter(), KIT.HeaderFixed();
    });

    //Modal login,forgot password

    $('#Login-Form').parsley();
    $('#Forgot-Password-Form').parsley();
    $('#Login-student-Form').parsley();
    

    $('#FPModal').click(function() {
        $('#login-modal-content').fadeOut('fast', function() {
            $('#forgot-password-modal-content').fadeIn('fast');
        });
    });

    $('#loginModal1').click(function() {
        $('#forgot-password-modal-content').fadeOut('fast', function() {
            $('#login-modal-content').fadeIn('fast');
        });
    });


})(jQuery);