import Link from 'next/link';
import { FiUsers, FiServer, FiCode, FiTarget } from 'react-icons/fi';

export default function Collaborate() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Collaboration Opportunities
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90">
              Join forces to advance LLM research and brain-inspired AI
            </p>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-12">
              I&apos;m actively seeking collaborations to advance research in large language models and explore new applications. Whether you&apos;re from academia, industry, or an open-source project, I welcome the opportunity to discuss potential joint efforts in brain-inspired memory architectures, multi-agent systems, RAG frameworks, reasoning capabilities, and domain-specific LLMs. Currently based at GIIST (Guangdong Institute of Intelligence Science and Technology).
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-primary mb-4">
                  <FiUsers size={32} />
                </div>
                <h2 className="text-xl font-semibold mb-3">Academic Research</h2>
                <p className="text-gray-600 mb-4">
                  Interested in collaborating with research labs and academic institutions working on LLMs, multi-agent systems, RAG, or reasoning capabilities. Particularly focused on projects evaluating long-term memory and cross-agent knowledge sharing.
                </p>
                <h3 className="font-medium mb-2">Collaboration Formats:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
                  <li>Joint research papers</li>
                  <li>Benchmark development</li>
                  <li>Cross-institutional projects</li>
                </ul>
                <a href="mailto:innovation64feng@gmail.com" className="btn btn-primary w-full text-center">
                  Discuss Research Collaboration
                </a>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-primary mb-4">
                  <FiServer size={32} />
                </div>
                <h2 className="text-xl font-semibold mb-3">Industry Applications</h2>
                <p className="text-gray-600 mb-4">
                  Seeking industry partners interested in applying my research to practical challenges. Experience at Zhipu AI, GIIST, and involvement with technology startups provides a bridge between research and practical implementation.
                </p>
                <h3 className="font-medium mb-2">Application Areas:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
                  <li>Healthcare knowledge systems</li>
                  <li>Educational technology</li>
                  <li>Business intelligence tools</li>
                </ul>
                <a href="mailto:innovation64feng@gmail.com" className="btn btn-primary w-full text-center">
                  Explore Industry Applications
                </a>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-primary mb-4">
                  <FiCode size={32} />
                </div>
                <h2 className="text-xl font-semibold mb-3">Open Source Projects</h2>
                <p className="text-gray-600 mb-4">
                  Interested in contributing to open-source projects in the LLM space. Previous experience with community initiatives through Hugging Face Chinese Community and AITIME provides a foundation for collaborative open-source work.
                </p>
                <h3 className="font-medium mb-2">Contribution Areas:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
                  <li>LLM agents and frameworks</li>
                  <li>RAG implementation tools</li>
                  <li>Reasoning benchmarks</li>
                </ul>
                <a href="mailto:innovation64feng@gmail.com" className="btn btn-primary w-full text-center">
                  Discuss Open Source Collaboration
                </a>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-primary mb-4">
                  <FiTarget size={32} />
                </div>
                <h2 className="text-xl font-semibold mb-3">Specific Projects</h2>
                <p className="text-gray-600 mb-4">
                  Open to partnering on specific projects that implement LLM technologies in real-world settings. Can contribute expertise in agent evaluation, RAG implementation, and ambiguous reasoning tasks.
                </p>
                <h3 className="font-medium mb-2">Project Types:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
                  <li>Proof-of-concept implementations</li>
                  <li>Specialized agent development</li>
                  <li>Domain-specific RAG systems</li>
                </ul>
                <a href="mailto:innovation64feng@gmail.com" className="btn btn-primary w-full text-center">
                  Propose a Project
                </a>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-semibold mb-4">Collaboration Process</h2>
              <p className="text-gray-700 mb-6">
                Here's how we can work together effectively:
              </p>
              <ol className="space-y-4">
                <li className="flex">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-medium mr-3 flex-shrink-0 mt-1">1</div>
                  <div>
                    <h3 className="font-medium text-lg">Initial Discussion</h3>
                    <p className="text-gray-600">Brief meeting to explore mutual interests and potential alignment of research goals.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-medium mr-3 flex-shrink-0 mt-1">2</div>
                  <div>
                    <h3 className="font-medium text-lg">Scope Definition</h3>
                    <p className="text-gray-600">Clear outline of collaboration goals, timelines, and expected contributions from each party.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-medium mr-3 flex-shrink-0 mt-1">3</div>
                  <div>
                    <h3 className="font-medium text-lg">Regular Checkpoints</h3>
                    <p className="text-gray-600">Scheduled meetings to share progress, address challenges, and refine direction as needed.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-medium mr-3 flex-shrink-0 mt-1">4</div>
                  <div>
                    <h3 className="font-medium text-lg">Documentation & Sharing</h3>
                    <p className="text-gray-600">Commitment to documenting work and sharing results through appropriate channels (papers, code, etc.).</p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-6">Let's Connect</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to explore a potential collaboration? Reach out to discuss how we might work together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:innovation64feng@gmail.com" className="btn btn-primary">
                  Email Me
                </a>
                <a 
                  href="https://innovation64.github.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Visit Personal Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}