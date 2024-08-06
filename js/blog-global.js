$('.slider-blog-big').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        
    }
});

/***********start menu desktop hover*********/

$(".two-level-menu").hover(function() {
    $(".two-level-menu").removeClass("active");
    $(this).addClass("active");
}, function() {
    $(this).removeClass("active");
});

$(".menu-body").hover(function() {},
    function() {
        $(".tow-level-menu-first-child").addClass("active");
});


/***********end menu desktop hover*********/



// START MOBILE MENU
$(document).mouseup(function (e) {
    if ($(".active-s-menu").length) {
        var container = $(".s-menu");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            subject_close();
        }
    }
    if ($(".menu-active").length) {
        var container = $(".menu");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            close_menu();
        }
    }
    if ($(".active-mobile-menu").length) {
        var container = $(".mobile-menu");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            close_mobile_menu();
        }
    }
});

function open_menu() {
    $(".black-menu").show();
    $(".in-main-menu").removeClass("in-main-menu-3");
    $(".in-main-menu").removeClass("in-main-menu-2");
    $(".menu").addClass("menu-active");
}
function close_menu() {
    $(".black-menu").hide();
    $(".menu").removeClass("menu-active");
}

function open_level_two(param) {
    $(".body-level-two").removeClass("body-level-two-active");
    $(param).addClass("body-level-two-active");
    $(".in-main-menu").addClass("in-main-menu-2");
}
function back_level_one() {
    $(".in-main-menu").removeClass("in-main-menu-2");
}
function open_level_three(param) {
    $(".body-level-three").removeClass("body-level-three-active");
    $(param).addClass("body-level-three-active");
    $(".in-main-menu").addClass("in-main-menu-3");
}
function open_level_four(param) {
    $(".body-level-four").removeClass("body-level-four-active");
    $(param).addClass("body-level-four-active");
    $(".in-main-menu").addClass("in-main-menu-4");
}
function back_level_two() {
    $(".in-main-menu").removeClass("in-main-menu-3");
}
function back_level_three() {
    $(".in-main-menu").removeClass("in-main-menu-4");
}
function open_filter(param) {
    $(param).slideToggle();
}
function open_filter_foure(param) {
    $(param).slideToggle();
}

// END MOBILE MENU


/**************/
$(document).ready(function () {

    var oldTop = 0;
    var flag_menu = 0;
    // $(".menu-mypage").hover(
    //     function () {
    //         $(".black-menu").show();
    //     },
    //     function () {
    //         $(".black-menu").hide();
    //     }
    // );

    $(window).scroll(function () {
        var nowTop = $(this).scrollTop();
        if (oldTop > nowTop) {
            $(".header").addClass("header-menu-active-2");
            flag_menu = 1;
        } else {
            $(".header").removeClass("header-menu-active-2");
        }

        if ($(this).scrollTop() > 40) {
            $(".header").addClass("header-menu-active");
        } else if ($(this).scrollTop() < 40) {
            $(".header").removeClass("header-menu-active");
        }

        oldTop = nowTop;
    });
});
