import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

// import styled-components
import Button from "../styled/Button";
import P from "../styled/P";
import Logo from "../styled/Logo";
import Container from "../styled/Container";
import Input from "../styled/Input";
import Form from "../styled/Form";
import TextLink from "../styled/TextLink";

const Landing = () => (
  <>
    <Container>
      <Logo />
      <Form>
        <Input type="email" placeholder="email" />
        <Input type="password" placeholder="password" />
        <Link to="/about">
          <Button type="submit">Login</Button>
        </Link>
      </Form>
    </Container>
    <Container>
      <Button type="button">Sign up</Button>
      <TextLink to="/about">What is humble?</TextLink>
    </Container>
  </>
);

export default Landing;

/*import React, { useEffect, useRef } from "react";
//import "./Map.css";

const GOOGLE_MAP_API_KEY = "AIzaSyC8mv0ICHNZs-6vnS_i-JGbwzV4v90blLQ";

const mapCenter = {
  //Finsbury Park Area
  lat: 51.5712,
  lng: -0.1009
};

const postcode1 = "N4 3JU";

const mapStyles = {
  width: "80%",
  height: "300px"
};

function GoogleMaps(props) {
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
          lat: coords.lat,
          lng: coords.lng,
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

export default GoogleMaps;*/
