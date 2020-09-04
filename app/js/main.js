$(function() {
    $('.slider').slick({
        arrows: false,
        asNavfor: '.thumbs',
        slidesToShow: 1,
        slidesToScroll: 1,

    });
    $('.thumbs').slick({

        asNavfor: '.slider',
        slidesToShow: 6,
        slidesToScroll: 6,
        focusOnSelect: true,
        variableWidth: true

    });
});