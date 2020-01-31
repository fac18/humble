import postcodeConverter from "./postcodeConverter";

const createMapMarker = (mapRef, postcode) => {
  const coordsPromise = postcodeConverter(postcode);
  return coordsPromise.then(coords => {
    new window.google.maps.Marker({
      position: {
        // randomly give or take up to 500m for personal security
        // 0.01 deg is ~ 1.1km (circumference of Earth 40000 / 360 = 111.1km)
        lat: coords.lat + (0.5 - Math.random()) / 100,
        lng: coords.lng + (0.5 - Math.random()) / 100,
        title: "My Location"
      },
      map: mapRef.current
    });
  });
};

export default createMapMarker;
