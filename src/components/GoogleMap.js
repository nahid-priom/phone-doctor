import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const center = [38.9644834, -76.8426285];

const locationIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

const LeafletMapComponent = () => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-red-50">
     
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-red-800 text-white text-sm font-semibold rounded-full mb-4">
            VISIT US
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Location</h2>
          <div className="w-20 h-1 bg-red-800 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Come see us at our convenient location in Lanham, MD
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Map Section */}
          <div className="flex-1 h-[600px] rounded-xl overflow-hidden shadow-xl border-2 border-white relative z-0">
            <MapContainer
              center={center}
              zoom={15}
              style={{ height: "100%", width: "100%" }}
              className="rounded-xl z-0"
              whenCreated={(map) => {
                // Fix for map tiles loading behind other elements
                setTimeout(() => {
                  map.invalidateSize();
                }, 0);
              }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={center} icon={locationIcon}>
                <Popup className="text-center font-sans">
                  <strong className="text-red-800">Phone Spot MD</strong><br />
                  Enterprize Plaza, Lanham
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          {/* Contact Information Section */}
          <div className="flex-1 h-[600px] bg-white rounded-xl shadow-xl p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-800 mr-3" />
                Store Address
              </h3>
              <address className="not-italic text-gray-700 space-y-2">
                <p className="flex items-start">
                  <svg className="w-5 h-5 text-red-800 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>Enterprize Plaza<br />9437 Annapolis Rd<br />Lanham, MD 20706<br />United States</span>
                </p>
              </address>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FontAwesomeIcon icon={faClock} className="text-red-800 mr-3" />
                Business Hours
              </h3>
              <ul className="text-gray-700 space-y-3">
                {[
                  { day: "Monday - Thursday", hours: "10:00 AM - 9:00 PM" },
                  { day: "Friday - Saturday", hours: "10:00 AM - 9:00 PM" },
                  { day: "Sunday", hours: "11:00 AM - 7:00 PM" }
                ].map((item, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span className="font-medium">{item.day}</span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Info</h3>
              <div className="flex items-center text-gray-700 hover:text-red-800 transition">
                <FontAwesomeIcon icon={faPhone} className="text-red-800 mr-3 w-5" />
                <a href="tel:+1234567890">(123) 456-7890</a>
              </div>
              <div className="flex items-center text-gray-700 hover:text-red-800 transition">
                <FontAwesomeIcon icon={faEnvelope} className="text-red-800 mr-3 w-5" />
                <a href="mailto:info@phone-doctor.com">info@phone-doctor.com</a>
              </div>
            </div>

            <div className="mt-8">
              <a 
                href="https://maps.google.com?q=Enterprize+Plaza+9437+Annapolis+Rd+Lanham+MD+20706"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-red-800 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
              >
                Get Directions
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeafletMapComponent;