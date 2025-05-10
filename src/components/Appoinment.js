import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

const Appointment = () => {
  const { model, service } = useParams();

  const formatTitle = (str) => 
    str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    appointmentDate: "",
    appointmentTime: "",
    notes: ""
  });

  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Valid email required";
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "10-digit phone number required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.appointmentDate) newErrors.appointmentDate = "Date is required";
    if (!formData.appointmentTime) newErrors.appointmentTime = "Time is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const nextStep = () => {
    if (validateStep1()) setCurrentStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep2()) return;

    setLoading(true);
    
    const postData = {
      service_name: service,
      ...formData,
      short_notes: `${model} - ${formData.notes}`,
      storeName: formatTitle(model)
    };

    try {
      await axios.post(
        "https://backend.phonespotmd.com/api/repair-submit",
        postData
      );
      setShowModal(true);
      setTimeout(() => setShowModal(false), 3000);
    } catch (error) {
      setErrors({ submit: "Submission failed. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all";
  const errorClasses = "text-red-500 text-sm mt-1";

  return (
    <div className="min-h-screen pt-20 flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* Progress Steps */}
        <div className="max-w-md mx-auto mb-12">
          <div className="flex justify-center gap-20 relative">
            <div className="absolute top-1/2 h-1 bg-gray-200 w-full -z-10"></div>
            <div 
              className="absolute top-1/2 h-1 bg-red-600 transition-all duration-300 -z-10" 
              style={{ width: `${currentStep === 1 ? '50%' : '100%'}` }}
            ></div>
            {[1, 2].map(step => (
              <div key={step} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= step ? 'bg-red-600 text-white' : 'bg-white border-2 border-gray-300 text-gray-400'} font-medium`}>
                  {step}
                </div>
                <span className={`mt-2 text-sm font-medium ${currentStep >= step ? 'text-red-600' : 'text-gray-500'}`}>
                  {step === 1 ? 'Your Details' : 'Appointment'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-red-800 to-red-600 p-8 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {formatTitle(service)} Service
            </h1>
            <p className="text-red-100">
              For your {formatTitle(model)} device
            </p>
          </div>

          {/* Multi-step Form */}
          <form onSubmit={handleSubmit} className="p-8">
            {currentStep === 1 ? (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h2>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`${inputClasses} ${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && <p className={errorClasses}>{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`${inputClasses} ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className={errorClasses}>{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`${inputClasses} ${errors.phone ? 'border-red-500' : ''}`}
                    />
                    {errors.phone && <p className={errorClasses}>{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows="3"
                    className={inputClasses}
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200"
                  >
                    Continue to Appointment
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Schedule Your Appointment</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Date</label>
                    <input
                      type="date"
                      name="appointmentDate"
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`${inputClasses} ${errors.appointmentDate ? 'border-red-500' : ''}`}
                    />
                    {errors.appointmentDate && <p className={errorClasses}>{errors.appointmentDate}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Time</label>
                    <input
                      type="time"
                      name="appointmentTime"
                      value={formData.appointmentTime}
                      onChange={handleChange}
                      className={`${inputClasses} ${errors.appointmentTime ? 'border-red-500' : ''}`}
                    />
                    {errors.appointmentTime && <p className={errorClasses}>{errors.appointmentTime}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Additional Notes</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Describe your issue or special requests"
                    className={inputClasses}
                  />
                </div>

                {errors.submit && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4">
                    <p className="text-red-700">{errors.submit}</p>
                  </div>
                )}

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="text-red-600 hover:text-red-800 font-medium py-3 px-6 rounded-lg transition duration-200"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200 disabled:opacity-75 flex items-center"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      "Confirm Appointment"
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </main>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full transform transition-all duration-300 scale-95 animate-fadeIn">
            <div className="p-8 text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Appointment Confirmed!</h3>
              <p className="text-gray-600 mb-4">
                Your {formatTitle(service)} service for {formatTitle(model)} is scheduled.
              </p>
              <p className="text-gray-500 text-sm">
                A confirmation has been sent to your email.
              </p>
            </div>
            <div className="bg-gray-50 px-4 py-3 flex justify-center">
              <button
                onClick={() => setShowModal(false)}
                className="text-red-600 hover:text-red-800 font-medium py-2 px-4 rounded transition duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Appointment;