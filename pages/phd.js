import Link from 'next/link';
import { FiAward, FiBookOpen, FiTarget, FiUsers, FiMapPin, FiStar } from 'react-icons/fi';

export default function PhDPosition() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
              Actively Seeking PhD Positions
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              PhD Position in LLM Research
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90">
              Looking for opportunities to advance research in brain-inspired memory, multi-agent systems, and domain-specific LLMs
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-10 border border-blue-100">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-lg mb-6">
                I am actively seeking PhD positions to continue my research in large language models, brain-inspired memory architectures, multi-agent systems, and domain-specific LLMs. With publications at EMNLP and KDD, experience at GIIST, HKMU, Tsinghua NLP Lab, and Zhipu AI, I bring a strong research track record and hands-on experience across the full LLM stack.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4 text-primary">
                    <FiAward size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Academic Background</h3>
                    <p className="text-gray-700">B.Sc. Information Management &amp; Information Systems, Beijing University of Chinese Medicine (2018&ndash;2022)</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-4 text-primary">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Current Position</h3>
                    <p className="text-gray-700">Research Assistant, Guangdong Institute of Intelligence Science and Technology (GIIST), Aug 2025&ndash;Present</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-4 text-primary">
                    <FiBookOpen size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Research Experience</h3>
                    <p className="text-gray-700">GIIST (2025&ndash;Present), HKMU (2023&ndash;2025), THU NLP (2023), Zhipu AI (2022&ndash;2023)</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-4 text-primary">
                    <FiTarget size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Research Focus</h3>
                    <p className="text-gray-700">Brain-inspired memory, multi-agent systems, RAG, reasoning, domain-specific LLMs</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-4 text-primary">
                    <FiUsers size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Community Involvement</h3>
                    <p className="text-gray-700">Hugging Face Chinese Community Lead, AITIME Volunteer, Journal Reviewer (NLP Journal, IEEE IoT)</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-4 text-primary">
                    <FiStar size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Technical Skills</h3>
                    <p className="text-gray-700">Python, PyTorch, React, Docker, Smolagents, distributed training (H100 GPUs)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Research Timeline */}
            <h2 className="text-2xl font-semibold mb-6">Research Timeline</h2>
            <div className="space-y-0 mb-10 border-l-2 border-blue-200 ml-4">
              <div className="relative pl-8 pb-8">
                <div className="absolute left-0 top-1 w-3 h-3 bg-blue-600 rounded-full -translate-x-[7px]"></div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold text-blue-600">Aug 2025 &ndash; Present</span>
                  <span className="tag bg-green-100 text-green-800 text-xs">Current</span>
                </div>
                <h3 className="font-medium text-lg">Research Assistant &mdash; GIIST, Zhuhai</h3>
                <p className="text-gray-600 text-sm mt-1">Brain-inspired memory architectures, Pain LLM with 20+ H100 GPUs, pain mouse behavioral benchmarks, China Brain Project, FDCT grant proposals</p>
              </div>
              <div className="relative pl-8 pb-8">
                <div className="absolute left-0 top-1 w-3 h-3 bg-blue-400 rounded-full -translate-x-[7px]"></div>
                <span className="text-sm font-semibold text-blue-600">Aug 2023 &ndash; Aug 2025</span>
                <h3 className="font-medium text-lg">Research Assistant &mdash; HKMU, Hong Kong</h3>
                <p className="text-gray-600 text-sm mt-1">CondAmbigQA benchmark (EMNLP 2025), condition reasoning improving LLM accuracy by 18.9%, GRF/NSFC grant proposals, journal reviewer</p>
              </div>
              <div className="relative pl-8 pb-8">
                <div className="absolute left-0 top-1 w-3 h-3 bg-blue-300 rounded-full -translate-x-[7px]"></div>
                <span className="text-sm font-semibold text-blue-600">Feb 2023 &ndash; Aug 2023</span>
                <h3 className="font-medium text-lg">Research Collaborator &mdash; Tsinghua NLP Lab</h3>
                <p className="text-gray-600 text-sm mt-1">XAgent framework for multi-agent collaboration, ReproAgent RAG module</p>
              </div>
              <div className="relative pl-8 pb-8">
                <div className="absolute left-0 top-1 w-3 h-3 bg-blue-200 rounded-full -translate-x-[7px]"></div>
                <span className="text-sm font-semibold text-blue-600">Aug 2022 &ndash; Feb 2023</span>
                <h3 className="font-medium text-lg">Algorithm Engineer (Intern) &mdash; Zhipu AI (THU KEG)</h3>
                <p className="text-gray-600 text-sm mt-1">CodeGeeX code generation model (KDD 2023), GLM-based poetry generation, prompt engineering</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-3 h-3 bg-blue-100 rounded-full -translate-x-[7px] border border-blue-300"></div>
                <span className="text-sm font-semibold text-blue-600">Jul 2021 &ndash; Jul 2022</span>
                <h3 className="font-medium text-lg">Founder Member &mdash; Shenzhen InnoX Academy</h3>
                <p className="text-gray-600 text-sm mt-1">Emotional companion robots, SLAM-based autonomous navigation, smart wheelchairs, embodied AI</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-6">Research Interests for PhD</h2>
            <div className="space-y-6 mb-10">
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-medium text-lg mb-2">Brain-Inspired Memory Architectures for LLMs</h3>
                <p className="text-gray-700">Building on the BMAM framework to develop neuroscience-principled memory systems that enable agents with human-like consolidation, forgetting, and retrieval capabilities.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-medium text-lg mb-2">Multi-Agent Evaluation Frameworks</h3>
                <p className="text-gray-700">Developing robust methodologies to evaluate collaboration, specialization, and information sharing between multiple LLM-based agents in complex task environments.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-medium text-lg mb-2">Context-Aware Reasoning for Ambiguous Tasks</h3>
                <p className="text-gray-700">Building on CondAmbigQA research (EMNLP 2025) to enable LLMs to handle ambiguity through contextual understanding and multi-step reasoning processes.</p>
              </div>
              <div className="border-l-4 border-emerald-600 pl-4">
                <h3 className="font-medium text-lg mb-2">Domain-Specific LLMs for Healthcare</h3>
                <p className="text-gray-700">Extending Pain LLM research to broader healthcare applications, leveraging experience with distributed training on large GPU clusters and behavioral benchmarking.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-medium text-lg mb-2">RAG Architecture for Specialized Domains</h3>
                <p className="text-gray-700">Exploring retrieval-augmented generation techniques optimized for domain-specific knowledge integration, focusing on medical and scientific applications.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-6">Publications</h2>
            <div className="space-y-6 mb-10">
              <div className="p-5 border rounded-lg border-l-4 border-l-purple-600">
                <div className="flex items-center gap-2 mb-2">
                  <span className="tag bg-purple-100 text-purple-800">ACL 2026</span>
                  <span className="text-xs text-gray-500">Under Review</span>
                </div>
                <h3 className="font-medium text-lg">BMAM: Brain-inspired Multi-Agent Memory Framework</h3>
                <p className="text-gray-600 mb-2"><strong>Y. Li</strong>, J. Liu, Y. Wang, Y. Wu, and M. Xu. arXiv:2601.20465</p>
                <div className="flex gap-4">
                  <a href="https://arxiv.org/abs/2601.20465" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">arXiv</a>
                </div>
              </div>

              <div className="p-5 border rounded-lg border-l-4 border-l-blue-600">
                <div className="flex items-center gap-2 mb-2">
                  <span className="tag bg-blue-100 text-blue-800">EMNLP 2025</span>
                  <span className="text-xs text-gray-500">Main Conference</span>
                </div>
                <h3 className="font-medium text-lg">CondAmbigQA: A Benchmark and Dataset for Conditional Ambiguous Question Answering</h3>
                <p className="text-gray-600 mb-2">Z. Li*, <strong>Y. Li*</strong>, H. Xie, and S. J. Qin. pp. 2269&ndash;2288. *Equal contribution</p>
                <div className="flex gap-4">
                  <a href="#" className="text-primary hover:underline">Paper</a>
                  <a href="#" className="text-primary hover:underline">Code</a>
                  <a href="#" className="text-primary hover:underline">Dataset</a>
                </div>
              </div>

              <div className="p-5 border rounded-lg border-l-4 border-l-green-600">
                <div className="flex items-center gap-2 mb-2">
                  <span className="tag bg-green-100 text-green-800">KDD 2023</span>
                </div>
                <h3 className="font-medium text-lg">CodeGeeX: A Pre-Trained Model for Code Generation with Multilingual Benchmarking on HumanEval-X</h3>
                <p className="text-gray-600 mb-2">Q. Zheng, X. Xia, X. Zou, ..., <strong>Y. Li</strong>, ..., and J. Tang</p>
                <div className="flex gap-4">
                  <a href="#" className="text-primary hover:underline">Paper</a>
                  <a href="#" className="text-primary hover:underline">Code</a>
                </div>
              </div>

              <div className="p-5 border rounded-lg border-l-4 border-l-amber-600">
                <div className="flex items-center gap-2 mb-2">
                  <span className="tag bg-amber-100 text-amber-800">Journal 2023</span>
                </div>
                <h3 className="font-medium text-lg">Machine Learning Models for Stroke Detection by Observing Eye-Movement Features Under Five-Color Visual Stimuli in Traditional Chinese Medicine</h3>
                <p className="text-gray-600 mb-2">Q. Lu, J. Deng, Y. Yu, <strong>Y. Li</strong>, et al. Journal of Traditional Chinese Medical Sciences, 10(3), pp. 321&ndash;330</p>
                <div className="flex gap-4">
                  <a href="#" className="text-primary hover:underline">Paper</a>
                </div>
              </div>
            </div>

            {/* Reviewer Experience */}
            <h2 className="text-2xl font-semibold mb-6">Academic Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-1">Journal Reviewer</h3>
                <p className="text-gray-600 text-sm">Natural Language Processing Journal (2024&ndash;2025)</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-1">Journal Reviewer</h3>
                <p className="text-gray-600 text-sm">IEEE Internet of Things Journal (2025)</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-1">Community Lead</h3>
                <p className="text-gray-600 text-sm">Hugging Face Chinese Community (2022&ndash;Present)</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-1">Community Volunteer</h3>
                <p className="text-gray-600 text-sm">AITIME (2021&ndash;Present)</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-6">Contact for PhD Opportunities</h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
              <p className="mb-4">
                If you are a professor or research lab looking for PhD students in the field of LLMs, brain-inspired AI, multi-agent systems, or domain-specific models, I would be happy to discuss potential research directions and opportunities.
              </p>
              <div className="space-y-2 mb-6">
                <p><strong>Email:</strong> innovation64feng@gmail.com</p>
                <p><strong>Phone:</strong> +86 13269183099 / +852 54614337</p>
                <p><strong>Current Institution:</strong> Guangdong Institute of Intelligence Science and Technology (GIIST)</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://innovation64.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Personal Website
                </a>
                <a
                  href="https://scholar.google.com/citations?user=J5CWbnMAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Google Scholar
                </a>
                <a
                  href="mailto:innovation64feng@gmail.com"
                  className="btn bg-gray-200 text-gray-700 hover:bg-gray-300"
                >
                  Email Me
                </a>
                <Link href="/research" className="btn bg-gray-200 text-gray-700 hover:bg-gray-300">
                  View Research
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
