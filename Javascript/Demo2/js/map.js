var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 43.731476, lng: -79.762545},
    zoom: 8,
        disableDefaultUI: false
  });

var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);

//set marker
marker = new google.maps.Marker({
    map: map,
    draggable: true,
    // style of animation
    animation: google.maps.Animation.DROP,
    position: {lat: 43.731476, lng: -79.762545}
  });
  // adds bounce on click
  marker.addListener('click', toggleBounce);
}

// bounce toggle
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  };

}
