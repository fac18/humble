import React, { createRef, useEffect, useRef } from "react";
import "./Map.css";

// import utils / helper functions
import createGoogleMap from "../../utils/createGoogleMap";
import createMapMarker from "../../utils/createMapMarker";

// environment variables loaded into Express may not work inside React!
const apiKey = process.env.GOOGLE_MAP_API_KEY; // "AIzaSyC8mv0ICHNZs-6vnS_i-JGbwzV4v90blLQ";

// 0.01 deg is ~ 1.1km (circumference of Earth 40000 / 360 = 111.1km)
// hardcode map centre as Finsbury Park
const finsburyPark = {
  //Finsbury Park Area
  lat: 51.5712,
  lng: -0.1009
};

const postcode1 = "N4 3JU"; // hardcode postcode for testing

// define styles object to be passed to the map div
const mapStyles = {
  width: "80%",
  height: "300px"
};

GoogleMaps = props => {
  // refs are an 'escape hatch' which create hard links to objects for easy access eg. DOM nodes
  // refs are basically objects like { constant: mutableValueHere } which persist between renders
  // cf. https://reactjs.org/docs/hooks-reference.html#useref
  const googleMapRef = createRef(); // this reference will be attached to the <div> element to contain the map
  const googleMap = useRef(null); // this will reference the map object returned from createGoogleMap
  const marker = useRef(null); // this will reference a marker (ie. a member) to be added to the map

  // useEffect Hook
  useEffect(() => {
    // is this script injection?
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    // on load, create map, associate with googleMap ref,
    googleMapScript.addEventListener("load", () => {
      googleMap.current = createGoogleMap(googleMapRef, 15, finsburyPark);
      marker.current = createMapMarker(googleMap, postcode1);
    });
  });

  return <div id="google-map" ref={googleMapRef} style={mapStyles} />;
};

export default GoogleMaps;
