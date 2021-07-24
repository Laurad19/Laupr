import GoogleMapReact from "google-map-react";

export default function App() {
  return (
    <div class="mapa">
      <GoogleMapReact
        defaultCenter={{lat: 19.118902379767686, lng: -104.36490829205958}}
        defaultZoom={11}
      ></GoogleMapReact>
    </div>
  );
}