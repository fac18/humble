import React, { useEffect, useRef } from "react";
import "./Map.css";

const GOOGLE_MAP_API_KEY = process.env.GOOGLE_MAP_API_KEY; // "AIzaSyC8mv0ICHNZs-6vnS_i-JGbwzV4v90blLQ";

// 0.01 deg is ~ 1.1km (circumference of Earth 40000 / 360 = 111.1km)
const mapCenter = {
  //Finsbury Park Area
  lat: 51.5712,
  lng: -0.1009
};

const postcode1 = "N4 3JU"; // hardcode postcode to test

const mapStyles = {
  width: "80%",
  height: "300px"
};

function GoogleMaps(props) {
  // refs are an 'escape hatch' which create hard links to objects for easy access eg. DOM nodes
  // refs are basically objects like { constant: mutableValueHere } which persist between renders
  // cf. https://reactjs.org/docs/hooks-reference.html#useref
  const googleMapRef = React.createRef();
  const googleMap = useRef(null);
  const marker = useRef(null);

  // helper functions
  const createGoogleMap = () =>
    new window.google.maps.Map(googleMapRef.current, {
      zoom: 15,
      center: {
        lat: mapCenter.lat,
        lng: mapCenter.lng
      }
    });

  const postcodeConverter = postcode =>
    fetch(`https://api.postcodes.io/postcodes/${postcode}`)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        let longitude = myJson.result.longitude;
        let latitude = myJson.result.latitude;
        let coords = {
          lat: latitude,
          lng: longitude
        };
        return coords;
      })
      .catch(err => {
        return err;
      });

  const createMarker = postcode => {
    const coordsPromise = postcodeConverter(postcode);
    return coordsPromise.then(coords => {
      new window.google.maps.Marker({
        position: {
          // randomly give or take up to 500m for personal security
          lat: coords.lat + (0.5 - Math.random()) / 100,
          lng: coords.lng + (0.5 - Math.random()) / 100,
          title: "My Location"
        },
        map: googleMap.current
      });
    });
  };

  // useEffect Hook
  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener("load", () => {
      googleMap.current = createGoogleMap();
      marker.current = createMarker(postcode1);
    });
  });

  return <div id="google-map" ref={googleMapRef} style={mapStyles} />;
}

export default GoogleMaps;
