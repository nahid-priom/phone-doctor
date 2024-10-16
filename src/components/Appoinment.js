import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios"; // Import axios for API calls

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
  });

  // State to control the visibility of the thank you modal
  const [showModal, setShowModal] = useState(false);

  // State to handle errors
  const [error, setError] = useState(null);

  // State for loading
  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // Start loading when the form is submitted

    // Format the data according to the API requirements
    const postData = {
      service_name: service, // Pass service from the URL
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      short_notes: model, // short_notes is phoneModel
      appoinment_date: formData.appointmentDate,
      appoinment_time: formData.appointmentTime,
      storeName: capitalizeWords(model), // Assuming storeName is the phone model
    };

    try {
      // Post the data to the API
      const response = await axios.post(
        "https://phonespotbackend.blacktechcorp.com/api/repair-submit",
        postData
      );

      console.log("API Response:", response.data);

      // Show the thank you modal upon success
      setShowModal(true);

      // Hide the modal after 2 seconds
      setTimeout(() => {
        setShowModal(false);
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("There was a problem submitting your appointment. Please try again.");
    } finally {
      setLoading(false); // Stop loading once the API call is finished
    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-3xl pt-32 mx-auto p-6">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 p-2 lg:p-6 rounded-lg shadow-lg mb-2 lg:mb-8">
          <h1 className="text-xl lg:text-4xl font-bold text-white text-center lg:mb-4 flex flex-col gap-2">
            <span>
              Book Appointment for <br />{" "}
              <span className="text-yellow-200">{capitalizeWords(model)}</span>
            </span>
            <span className="text-2xl lg:text-5xl text-yellow-300 font-extrabold">
              {capitalizeWords(service)}
            </span>
          </h1>
        </div>

        {/* Appointment Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-6 space-y-4"
        >
          {[{ label: "Name", type: "text", name: "name" },
            { label: "Email", type: "email", name: "email" },
            { label: "Phone Number", type: "tel", name: "phone" },
            { label: "Address", type: "textarea", name: "address" },
            
            {
              label: "Appointment Date",
              type: "date",
              name: "appointmentDate",
            },
            {
              label: "Appointment Time",
              type: "time",
              name: "appointmentTime",
            },
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

          {/* Loader */}
          {loading && (
            <div className="flex justify-center">
              <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-10 w-10 mb-4"></div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
            disabled={loading} // Disable button when loading
          >
            {loading ? "Submitting..." : "Submit"} {/* Change button text during loading */}
          </button>

          {error && <p className="text-red-500 mt-4">{error}</p>}
        </form>
      </div>

      {/* Thank You Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="text-4xl text-green-500 mb-4">✔</div>
            <h2 className="text-xl font-bold">Thank You!</h2>
            <p className="mt-2 text-center">
              Your appointment for {capitalizeWords(model)}{" "}
              {capitalizeWords(service)} repair has been booked successfully.
            </p>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Appointment;
