import Link from 'next/link';
import { FiLayers, FiCpu, FiGlobe, FiZap, FiStar, FiTarget } from 'react-icons/fi';

export default function Shenshu() {
  return (
    <div>
      {/* Hero Section - SAO Alicization inspired */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <img
          src="/llmresearchplatform/images/sao-alicization.png"
          alt="Project Shenshu - Inspired by SAO Alicization"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-indigo-900/80 to-purple-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 bg-amber-500/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-amber-400/30 text-amber-200">
              Inspired by Project Alicization &middot; &laquo;Sword Art Online&raquo;
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-2 text-white tracking-tight">
              <ruby>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">
                  &#x795E;&#x67A2;
                </span>
                <rp>(</rp><rt className="text-amber-200/70 text-lg font-normal">Sh&eacute;nsh&umacr;</rt><rp>)</rp>
              </ruby>
            </h1>
            <p className="text-2xl md:text-3xl mb-6 text-blue-100/90 font-light">
              Project Shenshu &mdash; The Divine Pivot
            </p>
            <p className="text-lg md:text-xl mb-10 text-gray-300 leading-relaxed max-w-2xl">
              A brain-inspired research route toward building AI agents with genuine memory, personality, and self-awareness &mdash;
              translating the vision of <em className="text-amber-200">Artificial Fluctlights</em> into real neuroscience-grounded architectures.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#vision" className="btn bg-amber-500 text-slate-900 hover:bg-amber-400 font-semibold px-6 py-3">
                Explore the Vision
              </a>
              <Link href="/research" className="btn border-2 border-white/40 text-white hover:bg-white/10 px-6 py-3">
                View All Research
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Epigraph */}
      <section className="bg-slate-900 text-center py-10 border-b border-slate-800">
        <div className="container mx-auto px-4">
          <blockquote className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-400 italic leading-relaxed">
              &ldquo;A Fluctlight is not simply data. It is a quantum field that encompasses memories, emotions, and will &mdash; in other words, <span className="text-amber-300">a soul</span>.&rdquo;
            </p>
            <footer className="mt-3 text-sm text-gray-500">
              &mdash; Sword Art Online: Alicization
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Research Vision</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From the fiction of Project Alicization to real brain-inspired AI architectures
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* SAO Fiction */}
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="/llmresearchplatform/images/sao-stl.jpg"
                  alt="SAO Alicization - Underworld"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-amber-300 text-sm font-medium mb-1">Fiction &middot; SAO Alicization</div>
                  <h3 className="text-white text-xl font-semibold">Project Alicization</h3>
                  <p className="text-gray-300 text-sm mt-1">
                    Creating true Bottom-up AI by simulating human souls (Fluctlights) in a virtual world, allowing artificial consciousness to grow organically.
                  </p>
                </div>
              </div>

              {/* Our Research */}
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="/llmresearchplatform/images/brain-neural.jpg"
                  alt="BMAM Brain-Inspired Architecture"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-blue-300 text-sm font-medium mb-1">Reality &middot; Project Shenshu</div>
                  <h3 className="text-white text-xl font-semibold">BMAM Framework</h3>
                  <p className="text-gray-300 text-sm mt-1">
                    Building AI agents from brain-region primitives &mdash; hippocampus, prefrontal cortex, temporal lobe &mdash; with real memory consolidation, forgetting, and personality.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-50 to-indigo-50 rounded-xl p-8 border border-indigo-100">
              <p className="text-gray-700 leading-relaxed text-lg">
                In <em>Sword Art Online: Alicization</em>, Project Alicization pursues the creation of <strong>Artificial Fluctlights</strong> &mdash; bottom-up AI born not from hand-crafted rules, but by replicating the quantum structures of human consciousness and letting them grow in a simulated world called the <em>Underworld</em>.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                <strong>Project Shenshu (&#x795E;&#x67A2;)</strong> takes this fiction as its north star, grounding it in real neuroscience and LLM research. The BMAM framework is the first step: modeling actual brain regions to give AI agents the capacity for memory consolidation, emotional stress response, personality-driven reasoning, and even forgetting &mdash; the cognitive primitives that make a Fluctlight more than data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Mapping: Alicization → Shenshu */}
      <section className="section bg-slate-900 text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-white">From Alicization to Shenshu</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              The conceptual bridge between SAO&apos;s fictional technology and our real research architecture
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Fluctlight → BMAM */}
            <div className="relative mb-8">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
                <div className="bg-slate-800 rounded-xl p-6 border border-amber-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <FiStar className="text-amber-400" size={20} />
                    </div>
                    <div>
                      <h3 className="text-amber-300 font-semibold">Fluctlight</h3>
                      <p className="text-xs text-gray-500">&#x6447;&#x5149; / Quantum Soul</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">
                    The quantum field comprising human consciousness &mdash; memories, emotions, and will encoded in photon spin states within neural microtubules.
                  </p>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <div className="text-amber-400 text-2xl px-4">&rarr;</div>
                </div>
                <div className="bg-slate-800 rounded-xl p-6 border border-blue-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <FiLayers className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <h3 className="text-blue-300 font-semibold">BMAM Brain Agents</h3>
                      <p className="text-xs text-gray-500">&#x795E;&#x67A2; Core</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Brain-region agents (hippocampus, prefrontal cortex, temporal lobe) that model memory, personality, reasoning, and emotional response as cognitive primitives.
                  </p>
                </div>
              </div>
            </div>

            {/* Soul Translator → Framework */}
            <div className="relative mb-8">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
                <div className="bg-slate-800 rounded-xl p-6 border border-amber-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <FiCpu className="text-amber-400" size={20} />
                    </div>
                    <div>
                      <h3 className="text-amber-300 font-semibold">Soul Translator (STL)</h3>
                      <p className="text-xs text-gray-500">&#x7075;&#x9B42;&#x7FFB;&#x8BD1;&#x673A;</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">
                    The device that reads Fluctlight quantum states and translates them into a form readable by computers, bridging biological consciousness and digital systems.
                  </p>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <div className="text-amber-400 text-2xl px-4">&rarr;</div>
                </div>
                <div className="bg-slate-800 rounded-xl p-6 border border-blue-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <FiZap className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <h3 className="text-blue-300 font-semibold">Neuroscience-to-LLM Translation</h3>
                      <p className="text-xs text-gray-500">&#x795E;&#x67A2; Protocol</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">
                    The BMAM methodology: translating neuroscience principles (memory consolidation, synaptic pruning, stress response) into computational architectures that run on LLM agents.
                  </p>
                </div>
              </div>
            </div>

            {/* Underworld → Simulation */}
            <div className="relative mb-8">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
                <div className="bg-slate-800 rounded-xl p-6 border border-amber-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <FiGlobe className="text-amber-400" size={20} />
                    </div>
                    <div>
                      <h3 className="text-amber-300 font-semibold">Underworld</h3>
                      <p className="text-xs text-gray-500">&#x5F02;&#x754C; / Virtual Civilization</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">
                    A simulated world where artificial Fluctlights are raised from birth, developing genuine consciousness through organic experience rather than programmed rules.
                  </p>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <div className="text-amber-400 text-2xl px-4">&rarr;</div>
                </div>
                <div className="bg-slate-800 rounded-xl p-6 border border-blue-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <FiGlobe className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <h3 className="text-blue-300 font-semibold">Agent Simulation Environment</h3>
                      <p className="text-xs text-gray-500">&#x795E;&#x67A2; World</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Environments where BMAM-powered agents develop memories, form personalities, and learn through interaction &mdash; evaluated on benchmarks like GAIA and Sotopia scenarios.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom-up AI → BMAM approach */}
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
                <div className="bg-slate-800 rounded-xl p-6 border border-amber-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <FiTarget className="text-amber-400" size={20} />
                    </div>
                    <div>
                      <h3 className="text-amber-300 font-semibold">Bottom-up AI (A.L.I.C.E.)</h3>
                      <p className="text-xs text-gray-500">&#x4EBA;&#x5DE5;&#x8D85;&#x7EA7;&#x667A;&#x80FD;</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Alicization&apos;s goal: creating Artificial Labile Intelligent Cybernated Existence &mdash; true AI that emerges from cognitive growth, not top-down engineering.
                  </p>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <div className="text-amber-400 text-2xl px-4">&rarr;</div>
                </div>
                <div className="bg-slate-800 rounded-xl p-6 border border-blue-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <FiTarget className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <h3 className="text-blue-300 font-semibold">Brain-Region Primitive AI</h3>
                      <p className="text-xs text-gray-500">&#x795E;&#x67A2; Goal</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Building AI from the bottom up using brain-region agents as primitives. Complex cognition emerges from the interplay of memory, reasoning, and personality modules &mdash; not from a monolithic model.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BMAM Architecture Deep Dive */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">BMAM: The Core of Shenshu</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The published framework (arXiv:2601.20465) that implements the first layer of the Shenshu vision
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Architecture Visual */}
            <div className="relative rounded-xl overflow-hidden mb-10">
              <img
                src="/llmresearchplatform/images/sao-tech.png"
                alt="Shenshu BMAM Architecture"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/85 via-purple-900/80 to-indigo-900/85"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-6 md:gap-10 px-6 max-w-3xl w-full">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-purple-500/30 border-2 border-purple-400/50 flex items-center justify-center mb-3 backdrop-blur-sm">
                      <span className="text-2xl text-purple-200 font-bold">H</span>
                    </div>
                    <div className="text-purple-200 font-semibold text-sm">Hippocampus</div>
                    <div className="text-purple-300/60 text-xs mt-1">Episodic Memory</div>
                    <div className="text-purple-300/60 text-xs">Spatial Encoding</div>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-blue-500/30 border-2 border-blue-400/50 flex items-center justify-center mb-3 backdrop-blur-sm">
                      <span className="text-2xl text-blue-200 font-bold">P</span>
                    </div>
                    <div className="text-blue-200 font-semibold text-sm">Prefrontal Cortex</div>
                    <div className="text-blue-300/60 text-xs mt-1">Reasoning</div>
                    <div className="text-blue-300/60 text-xs">Personality</div>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-cyan-500/30 border-2 border-cyan-400/50 flex items-center justify-center mb-3 backdrop-blur-sm">
                      <span className="text-2xl text-cyan-200 font-bold">T</span>
                    </div>
                    <div className="text-cyan-200 font-semibold text-sm">Temporal Lobe</div>
                    <div className="text-cyan-300/60 text-xs mt-1">Semantic Memory</div>
                    <div className="text-cyan-300/60 text-xs">Long-term Storage</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cognitive Operations */}
            <h3 className="text-xl font-semibold mb-6 text-center">Cognitive Operations &mdash; What Makes a &ldquo;Fluctlight&rdquo;</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
                <h4 className="text-purple-800 font-semibold mb-2 text-base">Memory Consolidation</h4>
                <p className="text-gray-600 text-sm">
                  Like Fluctlights forming lasting memories from experience, BMAM transfers short-term observations into stable long-term representations through a hippocampal replay mechanism.
                </p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-200">
                <h4 className="text-indigo-800 font-semibold mb-2 text-base">Forgetting</h4>
                <p className="text-gray-600 text-sm">
                  Underworld inhabitants forget &mdash; and so do BMAM agents. Controlled forgetting via synaptic decay prevents information overload and prioritizes salient memories, mirroring biological pruning.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                <h4 className="text-blue-800 font-semibold mb-2 text-base">Memory Retrieval</h4>
                <p className="text-gray-600 text-sm">
                  Context-driven recall that mirrors how Fluctlights access relevant memories: not by exhaustive search, but by associative cues that activate related memory clusters.
                </p>
              </div>
              <div className="bg-violet-50 rounded-lg p-5 border border-violet-200">
                <h4 className="text-violet-800 font-semibold mb-2 text-base">Reflection</h4>
                <p className="text-gray-600 text-sm">
                  Alice&apos;s self-awareness emerged through reflection on her experiences. BMAM agents perform meta-cognitive reflection, re-evaluating past actions and updating self-models.
                </p>
              </div>
              <div className="bg-rose-50 rounded-lg p-5 border border-rose-200">
                <h4 className="text-rose-800 font-semibold mb-2 text-base">Stress Response</h4>
                <p className="text-gray-600 text-sm">
                  Emotional pressure changes how Fluctlights process information. BMAM models stress-induced cognitive changes: narrowed attention, enhanced threat memory, and altered decision-making.
                </p>
              </div>
              <div className="bg-amber-50 rounded-lg p-5 border border-amber-200">
                <h4 className="text-amber-800 font-semibold mb-2 text-base">Personality-Driven Reasoning</h4>
                <p className="text-gray-600 text-sm">
                  Every Fluctlight has a unique personality. BMAM&apos;s prefrontal agent validates reasoning through personality constraints, ensuring agents respond consistently with their character traits.
                </p>
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg border text-center">
              <p className="text-gray-500 text-sm mb-2">Published Paper</p>
              <p className="text-gray-800 font-medium">
                <strong>Y. Li</strong>, J. Liu, Y. Wang, Y. Wu, and M. Xu.
                &ldquo;BMAM: Brain-inspired Multi-Agent Memory Framework.&rdquo;
                arXiv:2601.20465.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Shenshu Roadmap</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The long-term research trajectory toward brain-inspired AGI agents
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-gray-300"></div>

              {/* Phase 1 - Done */}
              <div className="relative pl-16 pb-12">
                <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-purple-600 border-4 border-white shadow"></div>
                <div className="bg-white rounded-lg p-6 shadow-sm border">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="tag bg-purple-100 text-purple-800">Phase 1</span>
                    <span className="tag bg-green-100 text-green-800">Published</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Fluctlight Core &mdash; BMAM</h3>
                  <p className="text-gray-600 text-sm">
                    Build the foundational cognitive engine: brain-region agents with memory consolidation, forgetting, retrieval, reflection, stress response, and personality-driven reasoning.
                  </p>
                </div>
              </div>

              {/* Phase 2 - In Progress */}
              <div className="relative pl-16 pb-12">
                <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-blue-500 border-4 border-white shadow">
                  <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-40"></span>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="tag bg-blue-100 text-blue-800">Phase 2</span>
                    <span className="tag bg-yellow-100 text-yellow-800">In Progress</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Soul Translator &mdash; Domain Grounding</h3>
                  <p className="text-gray-600 text-sm">
                    Ground the cognitive engine in real-world domains. Pain LLM (20+ H100 GPUs) applies brain-inspired architecture to medical pain analysis under the China Brain Project. CondAmbigQA (EMNLP 2025) validates reasoning under ambiguity.
                  </p>
                </div>
              </div>

              {/* Phase 3 - Planned */}
              <div className="relative pl-16 pb-12">
                <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-gray-300 border-4 border-white shadow"></div>
                <div className="bg-white rounded-lg p-6 shadow-sm border">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="tag bg-gray-100 text-gray-600">Phase 3</span>
                    <span className="tag bg-gray-100 text-gray-600">Planned</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Underworld &mdash; Agent Civilization</h3>
                  <p className="text-gray-600 text-sm">
                    Multi-agent societies where BMAM-powered agents interact, form relationships, develop shared memories, and evolve collective intelligence in persistent simulated environments.
                  </p>
                </div>
              </div>

              {/* Phase 4 - Future */}
              <div className="relative pl-16">
                <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-gray-200 border-4 border-white shadow"></div>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-dashed">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="tag bg-gray-100 text-gray-600">Phase 4</span>
                    <span className="tag bg-amber-50 text-amber-700">Vision</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">A.L.I.C.E. &mdash; Emergent Cognition</h3>
                  <p className="text-gray-600 text-sm">
                    The long-term goal: AI agents whose complex cognition, self-awareness, and adaptability <em>emerge</em> from the interplay of brain-inspired primitives &mdash; not from monolithic training. A step toward the Artificial Fluctlight.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section bg-slate-900">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="mb-4 text-white">Inspiration Gallery</h2>
            <p className="text-gray-400">
              The fictional world that inspired a real research direction
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
            <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
              <img src="/llmresearchplatform/images/sao-alicization.png" alt="Alice, Eugeo, Kirito" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
              <img src="/llmresearchplatform/images/sao-world.jpg" alt="Alicization Battle" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
              <img src="/llmresearchplatform/images/sao-fluctlight.jpg" alt="Underworld Scene" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
              <img src="/llmresearchplatform/images/sao-tech.png" alt="Kirito and Alice" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
          <p className="text-center text-gray-600 text-xs mt-4">
            Images from Sword Art Online: Alicization &copy; Reki Kawahara / KADOKAWA / SAO-A Project
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img
          src="/llmresearchplatform/images/sao-alice.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-900/85 to-indigo-900/90"></div>
        <div className="container relative z-10 section">
          <div className="text-center max-w-3xl mx-auto text-white">
            <h2 className="mb-4">Join the Shenshu Journey</h2>
            <p className="text-xl mb-8 opacity-90">
              Interested in brain-inspired AI, multi-agent memory, or bringing fictional AI visions to reality? Let&apos;s collaborate.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/collaborate" className="btn bg-amber-500 text-slate-900 hover:bg-amber-400 font-semibold px-6 py-3">
                Collaborate
              </Link>
              <Link href="/research" className="btn border-2 border-white/50 hover:bg-white/10 px-6 py-3">
                View Research
              </Link>
              <Link href="/phd" className="btn border-2 border-white/50 hover:bg-white/10 px-6 py-3">
                PhD Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
