import React from "react";
import "./style.css";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
export default function Map({ data }) {
  const { isLoaded } = useJsApiLoader({
    // googleMapsApiKey: "AIzaSyDn6aXdvyu9kW34MOSTHjUfD_SoE_qgyMg",
    googleMapsApiKey: "AIzaSyD_6qnegcd5vFoQgrI9byn-4FVpl5avyVk",
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <MapData data={data} />;
}
function MapData({ data }) {
  const center = { lat: data.lat, lng: data.lng };
  return (
    <div className="md:h-[20vh] lg:h-[30vh] xl:h-[40vh] 2xl:h-[50vh] h-[30vh]">
      {/* <GoogleMap
        zoom={17}
        center={center}
        mapContainerClassName="map-container"
      >
        <Marker position={center} zIndex={1000} visible={true} opacity={1} />
      </GoogleMap> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.200281115127!2d106.62090061535187!3d10.795967161783466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b818050aba1%3A0xe52b9908ef6ddb55!2zQsO6biDEkOG6rXUgUmVuZyBSZW5n!5e0!3m2!1svi!2s!4v1673525645982!5m2!1svi!2s"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      ></iframe>
      {/* <iframe src="https://platform.twitter.com/widgets/tweet_button.html"></iframe> */}
    </div>
  );
}
