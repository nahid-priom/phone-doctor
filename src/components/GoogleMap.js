import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const center = [38.9644834, -76.8426285];

const locationIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const LeafletMapComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row py-4 max-w-7xl mx-auto gap-5">
      {/* Map on the Left */}
      <div className="flex-1">
        <MapContainer
          center={center}
          zoom={15}
          style={{ height: "472px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={center} icon={locationIcon}>
            <Popup>Enterprize Plaza, Lanham, MD</Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Address and Hours on the Right */}
      <div className="flex-1 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-red-500">Our Location</h2>
        <div className="text-gray-900 mb-6">
          <p>Enterprize Plaza</p>
          <p>9437 Annapolis Rd</p>
          <p>Lanham, MD 20706</p>
          <p>United States</p>
        </div>

        {/* Business Hours */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-red-500">
            Business Hours
          </h3>
          <ul className="text-gray-800 space-y-2">
            <li className="flex justify-between">
              <span>Friday</span>
              <span>10 AM – 9 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday</span>
              <span>10 AM – 9 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span>11 AM – 7 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Monday</span>
              <span>10 AM – 9 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Tuesday</span>
              <span>10 AM – 9 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Wednesday</span>
              <span>10 AM – 9 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Thursday</span>
              <span>10 AM – 9 PM</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeafletMapComponent;
