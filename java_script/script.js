
//Detects when to place white background in navbar
$(document).ready(function () {
    $('.nav-button').click(function () {
        $('.nav-button').toggleClass('change')
    });
    $(window).scroll(function () {
        let position = $(this).scrollTop();
        if (position >= 540) {
            $('.nav-menu').addClass('custom-navbar');

        } else {
            $('.nav-menu').removeClass('custom-navbar');

        }
    });
});
//enables navbar close auto-click only in mobile mode
var innerWidth = window.innerWidth;
if (innerWidth < 920) {
    var navbar = document.querySelector(".navbar-nav");
    navbar.addEventListener('click', () => {
        document.getElementById("nav-button-hamburger").click();
    })
}



