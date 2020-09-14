let map;

function initMap() {
    // The office location
    var office = { lat: -19.943346 , lng: -44.037707 };
    // The map, centered at office location
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 18, center: office });
    // The marker, positioned at office
   var marker = new google.maps.Marker({ position: office, map: map });
}