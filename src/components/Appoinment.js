import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Appointment = () => {
  const { model, service } = useParams(); // Get the phone model and service from the URL parameters

  // Utility function to capitalize model and service names
  const capitalizeWords = (str) =>
    str.replace(/\b\w/g, (char) => char.toUpperCase());

  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    appointmentDate: "",
    appointmentTime: "",
    phoneIssue: "",
  });

  // State to control the visibility of the thank you modal
  const [showModal, setShowModal] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

      <div className="max-w-3xl pt-32 mx-auto p-6">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 p-2 lg:p-6 rounded-lg shadow-lg mb-2 lg:mb-8">
        <h1 className="text-xl lg:text-4xl font-bold text-white text-center lg:mb-4 flex flex-col gap-2">
  <span>
    Book Appointment for <span className="text-yellow-200">{capitalizeWords(model)}</span>
  </span>
  <span className="text-2xl lg:text-5xl text-yellow-300 font-extrabold">
    {capitalizeWords(service)}
  </span>
</h1>

        </div>

        {/* Appointment Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 space-y-4">
          {[
            { label: "Name", type: "text", name: "name" },
            { label: "Email", type: "email", name: "email" },
            { label: "Phone Number", type: "tel", name: "phone" },
            { label: "Address", type: "textarea", name: "address" },
            { label: "Phone Issue", type: "textarea", name: "phoneIssue", placeholder: "Describe the issue you're facing with your phone" },
            { label: "Appointment Date", type: "date", name: "appointmentDate" },
            { label: "Appointment Time", type: "time", name: "appointmentTime" },
          ].map((input) => (
            <div key={input.name}>
              <label className="block text-gray-700">{input.label}</label>
              {input.type === "textarea" ? (
                <textarea
                  name={input.name}
                  value={formData[input.name]}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder={input.placeholder}
                  required
                />
              ) : (
                <input
                  type={input.type}
                  name={input.name}
                  value={formData[input.name]}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Thank You Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="text-4xl text-green-500 mb-4">✔</div>
            <h2 className="text-xl font-bold">Thank You!</h2>
            <p className="mt-2">
              Your appointment for {capitalizeWords(model)} {capitalizeWords(service)} repair has been booked successfully.
            </p>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Appointment;
