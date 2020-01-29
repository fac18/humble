import React, { Component, createRef } from "react";
import "./Map.css";

export class GoogleMap extends Component {
  googleMapRef = createRef();

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
