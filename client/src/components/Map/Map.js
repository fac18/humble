import React, { createRef, useEffect, useRef } from "react";
import "./Map.css";

// import utils / helper functions
import createGoogleMap from "../../utils/createGoogleMap";
import createMapMarker from "../../utils/createMapMarker";

// environment variables loaded into Express may not work inside React!
const apiKey = "AIzaSyC8mv0ICHNZs-6vnS_i-JGbwzV4v90blLQ"; // = process.env.GOOGLE_MAP_API_KEY;

// define styles object to be passed to the map div
const mapStyles = {
  width: "80vw",
  height: "50vh",
  padding: "1em",
  margin: "1em"
};

const Map = ({ mapCentre, activeCategory, toggleShare, cards }) => {
  // refs are an 'escape hatch' which create hard links to objects for easy access eg. DOM nodes
  // refs are basically objects like { constant: mutableValueHere } which persist between renders
  // cf. https://reactjs.org/docs/hooks-reference.html#useref
  const googleMapRef = createRef(); // this reference will be attached to the <div> element to contain the map
  const googleMap = useRef(null); // this will reference the map object returned from createGoogleMap
  // for (let i=0; i < cards.length; i++) {
  //   const member.member_name = useRef(null)
  // }
  const marker = useRef(null); // this will reference a marker (ie. a member) to be added to the map

  // useEffect hook which rebuilds map every time (can we just update it instead?)
  useEffect(() => {
    // is this script injection?
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    // on load, create map, associate with googleMap ref,
    googleMapScript.addEventListener("load", () => {
      googleMap.current = createGoogleMap(googleMapRef, 13, mapCentre);
      cards.forEach(member => {
        if (activeCategory) {
          if (member.category_id === activeCategory)
            createMapMarker(googleMap, member.postcode);
        } else {
          createMapMarker(googleMap, member.postcode);
        }
        // member.member_name.current =
      });
      // marker.current = createMapMarker(googleMap, "N4 1AA");
    });
  }, [activeCategory, toggleShare, mapCentre, cards]);

  return <div id="google-map" ref={googleMapRef} style={mapStyles} />;
};

export default Map;
