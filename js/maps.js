
// Initialize and add the map
function initMap() {
  // The location of Uluru -29.858580, 31.023530
  var location = {lat: -29.858580, lng: 31.023530};
  // The map, centered at 320 west street
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 12, center: location});
  // The marker, positioned at 320 west street
  var marker = new google.maps.Marker({position: location, map: map});
}