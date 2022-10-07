// // Initialize and add the map



function initMap() {

  if ('geolocation' in navigator) {
    /* geolocation is available */
    // console.log("Available");

    navigator.geolocation.getCurrentPosition(position => {
        // console.log(position);
        // console.log("Coords : ",position.coords.latitude);
        // console.log("Long : ", position.coords.longitude);
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        // The location of Uluru
        const uluru = { lat: lat, lng: lng };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: uluru,
        });

        google.maps.event

        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: uluru,
          map: map,
        });
      });
  } else {
    /* geolocation IS NOT available */
  }

}

window.initMap = initMap;

// var lat , lat

// function getLatLng(){

//   if ('geolocation' in navigator) {
    
//     navigator.geolocation.getCurrentPosition(position => {
//       lat = position.coords.latitude;
//       lng = position.coords.longitude;
//     })
    
//   }

// }

// // Initialize and add the map
// function initMap() {

//   // The location of Uluru
//   getLatLng()
//   const uluru = { lat: lat, lng: lng };
//   // The map, centered at Uluru
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: uluru,
//   });
//   // The marker, positioned at Uluru
//   const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//   });
// }

// window.initMap = initMap;





















