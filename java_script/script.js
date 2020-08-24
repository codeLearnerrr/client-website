$(document).ready(function () {
    $(window).scroll(function () {
        let position = $(this).scrollTop();
        if (position >= 540) {
            $('.nav-menu').addClass('custom-navbar');
            $('.text-light').addClass('text-dark');
            $('.text-white').addClass('text-dark');
        } else {
            $('.nav-menu').removeClass('custom-navbar');
            $('.text-light').removeClass('text-dark');
            $('.text-white').removeClass('text-dark');
       }
    });
});

