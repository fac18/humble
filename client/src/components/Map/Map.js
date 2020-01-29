import React, { Component, createRef } from "react";
import "./Map.css";

export class GoogleMap extends Component {
  googleMapRef = createRef();

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
