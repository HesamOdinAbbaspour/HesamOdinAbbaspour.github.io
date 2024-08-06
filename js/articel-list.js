/*********** start slider *********/
var swiper = new Swiper(".banner-slider", {
    autoplay: true,
    parallax: true,
    spaceBetween: 30,
    effect: "fade",
    speed: 3000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
/*********** end slider *********/