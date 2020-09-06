$(function() {
    $('.slider').slick({
        arrows: false,
        asNavfor: '.thumbs',
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true

    });
    $('.thumbs').slick({

        asNavfor: '.slider',
        slidesToShow: 6,
        slidesToScroll: 6,
        focusOnSelect: true,
        centerMode: false
            // variableWidth: true

    });
});