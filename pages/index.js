import Link from 'next/link';
import { FiUsers, FiDatabase, FiCpu, FiBriefcase, FiActivity, FiLayers } from 'react-icons/fi';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white py-24 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
              Research Assistant @ GIIST | EMNLP 2025 | KDD 2023
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Advancing LLM Research<br />
              <span className="text-blue-200">for Real-World Impact</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
              Exploring brain-inspired memory, multi-agent systems, retrieval-augmented generation, and reasoning capabilities in large language models
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/research" className="btn bg-white text-blue-700 hover:bg-blue-50 font-semibold px-6 py-3">
                Explore Research
              </Link>
              <Link href="/collaborate" className="btn bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3">
                Collaborate With Me
              </Link>
              <a
                href="https://scholar.google.com/citations?user=J5CWbnMAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-transparent border-2 border-white/50 hover:bg-white/10 px-6 py-3"
              >
                Google Scholar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PhD Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            <span className="text-blue-800 font-medium">Actively seeking PhD positions in LLM research!</span>
            <Link href="/phd" className="ml-4 text-blue-600 font-medium hover:underline">
              Learn more &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">4</div>
              <div className="text-gray-500 text-sm mt-1">Publications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">3+</div>
              <div className="text-gray-500 text-sm mt-1">Years Research</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">5</div>
              <div className="text-gray-500 text-sm mt-1">Research Institutions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">2</div>
              <div className="text-gray-500 text-sm mt-1">Top Venues (EMNLP, KDD)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Research Focus</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              My research explores the frontiers of large language models with a focus on brain-inspired memory, multi-agent collaboration, knowledge retrieval, and reasoning capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card border-t-4 border-t-purple-600">
              <img src="/llmresearchplatform/images/brain-neural.jpg" alt="Brain-Inspired Memory Research" className="w-full h-40 object-cover" />
              <div className="p-6">
              <div className="text-purple-600 mb-4">
                <FiLayers size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Brain-Inspired Memory</h3>
              <p className="text-gray-600 mb-4">
                The BMAM framework draws on neuroscience principles (hippocampus, prefrontal cortex, temporal lobe) to build multi-agent memory systems with consolidation, forgetting, and retrieval mechanisms.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="tag bg-purple-100 text-purple-800">BMAM</span>
                <span className="tag">Neuroscience</span>
                <span className="tag">Published</span>
              </div>
              </div>
            </div>

            <div className="card border-t-4 border-t-indigo-600">
              <img src="/llmresearchplatform/images/network-abstract.jpg" alt="Multi-Agent Systems Research" className="w-full h-40 object-cover" />
              <div className="p-6">
              <div className="text-primary mb-4">
                <FiUsers size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-Agent Systems</h3>
              <p className="text-gray-600 mb-4">
                Developing frameworks for multiple AI agents to collaborate through specialization and coordination. Research on XAgent evaluation and inter-agent communication protocols.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="tag">XAgent</span>
                <span className="tag">Evaluation</span>
                <span className="tag">Agent Collaboration</span>
              </div>
              </div>
            </div>

            <div className="card border-t-4 border-t-cyan-600">
              <img src="/llmresearchplatform/images/ai-robot.jpg" alt="RAG Research" className="w-full h-40 object-cover" />
              <div className="p-6">
              <div className="text-primary mb-4">
                <FiDatabase size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Retrieval-Augmented Generation</h3>
              <p className="text-gray-600 mb-4">
                Enhancing LLMs by retrieving and utilizing external knowledge. Work on the ReproAgent project improves retrieval precision, context integration, and query formulation.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="tag">ReproAgent</span>
                <span className="tag">Knowledge Integration</span>
                <span className="tag">Context Optimization</span>
              </div>
              </div>
            </div>

            <div className="card border-t-4 border-t-violet-600">
              <img src="/llmresearchplatform/images/llm-chat.jpg" alt="Reasoning in LLMs" className="w-full h-40 object-cover" />
              <div className="p-6">
              <div className="text-primary mb-4">
                <FiCpu size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reasoning in LLMs</h3>
              <p className="text-gray-600 mb-4">
                CondAmbigQA benchmark (EMNLP 2025) demonstrates that condition reasoning improves LLM accuracy by up to 18.9%, reframing apparent hallucinations as query ambiguity.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="tag">CondAmbigQA</span>
                <span className="tag bg-blue-100 text-blue-800">EMNLP 2025</span>
                <span className="tag">Ambiguity Resolution</span>
              </div>
              </div>
            </div>

            <div className="card border-t-4 border-t-emerald-600">
              <img src="/llmresearchplatform/images/medical-lab.jpg" alt="Domain-Specific LLMs" className="w-full h-40 object-cover" />
              <div className="p-6">
              <div className="text-emerald-600 mb-4">
                <FiActivity size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Domain-Specific LLMs</h3>
              <p className="text-gray-600 mb-4">
                Building Pain LLM for pain analysis and assessment with multi-node distributed training on 20+ NVIDIA H100 GPUs. Developing pain mouse behavioral benchmarks under the China Brain Project.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="tag bg-emerald-100 text-emerald-800">Pain LLM</span>
                <span className="tag">H100 Training</span>
                <span className="tag">China Brain Project</span>
              </div>
              </div>
            </div>

            <div className="card border-t-4 border-t-amber-600">
              <img src="/llmresearchplatform/images/code-screen.jpg" alt="Code Generation" className="w-full h-40 object-cover" />
              <div className="p-6">
              <div className="text-amber-600 mb-4">
                <FiBriefcase size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Code Generation</h3>
              <p className="text-gray-600 mb-4">
                Contributed to CodeGeeX (KDD 2023), a pre-trained model for multilingual code generation benchmarked on HumanEval-X with improvements through data analysis and prompt engineering.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="tag">CodeGeeX</span>
                <span className="tag bg-green-100 text-green-800">KDD 2023</span>
                <span className="tag">Prompt Engineering</span>
              </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/research" className="btn btn-outline">
              Learn More About Research
            </Link>
          </div>
        </div>
      </section>

      {/* Project Shenshu Banner */}
      <section className="relative overflow-hidden">
        <img
          src="/llmresearchplatform/images/sao-alicization.png"
          alt="Project Shenshu"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-indigo-900/80 to-purple-900/75"></div>
        <div className="container relative z-10 py-16 md:py-20">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-white">
              <div className="inline-block px-3 py-1 bg-amber-500/20 backdrop-blur-sm rounded-full text-xs font-medium mb-4 border border-amber-400/30 text-amber-200">
                Inspired by SAO: Project Alicization
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200">&#x795E;&#x67A2;</span>
                <span className="text-white ml-2">Shenshu</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                A research route toward building AI agents with genuine memory, personality, and self-awareness &mdash; grounded in the BMAM framework and inspired by the Artificial Fluctlight vision.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/10">Fluctlight &rarr; BMAM</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/10">Soul Translator &rarr; Neuro-LLM</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/10">Underworld &rarr; Agent Sim</span>
              </div>
              <Link href="/shenshu" className="btn bg-amber-500 text-slate-900 hover:bg-amber-400 font-semibold px-6 py-3">
                Explore Project Shenshu &rarr;
              </Link>
            </div>
            <div className="hidden md:block w-64 flex-shrink-0">
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="text-purple-300 font-semibold text-sm">Hippocampus</div>
                  <div className="text-gray-400 text-xs">Episodic Memory</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="text-blue-300 font-semibold text-sm">Prefrontal Cortex</div>
                  <div className="text-gray-400 text-xs">Reasoning &amp; Personality</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="text-cyan-300 font-semibold text-sm">Temporal Lobe</div>
                  <div className="text-gray-400 text-xs">Semantic Processing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Star Trail Banner */}
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a2e] via-[#080820] to-[#0a0a2e]"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-[30%] w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>
          <div className="absolute top-0 left-[50%] w-px h-full bg-gradient-to-b from-transparent via-amber-500/15 to-transparent"></div>
          <div className="absolute top-0 left-[70%] w-px h-full bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"></div>
        </div>
        <div className="container relative z-10 py-16 md:py-20">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-white">
              <div className="inline-block px-3 py-1 bg-green-500/10 backdrop-blur-sm rounded-full text-xs font-medium mb-4 border border-green-500/20 text-green-300">
                Inspired by Steins;Gate &middot; Worldline Theory
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">&#x661F;&#x8F68;</span>
                <span className="text-white ml-2">Star Trail</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Research worldlines diverging across memory, reasoning, and agents &mdash; converging toward <strong className="text-green-300">Artificial Super Intelligence</strong>.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-400 border border-white/10 font-mono">&alpha; Brain Memory</span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-400 border border-white/10 font-mono">&beta; Domain AI</span>
                <span className="px-3 py-1 bg-green-500/10 rounded-full text-sm text-green-300 border border-green-500/20 font-mono">SG &rarr; ASI</span>
              </div>
              <Link href="/startrail" className="btn bg-green-500 text-black hover:bg-green-400 font-semibold px-6 py-3">
                Explore Worldlines &rarr;
              </Link>
            </div>
            <div className="hidden md:block w-48 flex-shrink-0">
              <div className="bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-lg px-4 py-3 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                <div className="font-mono text-green-400 text-2xl tracking-[0.2em] font-bold text-center" style={{textShadow: '0 0 10px rgba(34,197,94,0.5)'}}>
                  1.048596
                </div>
                <div className="text-green-500/50 text-xs tracking-widest mt-1 text-center">DIVERGENCE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Selected Publications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Peer-reviewed publications at top-tier venues in NLP and AI.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="p-6 border-l-4 border-l-purple-600 bg-gray-50 rounded-r-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="tag bg-purple-100 text-purple-800">arXiv 2025</span>
                <span className="text-xs text-gray-500">Published Preprint</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">BMAM: Brain-inspired Multi-Agent Memory Framework</h3>
              <p className="text-gray-600 text-sm">
                <strong>Y. Li</strong>, J. Liu, Y. Wang, Y. Wu, and M. Xu. arXiv:2601.20465
              </p>
            </div>

            <div className="p-6 border-l-4 border-l-blue-600 bg-gray-50 rounded-r-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="tag bg-blue-100 text-blue-800">EMNLP 2025</span>
                <span className="text-xs text-gray-500">Main Conference</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">CondAmbigQA: A Benchmark and Dataset for Conditional Ambiguous Question Answering</h3>
              <p className="text-gray-600 text-sm">
                Z. Li*, <strong>Y. Li*</strong>, H. Xie, and S. J. Qin. pp. 2269-2288. *Equal contribution
              </p>
            </div>

            <div className="p-6 border-l-4 border-l-green-600 bg-gray-50 rounded-r-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="tag bg-green-100 text-green-800">KDD 2023</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">CodeGeeX: A Pre-Trained Model for Code Generation with Multilingual Benchmarking on HumanEval-X</h3>
              <p className="text-gray-600 text-sm">
                Q. Zheng, X. Xia, X. Zou, Y. Dong, S. Wang, Y. Xue, Z. Wang, L. Shen, A. Wang, <strong>Y. Li</strong>, T. Su, Z. Yang, and J. Tang
              </p>
            </div>

            <div className="p-6 border-l-4 border-l-amber-600 bg-gray-50 rounded-r-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="tag bg-amber-100 text-amber-800">Journal 2023</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Machine Learning Models for Stroke Detection by Observing Eye-Movement Features Under Five-Color Visual Stimuli in TCM</h3>
              <p className="text-gray-600 text-sm">
                Q. Lu, J. Deng, Y. Yu, <strong>Y. Li</strong>, K. Wei, et al. Journal of Traditional Chinese Medical Sciences, 10(3), pp. 321-330
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Discussions Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Recent Discussions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join the conversation about LLM research, applications, and future directions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="message-card">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Prof. Sarah Chen</span>
                <span className="text-gray-500 text-sm">April 10, 2025</span>
              </div>
              <p className="text-gray-700 mb-2">
                Your work on conditional ambiguous question answering is quite interesting. Have you considered applying this to medical information retrieval where ambiguity is common but potentially dangerous?
              </p>
              <div className="text-gray-500 text-sm">
                University of California, Berkeley
              </div>
            </div>

            <div className="message-card">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Dr. Michael Zhang</span>
                <span className="text-gray-500 text-sm">April 5, 2025</span>
              </div>
              <p className="text-gray-700 mb-2">
                I&apos;m working on similar multi-agent evaluation frameworks at MIT. Would be great to compare notes on how you&apos;re measuring inter-agent communication efficiency.
              </p>
              <div className="text-gray-500 text-sm">
                MIT CSAIL
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/discuss" className="btn btn-primary">
              Join the Discussion
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="container relative z-10 section">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-4">Interested in Collaboration?</h2>
            <p className="text-xl mb-8 opacity-90">
              I&apos;m actively seeking collaborations with researchers, academic institutions, and industry partners to advance LLM research and brain-inspired AI systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/collaborate" className="btn bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3">
                Explore Collaboration Opportunities
              </Link>
              <Link href="/phd" className="btn border-2 border-white hover:bg-white/10 px-6 py-3">
                PhD Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
