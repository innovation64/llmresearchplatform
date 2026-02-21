import Link from 'next/link';
import { FiFeather, FiFilm, FiBookOpen, FiGitBranch, FiBarChart2, FiCpu, FiActivity } from 'react-icons/fi';

export default function Applications() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Potential Applications
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90">
              Real-world impact of LLM research and brain-inspired AI
            </p>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-12">
              Our research in large language models has implications for various real-world applications where intelligent agents, brain-inspired memory, and knowledge retrieval can create significant value. These applications span across multiple domains including pain analysis, healthcare, research, education, software development, business intelligence, and personal assistance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Pain Analysis - NEW */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-6 border border-emerald-200">
                <div className="text-emerald-600 mb-4">
                  <FiActivity size={32} />
                </div>
                <h2 className="text-xl font-semibold mb-3">Pain Analysis &amp; Assessment</h2>
                <p className="text-gray-600 mb-4">
                  Domain-specific LLMs (Pain LLM) trained on 20+ H100 GPUs for automated pain analysis and assessment. Includes pain mouse behavioral benchmarks developed under the China Brain Project at GIIST.
                </p>
                <h3 className="font-medium mb-2">Key Benefits:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Automated pain behavior assessment</li>
                  <li>Standardized pain evaluation benchmarks</li>
                  <li>Multi-modal pain signal analysis</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-primary mb-4">
                  <FiFeather size={32} />
                </div>
                <h2 className="text-xl font-semibold mb-3">AI Research Assistants</h2>
                <p className="text-gray-600 mb-4">
                  Multi-agent systems that collaborate to conduct literature reviews, synthesize findings, and suggest research directions by retrieving and reasoning across scientific publications.
                </p>
                <h3 className="font-medium mb-2">Key Benefits:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Accelerated literature review processes</li>
                  <li>Identification of cross-disciplinary connections</li>
                  <li>Reduced research bottlenecks</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-primary mb-4">
                  <FiBookOpen size={32} />
                </div>
                <h2 className="text-xl font-semibold mb-3">Healthcare Knowledge Systems</h2>
                <p className="text-gray-600 mb-4">
                  RAG-enhanced systems that can retrieve relevant medical literature, clinical guidelines, and patient data to assist healthcare professionals in decision-making.
                </p>
                <h3 className="font-medium mb-2">Key Benefits:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>More accurate clinical decision support</li>
                  <li>Reduction in medical information gaps</li>
                  <li>Contextual understanding of patient histories</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-primary mb-4">
                  <FiFilm size={32} />
                </div>
                <h2 className="text-xl font-semibold mb-3">Personalized Education</h2>
                <p className="text-gray-600 mb-4">
                  Adaptive learning systems that leverage long-term memory to track student progress and provide contextually appropriate educational resources and support.
                </p>
                <h3 className="font-medium mb-2">Key Benefits:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Personalized learning pathways</li>
                  <li>Contextual teaching adjustments</li>
                  <li>Long-term student development tracking</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-primary mb-4">
                  <FiGitBranch size={32} />
                </div>
                <h2 className="text-xl font-semibold mb-3">Software Development</h2>
                <p className="text-gray-600 mb-4">
                  Collaborative coding agents that understand code repositories, retrieve relevant documentation, and assist in software engineering tasks with contextual awareness.
                </p>
                <h3 className="font-medium mb-2">Key Benefits:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Accelerated development cycles</li>
                  <li>Reduction in technical debt</li>
                  <li>Better code quality and documentation</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-primary mb-4">
                  <FiBarChart2 size={32} />
                </div>
                <h2 className="text-xl font-semibold mb-3">Business Intelligence</h2>
                <p className="text-gray-600 mb-4">
                  Multi-agent systems that analyze business data, retrieve market information, and generate insights by reasoning across multiple data sources.
                </p>
                <h3 className="font-medium mb-2">Key Benefits:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Holistic market and competitor analysis</li>
                  <li>Enhanced decision support systems</li>
                  <li>Streamlined data processing workflows</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-primary mb-4">
                  <FiCpu size={32} />
                </div>
                <h2 className="text-xl font-semibold mb-3">Cognitive Assistants</h2>
                <p className="text-gray-600 mb-4">
                  Personal AI assistants with long-term memory capabilities that can maintain context across conversations and retrieve relevant past interactions.
                </p>
                <h3 className="font-medium mb-2">Key Benefits:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Truly personalized assistance</li>
                  <li>Contextually relevant recommendations</li>
                  <li>Reduction in repeated information needs</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-semibold mb-4">Research to Application Pipeline</h2>
              <p className="text-gray-700 mb-6">
                Our research follows a careful pathway from theoretical development to practical applications:
              </p>
              <ol className="space-y-4">
                <li className="flex">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-medium mr-3 flex-shrink-0 mt-1">1</div>
                  <div>
                    <h3 className="font-medium text-lg">Fundamental Research</h3>
                    <p className="text-gray-600">Development of core architectures and methodologies for LLMs, multi-agent systems, and RAG frameworks.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-medium mr-3 flex-shrink-0 mt-1">2</div>
                  <div>
                    <h3 className="font-medium text-lg">Benchmarking & Evaluation</h3>
                    <p className="text-gray-600">Rigorous testing using benchmarks like CondAmbigQA to ensure reliability and performance.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-medium mr-3 flex-shrink-0 mt-1">3</div>
                  <div>
                    <h3 className="font-medium text-lg">Domain Specialization</h3>
                    <p className="text-gray-600">Adaptation of general techniques to specific domains like healthcare, education, or business.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-medium mr-3 flex-shrink-0 mt-1">4</div>
                  <div>
                    <h3 className="font-medium text-lg">Prototype Development</h3>
                    <p className="text-gray-600">Creation of proof-of-concept applications to demonstrate real-world utility.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-medium mr-3 flex-shrink-0 mt-1">5</div>
                  <div>
                    <h3 className="font-medium text-lg">Collaborative Implementation</h3>
                    <p className="text-gray-600">Partnership with domain experts and industry stakeholders to refine and deploy solutions.</p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-6">Interested in Exploring Applications?</h2>
              <p className="text-lg text-gray-600 mb-8">
                We're actively seeking collaborations to apply our research in real-world settings. If you're interested in exploring how our research could benefit your domain, let's connect.
              </p>
              <Link href="/collaborate" className="btn btn-primary">
                Explore Collaboration Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}