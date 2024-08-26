import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Appointment = () => {
  const { model } = useParams(); // Get the phone model from the URL parameters

  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  // State to control the visibility of the thank you modal
  const [showModal, setShowModal] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);

    // Show the thank you modal
    setShowModal(true);

    // Hide the modal after 2 seconds
    setTimeout(() => {
      setShowModal(false);
    }, 2000);

    // Here you can add code to handle the form submission, like sending data to a server
  };

  return (
    <>
      <Navbar />

      <div className="container pt-32 mx-auto p-6">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 lg:p-6 rounded-lg shadow-lg mb-2 lg:mb-8">
          <h1 className="text-xl lg:text-4xl font-bold text-white text-center lg:mb-4">
            Book Appointment for {model} Repair
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
          {/* Left Side - Image */}
          <div className="hidden lg:block lg:flex-shrink-0">
            <img
              src={`https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-15-Plus-(2)-(6)-5363.jpg`} // Replace with dynamic image URL if available
              alt={`${model} Repair`}
              className="w-full max-w-sm rounded-lg shadow-md"
            />
          </div>

          {/* Right Side - Appointment Form */}
          <div className="w-full lg:flex-grow">
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-lg rounded-lg p-6 space-y-4"
            >
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              {/* Date Picker */}
              <div>
                <label className="block text-gray-700">Appointment Date</label>
                <input
                  type="date"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              {/* Time Picker */}
              <div>
                <label className="block text-gray-700">Appointment Time</label>
                <input
                  type="time"
                  name="appointmentTime"
                  value={formData.appointmentTime}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Thank You Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="text-4xl text-green-500 mb-4">✔</div>
            <h2 className="text-xl font-bold">Thank You!</h2>
            <p className="mt-2">Your appointment has been booked successfully.</p>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Appointment;
