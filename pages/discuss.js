import { useState } from 'react';
import { FiSend, FiMessageSquare, FiExternalLink } from 'react-icons/fi';

export default function Discuss() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    affiliation: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend here on purpose: hand the message straight to the user's mail client
    const subject = `Research discussion from ${formData.name}`;
    const body = [
      `Name: ${formData.name}`,
      formData.affiliation ? `Affiliation: ${formData.affiliation}` : null,
      formData.email ? `Reply-to: ${formData.email}` : null,
      '',
      formData.message
    ].filter(Boolean).join('\n');
    window.location.href = `mailto:innovation64feng@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Research Discussion
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90">
              Share your thoughts, suggestions, or questions about my research
            </p>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 mb-16">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <FiMessageSquare className="mr-2" />
                Leave a Message
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email (optional, not published)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="affiliation" className="block text-gray-700 font-medium mb-2">
                    Affiliation (optional)
                  </label>
                  <input
                    type="text"
                    id="affiliation"
                    name="affiliation"
                    value={formData.affiliation}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary flex items-center"
                >
                  <FiSend className="mr-2" />
                  Send via Email
                </button>
                <p className="text-gray-500 text-sm mt-3">
                  This opens your own mail client with the message pre-filled &mdash; nothing is stored on this site.
                </p>
              </form>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-medium text-lg mb-2">Alternative Ways to Connect</h3>
              <p className="mb-4">
                You can also connect with me through other platforms:
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <a 
                    href="https://github.com/innovation64"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center"
                  >
                    <span className="mr-2">GitHub Discussions</span>
                    <FiExternalLink size={16} />
                  </a>
                </div>
                <div className="flex items-center">
                  <a 
                    href="mailto:innovation64feng@gmail.com"
                    className="text-primary hover:underline"
                  >
                    Email me directly at innovation64feng@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}