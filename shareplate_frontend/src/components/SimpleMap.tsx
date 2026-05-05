import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";

type Point = { lat: number; lng: number };

export default function SimpleMap({
  pickup,
  recipient,
  route,
}: {
  pickup: Point;
  recipient: Point;
  route: Point[];
}) {
  return (
    <MapContainer
      center={pickup}
      zoom={13}
      style={{ height: "300px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker position={pickup} />
      <Marker position={recipient} />

      {route.length > 0 && <Polyline positions={route} />}
    </MapContainer>
  );
}
