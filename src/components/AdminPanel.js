import React, { useState, useEffect } from 'react';
import axios from '../api/AxiosInstances';

const AdminPanel = () => {
  const [heroContent, setHeroContent] = useState({
    title: '',
    subtitle: '',
    description: '',
    imageUrl: '',
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Fetch existing hero content
    axios.get('/api/hero-content')
      .then(response => {
        if (response.data) {
          setHeroContent(response.data);
        }
      })
      .catch(err => {
        console.error('Failed to fetch hero content:', err);
        setErrorMessage('Failed to fetch hero content.');
      });
  }, []);

  const handleChange = (e) => {
    setHeroContent({ ...heroContent, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    // Update hero content via API
    axios.put('/api/hero-content', heroContent)
      .then(response => {
        console.log('Hero content updated:', response.data);
        setSuccessMessage('Hero content updated successfully!');
      })
      .catch(err => {
        console.error('Failed to update hero content:', err);
        setErrorMessage('Failed to update hero content. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">Update Hero Section</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="title" className="text-gray-700 font-medium mb-1">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={heroContent.title}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="subtitle" className="text-gray-700 font-medium mb-1">Subtitle:</label>
          <input
            type="text"
            name="subtitle"
            id="subtitle"
            value={heroContent.subtitle}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="text-gray-700 font-medium mb-1">Description:</label>
          <textarea
            name="description"
            id="description"
            value={heroContent.description}
            onChange={handleChange}
            required
            rows="4"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="imageUrl" className="text-gray-700 font-medium mb-1">Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            value={heroContent.imageUrl}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-orange-600 text-white font-medium rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-150"
          disabled={loading}
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 mr-3 -ml-1 text-white inline"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5h-3z"
              ></path>
            </svg>
          ) : 'Update Hero Section'}
        </button>
        {successMessage && (
          <p className="text-green-600 mt-4 text-center font-medium">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-600 mt-4 text-center font-medium">{errorMessage}</p>
        )}
      </form>
    </div>
  );
};

export default AdminPanel;
