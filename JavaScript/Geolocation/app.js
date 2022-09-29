if ('geolocation' in navigator) {
    /* geolocation is available */
    // console.log("Available");

    navigator.geolocation.getCurrentPosition(position => {
        // console.log(position);
        // console.log("Coords : ",position.coords.latitude);
        // console.log("Long : ", position.coords.longitude);
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
      });
  } else {
    /* geolocation IS NOT available */
  }

  function initMap() {
    const myLatLng = { lat: -25.363, lng: 131.044 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: myLatLng,
    });
  
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    });
  }
  
  window.initMap = initMap;