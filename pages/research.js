import Link from 'next/link';
import { FiUsers, FiDatabase, FiCpu, FiBriefcase, FiActivity, FiLayers, FiRefreshCw } from 'react-icons/fi';

export default function Research() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Research Areas
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90">
              Exploring the frontiers of large language models, brain-inspired AI, and self-evolving agents
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-12">
              My research focuses on advancing large language model capabilities through seven interconnected areas: brain-inspired memory architectures, multi-agent systems, retrieval-augmented generation, reasoning mechanisms, domain-specific LLMs, code generation, and &mdash; as the current doctoral direction at PolyU &mdash; recursive self-improvement. The goal is to develop AI systems that collaborate effectively, retain long-term memory, reason through complex problems, and ultimately turn their own experience into lasting capability.
            </p>

            <div className="space-y-16">
              {/* Brain-Inspired Memory */}
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-8 border-l-4 border-purple-600">
                <div className="flex items-start">
                  <div className="text-purple-600 mr-4 flex-shrink-0">
                    <FiLayers size={32} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="text-2xl font-semibold">Brain-Inspired Memory Architecture</h2>
                      <span className="tag bg-purple-100 text-purple-800">Featured</span>
                    </div>
                    <p className="text-gray-700 mb-6">
                      This research draws on neuroscience principles to develop memory systems for multi-agent AI frameworks. The BMAM (Brain-inspired Multi-Agent Memory) framework models key brain regions &mdash; hippocampus for spatial/episodic memory, prefrontal cortex for reasoning and personality, and temporal lobe for semantic processing &mdash; to enable agents with human-like memory consolidation, forgetting, retrieval, and reflection capabilities.
                    </p>

                    {/* Architecture Diagram */}
                    <div className="bg-white rounded-lg p-6 mb-6 border">
                      <h3 className="font-medium text-lg mb-4 text-center text-gray-800">BMAM Architecture Overview</h3>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="bg-purple-50 rounded-lg p-4 text-center border border-purple-200">
                          <div className="text-purple-700 font-semibold mb-1">Hippocampus</div>
                          <div className="text-xs text-gray-500">Spatial Memory</div>
                          <div className="text-xs text-gray-500">Episodic Encoding</div>
                        </div>
                        <div className="bg-indigo-50 rounded-lg p-4 text-center border border-indigo-200">
                          <div className="text-indigo-700 font-semibold mb-1">Prefrontal Cortex</div>
                          <div className="text-xs text-gray-500">Reasoning</div>
                          <div className="text-xs text-gray-500">Personality</div>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-200">
                          <div className="text-blue-700 font-semibold mb-1">Temporal Lobe</div>
                          <div className="text-xs text-gray-500">Semantic Processing</div>
                          <div className="text-xs text-gray-500">Long-term Storage</div>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="bg-gray-50 rounded-lg px-6 py-3 text-center border border-gray-200">
                          <div className="text-gray-700 font-semibold text-sm">Core Operations</div>
                          <div className="flex gap-4 mt-1 text-xs text-gray-500">
                            <span>Consolidation</span>
                            <span>Forgetting</span>
                            <span>Retrieval</span>
                            <span>Reflection</span>
                            <span>Stress Response</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="font-medium text-lg mb-2">Key Contributions</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>BMAM Framework</strong> &mdash; Multi-agent memory system with brain region agents (Findings of ACL 2026, arXiv:2601.20465)</li>
                          <li>Memory consolidation and distortion modeling</li>
                          <li>Personality-driven reasoning validation</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">Publication</h3>
                        <p className="text-gray-600">Y. Li, J. Liu, Y. Wang, Y. Wu, and M. Xu. &ldquo;BMAM: Brain-inspired Multi-Agent Memory Framework.&rdquo; <strong>Findings of ACL 2026</strong>. arXiv:2601.20465</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="tag bg-purple-100 text-purple-800">BMAM</span>
                      <span className="tag">Neuroscience</span>
                      <span className="tag">Memory Consolidation</span>
                      <span className="tag">Forgetting</span>
                      <span className="tag">Reflection</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Multi-Agent Systems */}
              <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-indigo-600">
                <div className="flex items-start">
                  <div className="text-indigo-600 mr-4 flex-shrink-0">
                    <FiUsers size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Multi-Agent Systems</h2>
                    <p className="text-gray-700 mb-6">
                      This research area focuses on developing frameworks for multiple AI agents to collaborate through specialization and coordination. I investigate both the design of agent architectures and evaluation methodologies to measure effectiveness in complex task environments.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="font-medium text-lg mb-2">Current Projects</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>XAgent</strong> evaluation framework development (Tsinghua NLP Lab)</li>
                          <li>Inter-agent communication protocols</li>
                          <li>Specialized agent roles and coordination mechanisms</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">Key Collaborations</h3>
                        <p>Tsinghua University NLP Lab, GDIIST</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="tag">XAgent</span>
                      <span className="tag">Agent Collaboration</span>
                      <span className="tag">Evaluation Metrics</span>
                      <span className="tag">Specialization</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Retrieval-Augmented Generation */}
              <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-cyan-600">
                <div className="flex items-start">
                  <div className="text-cyan-600 mr-4 flex-shrink-0">
                    <FiDatabase size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Retrieval-Augmented Generation (RAG)</h2>
                    <p className="text-gray-700 mb-6">
                      My work on RAG focuses on enhancing LLMs by retrieving and effectively utilizing external knowledge. The ReproAgent project aims to improve retrieval precision, context integration, and query formulation techniques for more reproducible and robust AI agent research.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="font-medium text-lg mb-2">Current Projects</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>ReproAgent</strong>: Reproducible agents through enhanced RAG (Tsinghua NLP Lab)</li>
                          <li>Context integration techniques for complex queries</li>
                          <li>Domain-specific retrieval optimization for medical and scientific domains</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">Key Collaborations</h3>
                        <p>Tsinghua University NLP Lab, HKMU Research Team</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="tag">ReproAgent</span>
                      <span className="tag">Knowledge Integration</span>
                      <span className="tag">Query Optimization</span>
                      <span className="tag">Context Windows</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reasoning in LLMs */}
              <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-violet-600">
                <div className="flex items-start">
                  <div className="text-violet-600 mr-4 flex-shrink-0">
                    <FiCpu size={32} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="text-2xl font-semibold">Reasoning in LLMs</h2>
                      <span className="tag bg-blue-100 text-blue-800">EMNLP 2025</span>
                    </div>
                    <p className="text-gray-700 mb-6">
                      This research investigates methods to enhance reasoning capabilities in LLMs, particularly for handling ambiguous questions. The CondAmbigQA benchmark (published at EMNLP 2025 Main Conference) demonstrates that condition reasoning improves LLM answer accuracy by up to 18.9%, reframing apparent hallucinations as query ambiguity.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="font-medium text-lg mb-2">Key Contributions</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>CondAmbigQA</strong>: 2,000-query benchmark with condition-aware evaluation metrics</li>
                          <li>Demonstrated 18.9% accuracy improvement via condition reasoning</li>
                          <li>Contextual disambiguation techniques</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">Publication</h3>
                        <p className="text-gray-600">Z. Li*, Y. Li*, H. Xie, and S. J. Qin. &ldquo;CondAmbigQA: A Benchmark and Dataset for Conditional Ambiguous Question Answering.&rdquo; <strong>EMNLP 2025</strong> (Main Conference), pp. 2269-2288. *Equal contribution</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="tag">CondAmbigQA</span>
                      <span className="tag">Ambiguity Resolution</span>
                      <span className="tag">Chain-of-Thought</span>
                      <span className="tag">Contextual Reasoning</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Domain-Specific LLMs */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-8 border-l-4 border-emerald-600">
                <div className="flex items-start">
                  <div className="text-emerald-600 mr-4 flex-shrink-0">
                    <FiActivity size={32} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="text-2xl font-semibold">Domain-Specific LLMs</h2>
                      <span className="tag bg-emerald-100 text-emerald-800">Current</span>
                    </div>
                    <p className="text-gray-700 mb-6">
                      Building specialized large language models for pain analysis and assessment (Pain LLM) at GDIIST. This research involves multi-node distributed training on 20+ NVIDIA H100 GPUs, developing pain mouse behavioral benchmarks, and contributing to the China Brain Project.
                    </p>

                    {/* Training Infrastructure */}
                    <div className="bg-white rounded-lg p-6 mb-6 border">
                      <h3 className="font-medium text-lg mb-3 text-gray-800">Training Infrastructure</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="bg-emerald-50 rounded p-3">
                          <div className="text-emerald-700 font-bold text-xl">20+</div>
                          <div className="text-xs text-gray-500">H100 GPUs</div>
                        </div>
                        <div className="bg-emerald-50 rounded p-3">
                          <div className="text-emerald-700 font-bold text-xl">Multi</div>
                          <div className="text-xs text-gray-500">Node Training</div>
                        </div>
                        <div className="bg-emerald-50 rounded p-3">
                          <div className="text-emerald-700 font-bold text-xl">Pain</div>
                          <div className="text-xs text-gray-500">LLM Model</div>
                        </div>
                        <div className="bg-emerald-50 rounded p-3">
                          <div className="text-emerald-700 font-bold text-xl">Mouse</div>
                          <div className="text-xs text-gray-500">Benchmark</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="font-medium text-lg mb-2">Current Projects</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>Pain LLM</strong> &mdash; Domain-specific model for pain analysis and assessment</li>
                          <li><strong>Pain Mouse Benchmark</strong> &mdash; Behavioral evaluation for pain-related models</li>
                          <li>Contributions to the <strong>China Brain Project</strong></li>
                          <li>FDCT (Macao Science and Technology Development Fund) grant proposals</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">Institution</h3>
                        <p>Guangdong Institute of Intelligence Science and Technology (GDIIST)</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="tag bg-emerald-100 text-emerald-800">Pain LLM</span>
                      <span className="tag">China Brain Project</span>
                      <span className="tag">Distributed Training</span>
                      <span className="tag">H100 GPUs</span>
                      <span className="tag">Behavioral Benchmark</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Generation */}
              <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-amber-600">
                <div className="flex items-start">
                  <div className="text-amber-600 mr-4 flex-shrink-0">
                    <FiBriefcase size={32} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="text-2xl font-semibold">Code Generation</h2>
                      <span className="tag bg-green-100 text-green-800">KDD 2023</span>
                    </div>
                    <p className="text-gray-700 mb-6">
                      Contributed to CodeGeeX, a pre-trained model for code generation with multilingual benchmarking on HumanEval-X. Developed GLM-based algorithms for poetry generation and content optimization, and improved code-generation models through data analysis and prompt engineering at Zhipu AI (THU KEG).
                    </p>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="font-medium text-lg mb-2">Key Contributions</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>CodeGeeX</strong> &mdash; Multilingual code generation model (KDD 2023)</li>
                          <li>GLM-based poetry generation and content optimization</li>
                          <li>Prompt engineering for code generation improvement</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">Publication</h3>
                        <p className="text-gray-600">Q. Zheng, X. Xia, et al. &ldquo;CodeGeeX: A Pre-Trained Model for Code Generation with Multilingual Benchmarking on HumanEval-X.&rdquo; <strong>KDD 2023</strong></p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="tag">CodeGeeX</span>
                      <span className="tag">GLM</span>
                      <span className="tag">Zhipu AI</span>
                      <span className="tag">Prompt Engineering</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recursive Self-Improvement */}
              <div className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-lg p-8 border-l-4 border-rose-600">
                <div className="flex items-start">
                  <div className="text-rose-600 mr-4 flex-shrink-0">
                    <FiRefreshCw size={32} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="text-2xl font-semibold">Recursive Self-Improvement &amp; Self-Evolution</h2>
                      <span className="tag bg-rose-100 text-rose-800">PhD Direction</span>
                    </div>
                    <p className="text-gray-700 mb-6">
                      Today&apos;s agents are frozen between runs: whatever they learn while solving a task is discarded when the context ends. My doctoral direction at PolyU asks what changes when that loop is closed &mdash; when an agent&apos;s own experience feeds back into the strategies, prompts, and tools it uses next time, and those revisions accumulate. This is where the memory work and the agent work meet: <strong>memory is the substrate that makes self-improvement possible</strong>, and the structure of that memory largely decides whether improvement compounds or drifts.
                    </p>

                    <div className="bg-white rounded-lg p-6 mb-6 border">
                      <h3 className="font-medium text-lg mb-4 text-center text-gray-800">The Self-Evolution Loop (Sketch)</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-rose-50 rounded-lg p-4 text-center border border-rose-200">
                          <div className="text-rose-700 font-semibold mb-1">Accumulate</div>
                          <div className="text-xs text-gray-500">Durable experience</div>
                        </div>
                        <div className="bg-orange-50 rounded-lg p-4 text-center border border-orange-200">
                          <div className="text-orange-700 font-semibold mb-1">Reflect</div>
                          <div className="text-xs text-gray-500">Judge own trajectories</div>
                        </div>
                        <div className="bg-amber-50 rounded-lg p-4 text-center border border-amber-200">
                          <div className="text-amber-700 font-semibold mb-1">Revise</div>
                          <div className="text-xs text-gray-500">Rewrite strategy &amp; tools</div>
                        </div>
                        <div className="bg-emerald-50 rounded-lg p-4 text-center border border-emerald-200">
                          <div className="text-emerald-700 font-semibold mb-1">Verify</div>
                          <div className="text-xs text-gray-500">Bounded, auditable change</div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 text-center mt-4">A directional sketch, not an architecture. Concrete designs and results are kept for the papers.</p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="font-medium text-lg mb-2">Open Questions I&apos;m Pursuing</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>Convergence vs. drift</strong> &mdash; what property of the loop makes repeated self-revision improve rather than degrade a system?</li>
                          <li><strong>Measuring a moving target</strong> &mdash; how do you evaluate improvement when the evaluator, the memory, and the policy all change together?</li>
                          <li><strong>Credit over long horizons</strong> &mdash; which past experience deserves to be kept, and which should be allowed to fade?</li>
                          <li><strong>Bounded self-modification</strong> &mdash; what verification envelope keeps self-directed change reversible, interpretable, and safe?</li>
                          <li><strong>Open-ended evaluation</strong> &mdash; benchmarks that do not saturate as the agent gets better at them.</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">Relation to Other Work</h3>
                        <p className="text-gray-600">Continues directly from the brain-inspired memory line (BMAM) and the multi-agent line above, and sits on <Link href="/startrail" className="text-primary hover:underline">Choice Point 04</Link> of the Star Trail route &mdash; the fork between unconstrained and supervised recursive growth.</p>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">Status</h3>
                        <p className="text-gray-600">Early-stage doctoral research. Described here at the level of direction; specific methods, systems, and preliminary results are intentionally not detailed until publication.</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="tag bg-rose-100 text-rose-800">RSI</span>
                      <span className="tag">Self-Evolving Agents</span>
                      <span className="tag">Experience Accumulation</span>
                      <span className="tag">Meta-Cognition</span>
                      <span className="tag">Bounded Self-Modification</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/discuss" className="btn btn-primary">
                Discuss Research
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
