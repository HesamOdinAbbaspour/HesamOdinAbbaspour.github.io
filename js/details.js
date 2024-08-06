$('.owl-small-pic').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    autoplay: true,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        400:{
            items:4
        },
        576:{
            items:5
        },
        1000:{
            items:5
        }
    }
});


/***********change photo************/
function change_photo(param) {
    $("#main-product-photo").attr("src", param);
}
/****************/

$('.owl-slider-pic').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    autoplay: true,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        576:{
            items:3
        },
        768:{
            items:4
        },
        1000:{
            items:5
        }
    }
});