import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const [aboutData, setAboutData] = useState({
    about_us: '', 
    banner_image: '',
    mission: '',
    values: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://backend.phonespotmd.com/api/about-us');
        
        if (!response.ok) {
          throw new Error('Failed to fetch about us data');
        }
        
        const data = await response.json();
        setAboutData({
          about_us: data.about_us?.about_us || '',
          banner_image: data.about_us?.banner_image || '',
          mission: data.about_us?.mission || 'Providing exceptional device repair services with integrity and expertise',
          values: data.about_us?.values || [
            'Customer Satisfaction',
            'Technical Excellence',
            'Transparent Pricing',
            'Quick Turnaround'
          ]
        });
      } catch (err) {
        setError(err.message);
        console.error('About section error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto p-6 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 max-w-2xl">
          <h3 className="text-lg font-medium text-red-700">Error Loading Content</h3>
          <p className="text-red-600">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition duration-200"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white pt-24 ">
      {/* Hero Section */}
      

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* About Text Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who We Are
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg text-gray-600 mx-auto">
              <p className="text-lg leading-8">
                At PhoneSpot MD, we're more than just a repair shop - we're your device's emergency room. 
                Founded by a team of passionate technologists, we've grown from a small kiosk to Maryland's 
                premier device repair center.
              </p>
              <p className="text-lg leading-8">
                Our certified technicians combine cutting-edge diagnostic tools with years of hands-on 
                experience to deliver repairs that stand the test of time. We treat every device as if it 
                were our own, because we understand how much your technology means to you.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="relative bg-gray-50 rounded-2xl p-12 mb-20 overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-red-100 rounded-full opacity-20"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-red-100 rounded-full opacity-20"></div>
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center bg-red-100 rounded-full p-4 mb-6">
              <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <blockquote className="text-xl text-gray-600 italic">
              "To revolutionize device repair through transparent pricing, exceptional craftsmanship, 
              and customer education - ensuring your technology serves you longer and better."
            </blockquote>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutData.values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-50 text-red-600 mb-6 mx-auto">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">{value}</h4>
                <p className="text-gray-600 text-center">
                  {value === 'Customer Satisfaction' && 'We measure success by your smile, not just by the repair.'}
                  {value === 'Technical Excellence' && 'Continuous training ensures we stay ahead of evolving technology.'}
                  {value === 'Transparent Pricing' && 'No hidden fees - just honest quotes you can trust.'}
                  {value === 'Quick Turnaround' && '90% of repairs completed in under 2 hours.'}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
            Meet Our Leadership
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Alex Johnson', role: 'Founder & CEO', bio: '15+ years in mobile technology' },
              { name: 'Sarah Chen', role: 'Head Technician', bio: 'Apple & Samsung certified' },
              { name: 'Michael Rodriguez', role: 'Customer Experience', bio: 'Your repair advocate' }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto h-40 w-40 rounded-full bg-gray-200 mb-6 overflow-hidden">
                  <div className="h-full w-full bg-gray-300 flex items-center justify-center text-gray-500">
                    <svg className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                <p className="text-red-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-red-700 to-red-800 rounded-2xl p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to experience the PhoneSpot MD difference?
          </h3>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            Schedule your repair today and join thousands of satisfied customers.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-white hover:bg-gray-100 text-red-700 font-bold py-3 px-8 rounded-lg transition duration-200 inline-flex items-center shadow-lg"
          >
            Get Started
            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </section>
      </div>
    </div>
  );
};

export default AboutSection;