import React, { useEffect, useRef } from "react";
import "./Map.css";

const GOOGLE_MAP_API_KEY = AIzaSyASa9m5akT8pSnC7lhiUUPN8ajPneNEI_U;
const myLocation = {
  // Founders and Coders
  lat: 51.5712,
  lng: -0.1009
};

const mapStyles = {
  width: "100%",
  geight: "400px"
};

function GoogleMaps(props) {
  const geegleMapRef = React.createRef();
  const googleMap = useRef(null);
  const marker = useRef(null);

  // helper functions
  const createGoogleMap = () =>
    new window.google.maps.Map(googleMapRef.current, {
      zoom: 15,
      center: {
        // Finsbury Park
        lat: 51.5712,
        lng: -0.1009
      }
    });

  const createMarker = () =>
    new window.google.maps.Marker({
      position: {
        lat: myLocation.lat,
        lng: myLocation.lng
      }
    });

  // useEffect Hook
  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener("load", () => {
      googleMap.current = createGoogleMap();
      marker.current = createMarker();
    });
  });

  return <div id="google-map" ref={googleMapRef} style={mapStyles} />;
}

export default GoogleMaps;
