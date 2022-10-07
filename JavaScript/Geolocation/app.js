// Initialize and add the map



// function initMap() {

//   if ('geolocation' in navigator) {
//     /* geolocation is available */
//     // console.log("Available");

//     navigator.geolocation.getCurrentPosition(position => {
//         // console.log(position);
//         // console.log("Coords : ",position.coords.latitude);
//         // console.log("Long : ", position.coords.longitude);
//         const lat = position.coords.latitude;
//         const lng = position.coords.longitude;

//         // The location of Uluru
//         const uluru = { lat: lat, lng: lng };
//         // The map, centered at Uluru
//         const map = new google.maps.Map(document.getElementById("map"), {
//           zoom: 4,
//           center: uluru,
//         });

//         google.maps.event.add

//         // The marker, positioned at Uluru
//         const marker = new google.maps.Marker({
//           position: uluru,
//           map: map,
//         });
//       });
//   } else {
//     /* geolocation IS NOT available */
//   }

// }

// window.initMap = initMap;

//=========================================================
//=========================================================
//=========================================================


function initMap() {

    // The location of Uluru
    const uluru = { lat: 24.005968, lng:  87.776057 };

    const options = {
      zoom: 4,
      center: uluru,
    }
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"),options)

    google.maps.event.addListener(map,"click",
    function(event){
      addMarker(event.latLng,map)
        // var isClicked = false 
        // if(isClicked){
        //   marker.setMapOnAll(null);
        // }else{
        //   addMarker(event.latLng,map)
        // }
        // isClicked = !isClicked
        
    });

    // google.maps.event.addListener(map, "click", (event) => { addMarker(event.latLng, map); }); // from g-docs


    addMarker({lat: 24.005968, lng:  87.776057})


    function addMarker(coords){

      const marker = new google.maps.Marker({
        position: coords,
        map: map,
      });

    }

    // google.maps.event.add

    // // The marker, positioned at Uluru
    // const marker = new google.maps.Marker({
    //   position: uluru,
    //   map: map,
    // });
  }

window.initMap = initMap;