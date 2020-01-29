import React, { Component, createRef } from "react";
import "./Map.css";

const GOOGLE_MAP_API_KEY = AIzaSyASa9m5akT8pSnC7lhiUUPN8ajPneNEI_U;

export class GoogleMap extends Component {
  googleMapRef = createRef();

  componentDidMount() {
    const googleMapScript = document.createElement("script");

    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`;
  }

  createGoogleMap = () =>
    new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 15,
      center: {
        lat: 51.5712,
        lng: -0.1009
      },
      disableDefaultUI: true
    });

  render() {
    return (
      <div
        id="google-map"
        ref={this.googleMapRef}
        style={{ width: "400px", height: "300px" }}
      />
    );
  }
}
