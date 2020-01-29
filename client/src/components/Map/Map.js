import React, { Component, createRef } from "react";
import "./Map.css";

const GOOGLE_MAP_API_KEY = AIzaSyASa9m5akT8pSnC7lhiUUPN8ajPneNEI_U;

export class GoogleMap extends Component {
  googleMapRef = React.createRef();

  componentDidMount() {
    const googleMapScript = document.createElement("script");

    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`;

    window.document.body.appendChild(googleScript)

    googleScript.addEventListener('load', {
        this.googleMap = this.createGoogleMap(),
        this.marker = this.createMarker()
    })
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

    createMarker = () => new window.google.maps.Marker({
        position: { lat: 51.5637, lng: -0.1077 },
        map: this.googleMap,
        title: 'founders and coders' 
    })

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

