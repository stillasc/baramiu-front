$(document).ready(function () {

    function mobileSlider() {

        if ($(window).width() < 768) {

            if (!$('.cat-boxes').hasClass('slick-initialized')) {

                $('.cat-boxes').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                    infinite: true,
                    rtl: true,
                    adaptiveHeight: true
                });

            }

        } else {

            if ($('.cat-boxes').hasClass('slick-initialized')) {
                $('.cat-boxes').slick('unslick');
            }

        }
    }

    mobileSlider();

    $(window).on('resize', function () {
        mobileSlider();
    });

});







$('.gallery-slider').slick({
    rtl: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});