"use client";
import { useState, useRef } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import "./map_component.css"

const Map = () => {

  const [location, setLocation] = useState({ lat: 50, lng: 20 });
  const [center, setCenter] = useState({ lat: 50, lng: 20 });
  const [zoom, setZoom] = useState(12);
  const autocompleteRef = useRef(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading....</div>;

  function changeLocation(e) {
    setLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() })
  };

  function handlePlaceChanged() {
    const place = autocompleteRef.current.getPlace();
    const latlng = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    }
    setLocation(latlng);
    setCenter(latlng);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px"
      }}
    >
      <Autocomplete
        onLoad={(autocomplete) => {
          autocompleteRef.current = autocomplete;
        }}
        onPlaceChanged={handlePlaceChanged}
        options={{ fields: ["address_components", "geometry", "name"] }}
        mapContainerStyle
      >
        <input type="text" placeholder="Search for location..." class="bg-black-50 border border-white-300 text-white-900 text-lg text-center rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow shadow-blue-500/50 focus:shadow-md focus:shadow-white" style={{ width: "20vw", height: "3vw" }}/>
      </Autocomplete>
      
      <GoogleMap
        zoom={zoom}
        center={center}
        mapContainerClassName="map"
        mapContainerStyle={{ width: "80vw", height: "30vw", margin: "auto", borderRadius: "20px"}}
        mapTypeId="roadmap"
        onClick={changeLocation}
      >
        <Marker position={location} />
      </GoogleMap>
    </div>
  );
};

export default Map;