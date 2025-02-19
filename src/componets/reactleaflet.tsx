import { MapContainer, TileLayer } from "react-leaflet";
import React from "react";

export default function Map() {
  return (
    <MapContainer
      style={{ height: "500px" }}
      center={[51.505, -14.09]}
      zoom={5}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
    </MapContainer>
  );
}
