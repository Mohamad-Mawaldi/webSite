/*============================================
                  SERVICE
=============================================*/
$(function () {
    new WOW().init();

});

/*============================================
                  WORK
=============================================*/
$(function () {
    $('#work').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
/*============================================
                  TEAM
=============================================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    });

});
/*============================================
                  TESTIMONIALS
=============================================*/
$(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

/*============================================
                  Stats
=============================================*/

$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });
});
/*============================================
                  Clients
=============================================*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 3
            },
            480: {
                items: 3
            },
            768: {
                items: 5
            },
            992: {
                items: 6
            }
        }
    });
});
/*============================================
                  Navigation
=============================================*/
$(function () {


    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            //hide nav 
            $("nav").removeClass("website-background");
            $("#back-to-top").fadeOut();
        } else {
            //show nav
            $("nav").addClass("website-background");
            $("#back-to-top").fadeIn();
        }
    });
});


/*============================================
                  smooth scrolling
=============================================*/
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();
        var section = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section).offset().top - 50
        }, 1250, "easeInOutExpo");
    });
});

/*============================================
        close mobile menu ob click
=============================================*/
$(function () {

    $("#navbar-menu ul li a").on("click touch", function () {

        $(".navbar-toggler").click();

    });

});