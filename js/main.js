/*============================================
                  SERVICE
=============================================*/
$(function () {
    new WOW().init();

})

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
})
/*============================================
                  TEAM
=============================================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });

})
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
})

/*============================================
                  Stats
=============================================*/

$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });
})
/*============================================
                  Clients
=============================================*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
})
/*============================================
                  Navigation
=============================================*/
$(function () {


    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            //hide nav 
            $("nav").removeClass("website-background");
        } else {
            //show nav
            $("nav").addClass("website-background");
        }
    });
})


/*============================================
                  smooth scrolling
=============================================*/
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();
        var section = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
})