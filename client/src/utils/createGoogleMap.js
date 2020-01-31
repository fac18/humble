// create an instance of a Map class and bind to ref of host <div>, elsewhere declared
const createGoogleMap = (nodeRef, zoom, mapCenter) =>
  new window.google.maps.Map(nodeRef.current, {
    disableDefaultUI: true,
    zoom,
    center: {
      lat: mapCenter.lat,
      lng: mapCenter.lng
    }
  });

export default createGoogleMap;
