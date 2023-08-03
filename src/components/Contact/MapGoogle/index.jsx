import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import React from "react";
import logo from "/images/logo_icon.png";

export default function MapGoogle() {
  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  const lat = -8.092558;
  const lng = -79.047924;
  if (!isLoaded) return "";
  return (
    <GoogleMap
      options={{
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,

        styles: [
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
              {
                color: "#eeeeee",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "labels.text",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            stylers: [
              {
                saturation: -100,
              },
              {
                invert_lightness: true,
              },
            ],
          },
        ],
      }}
      zoom={16}
      center={{ lat: lat, lng: lng }}
      mapContainerStyle={{ width: "100%", height: "100%" }}
    >
      <MarkerF icon={logo} position={{ lat: lat, lng: lng }} />
    </GoogleMap>
  );
}
