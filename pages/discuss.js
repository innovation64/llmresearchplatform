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
    // This would normally connect to GitHub Discussions API or a backend
    alert('Your message has been submitted. In a real implementation, this would be saved to GitHub Discussions or a database.');
    setFormData({
      name: '',
      email: '',
      affiliation: '',
      message: ''
    });
  };
  
  // Example discussions (in a real implementation, these would be fetched from GitHub Discussions)
  const discussions = [
    {
      id: 1,
      author: 'Prof. Sarah Chen',
      date: 'April 10, 2025',
      content: 'Your work on conditional ambiguous question answering is quite interesting. Have you considered applying this to medical information retrieval where ambiguity is common but potentially dangerous?',
      affiliation: 'University of California, Berkeley'
    },
    {
      id: 2,
      author: 'Dr. Michael Zhang',
      date: 'April 5, 2025',
      content: "I'm working on similar multi-agent evaluation frameworks at MIT. Would be great to compare notes on how you're measuring inter-agent communication efficiency. Your XAgent evaluation metrics look promising.",
      affiliation: 'MIT CSAIL'
    },
    {
      id: 3,
      author: 'Olivia Rodriguez',
      date: 'March 28, 2025',
      content: "We're implementing RAG systems for legal document analysis and would be interested in collaborating on how your work on context integration could help with maintaining document relationships. Let's connect!",
      affiliation: 'LegalTech Institute'
    }
  ];
  
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
                  Submit Message
                </button>
              </form>
            </div>
            
            <h2 className="text-2xl font-semibold mb-6">Recent Discussions</h2>
            
            <div className="space-y-6 mb-8">
              {discussions.map(discussion => (
                <div key={discussion.id} className="message-card">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{discussion.author}</span>
                    <span className="text-gray-500 text-sm">{discussion.date}</span>
                  </div>
                  <p className="text-gray-700 mb-2">
                    {discussion.content}
                  </p>
                  <div className="text-gray-500 text-sm">
                    {discussion.affiliation}
                  </div>
                </div>
              ))}
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