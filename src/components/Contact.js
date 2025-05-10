import  { useState } from 'react';
import axios from 'axios';
import { Mail, Phone, Smartphone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    phoneModel: '',
    phoneIssue: '',
    message: '',
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(formData.phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post('https://backend.phonespotmd.com/api/message', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        phone_model: formData.phoneModel,
        phone_issue: formData.phoneIssue,
        address: '',
        subject: 'Contact Form Inquiry',
        message: formData.message,
      }, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 200) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          phoneModel: '',
          phoneIssue: '',
          message: '',
        });
        setSuccess(true);
      }
    } catch {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-red-50 pt-32 lg:pt-48 py-24 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Contact Info Sidebar */}
        <div className="bg-red-800 text-white rounded-2xl p-8 shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-red-100 mb-8">We’re here to help! Contact us for phone repair assistance or inquiries.</p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-200" />
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-200" />
                <span>support@phonedoctor.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-red-200" />
                <span>Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
          <div className="mt-10 text-xs text-red-200">&copy; 2025 Phone Doctor</div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-10">
          <h3 className="text-2xl font-bold text-red-800 mb-6">Contact Form</h3>

          {success && <div className="text-green-600 mb-4">Message sent successfully!</div>}
          {error && <div className="text-red-600 mb-4">{error}</div>}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-red-800 focus:outline-none"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-red-800 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-red-800 focus:outline-none"
                placeholder="1234567890"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Model</label>
              <input
                name="phoneModel"
                type="text"
                value={formData.phoneModel}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-red-800 focus:outline-none"
                placeholder="e.g., iPhone 13"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Issue</label>
              <input
                name="phoneIssue"
                type="text"
                value={formData.phoneIssue}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-red-800 focus:outline-none"
                placeholder="Battery draining, screen issue, etc."
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-red-800 focus:outline-none"
                placeholder="Describe the issue or inquiry in detail"
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-800 text-white font-semibold py-3 rounded-lg hover:bg-red-900 transition duration-300"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
