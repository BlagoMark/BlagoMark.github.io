$(function() {

    const header = $('#header');
    const intro = $('#intro');
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    $(window).on("scroll load resize", () => {
        const introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if (scrollPos > introH - 60) {
             header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

    });

    // Smooth scroll 
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault(); 

        let blockId = $(this).data('scroll');
        let elementOffset = $(blockId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 60
        }, 600);
    });

    // Nav toogle
    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

    // Reviews
    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // fade: true,
        arrows: false,
        dots: true
      });

});