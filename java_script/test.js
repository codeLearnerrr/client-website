// Initialize and add the map
function initMap() {
    console.log("executed");
    // The location of Uluru
    var uluru = { lat: -19.919054, lng: -43.938624 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 18, center: uluru });
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({ position: uluru, map: map });
    }
    
    // https://maps.googleapis.com/maps/api/js?key=AIzaSyCFuu3ziw5Ow4QI8ASz4s0TyktPpv3kI4I&callback=initMap
function second() { console.log("second here!"); }
function third() { console.log("third here!"); }
//      <script defer
//     src="">
// </script>  