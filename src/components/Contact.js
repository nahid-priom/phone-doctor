import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    phoneModel: '', // New field for Phone Model
    phoneIssue: '', // New field for Phone Issue
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to API or email)
    console.log(formData);
    // Optionally, reset the form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      phoneModel: '', // Reset new field
      phoneIssue: '', // Reset new field
      message: '',
    });
  };

  return (
    <section className="bg-red-50 py-10 px-4 pt-32 lg:pt-44 lg:px-0">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-6">
          We would love to hear from you! Fill out the form below and we will get back to you shortly.
        </p>

        <div className="bg-white shadow-md rounded-lg p-6 lg:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-red-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-red-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-red-500"
                placeholder="Enter your phone number"
              />
            </div>

            {/* New Field for Phone Model */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="phoneModel">
                Phone Model
              </label>
              <input
                type="text"
                name="phoneModel"
                id="phoneModel"
                value={formData.phoneModel}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-red-500"
                placeholder="Enter your phone model (e.g., iPhone 13, Samsung Galaxy S21)"
              />
            </div>

            {/* New Field for Phone Issue */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="phoneIssue">
                Phone Issue
              </label>
              <input
                type="text"
                name="phoneIssue"
                id="phoneIssue"
                value={formData.phoneIssue}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-red-500"
                placeholder="Describe the issue with your phone"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-red-500"
                placeholder="Enter your message"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
