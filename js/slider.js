$(document).ready(function(){
    $('.slides').slick({
        slidesToScroll: 1,
        centerMode: true,
        prevArrow: '<button type="button" class="arrow-prev"><img src="./img/portfolio/prev.png" alt="Arrow prev"/></button>',
        nextArrow: '<button type="button" class="arrow-next"><img src="./img/portfolio/next.png" alt="Arrow next"/></button>',
        adaptiveHeight: true,
        dots: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    arrows: true,
                    dots: true
                }
            }
            ]
    });
});