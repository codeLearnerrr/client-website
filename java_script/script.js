
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

// Initialize and add the map
function initMap() {
    // The office location
    var office = { lat: -19.919054, lng: -43.938624 };
    // The map, centered at office location
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 18, center: office });
    // The marker, positioned at office
    var marker = new google.maps.Marker({ position: office, map: map });
}

