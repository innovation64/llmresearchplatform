import Link from 'next/link';
import { FiStar, FiTarget, FiZap, FiTrendingUp, FiGitBranch, FiCompass, FiSunrise, FiAperture } from 'react-icons/fi';

export default function StarTrail() {
  return (
    <div>
      {/* Hero Section - Steins;Gate Inspired */}
      <section className="relative min-h-[560px] flex items-center overflow-hidden bg-black">
        <img
          src="/llmresearchplatform/images/sg-key.jpg"
          alt="Steins;Gate - Star Trail"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-30"
        />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#0a0a2e]/80 to-[#0d0d3a]/90"></div>
          {/* Stars */}
          <div className="absolute top-[10%] left-[15%] w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-[20%] left-[45%] w-0.5 h-0.5 bg-blue-200 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-[35%] left-[75%] w-1 h-1 bg-yellow-200 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-[50%] left-[25%] w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-[65%] left-[55%] w-1 h-1 bg-green-200 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
          <div className="absolute top-[80%] left-[85%] w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
          <div className="absolute top-[15%] left-[65%] w-0.5 h-0.5 bg-purple-200 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
          <div className="absolute top-[45%] left-[10%] w-1 h-1 bg-amber-200 rounded-full animate-pulse" style={{animationDelay: '0.7s'}}></div>
          <div className="absolute top-[70%] left-[35%] w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{animationDelay: '1.1s'}}></div>
          <div className="absolute top-[25%] left-[90%] w-1 h-1 bg-red-200 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          {/* Worldline traces */}
          <div className="absolute top-0 left-[30%] w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>
          <div className="absolute top-0 left-[50%] w-px h-full bg-gradient-to-b from-transparent via-amber-500/15 to-transparent"></div>
          <div className="absolute top-0 left-[70%] w-px h-full bg-gradient-to-b from-transparent via-red-500/10 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Divergence Meter */}
            <div className="inline-block mb-8">
              <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg px-6 py-3 shadow-[0_0_30px_rgba(34,197,94,0.15)]">
                <div className="font-mono text-green-400 text-3xl md:text-5xl tracking-[0.3em] font-bold" style={{textShadow: '0 0 10px rgba(34,197,94,0.5), 0 0 20px rgba(34,197,94,0.3)'}}>
                  1.048596
                </div>
                <div className="text-green-500/60 text-xs tracking-widest mt-1">DIVERGENCE METER</div>
              </div>
            </div>

            <div className="inline-block px-4 py-1.5 bg-green-500/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-green-500/20 text-green-300">
              Inspired by Steins;Gate &middot; A New Research Route
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-200 to-green-400">
                &#x661F;&#x8F68;
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-green-100/80 font-light">
              Star Trail &mdash; The Road to ASI
            </p>
            <p className="text-lg md:text-xl mb-10 text-gray-400 leading-relaxed max-w-2xl mx-auto">
              A forward-looking research route that charts the <em className="text-green-300">critical choice points</em> from today&apos;s LLMs to tomorrow&apos;s <strong className="text-amber-300">Artificial Super Intelligence</strong>. Every choice shifts the divergence &mdash; which worldline will we reach?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#thesis" className="btn bg-green-500 text-black hover:bg-green-400 font-semibold px-6 py-3">
                The Thesis
              </a>
              <a href="#routes" className="btn border-2 border-green-500/40 text-green-300 hover:bg-green-500/10 px-6 py-3">
                View Routes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Epigraph */}
      <section className="bg-[#0a0a2e] text-center py-10 border-b border-green-900/30">
        <div className="container mx-auto px-4">
          <blockquote className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-400 italic leading-relaxed">
              &ldquo;The universe has a beginning, but no end &mdash; <span className="text-green-300">Infinite</span>.<br />
              Stars, too, have beginnings, but their own power results in their destruction &mdash; <span className="text-green-300">Finite</span>.<br />
              History teaches that those who hold wisdom are the greatest fools.&rdquo;
            </p>
            <footer className="mt-3 text-sm text-gray-500">
              &mdash; Okabe Rintarou, Steins;Gate
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Core Thesis */}
      <section id="thesis" className="section bg-[#0d0d2b] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-white">The Star Trail Thesis</h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                A new research framework for thinking about the path to ASI
              </p>
            </div>

            <div className="bg-[#111140]/60 rounded-xl p-8 border border-green-500/10 mb-10">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                In Steins;Gate, Okabe discovers that the future is not fixed &mdash; it depends on <strong className="text-green-300">which worldline you&apos;re on</strong>. Each D-mail, each choice, shifts the divergence meter and changes the destination. Some worldlines end in dystopia. Only one &mdash; the <em className="text-green-300">Steins Gate worldline</em> &mdash; reaches the outcome where everyone is saved.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                The <strong className="text-amber-300">Star Trail (&#x661F;&#x8F68;)</strong> research route applies this thinking to AI development. The path from today&apos;s LLMs to ASI is <em>not</em> a straight line. It branches at critical <strong className="text-green-300">Choice Points</strong> &mdash; fundamental research questions whose answers determine which future we arrive at. Some branches lead to stagnation. Some lead to misaligned superintelligence. The <em>Steins Gate</em> branch leads to safe, beneficial ASI.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg">
                Star Trail is a research program dedicated to <strong className="text-white">identifying these choice points, understanding the branching consequences, and navigating toward the Steins Gate worldline</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#111140]/40 rounded-xl p-6 border border-red-500/10 text-center">
                <div className="text-4xl font-mono text-red-400 font-bold mb-3">&alpha;</div>
                <div className="text-gray-300 font-medium mb-2">Alpha Attractor</div>
                <div className="text-red-400/80 text-sm mb-2">Stagnation</div>
                <p className="text-gray-500 text-xs">Worldlines where AI research hits diminishing returns &mdash; bigger models but no emergent intelligence. Scaling walls, data exhaustion, architecture ceilings.</p>
              </div>
              <div className="bg-[#111140]/40 rounded-xl p-6 border border-blue-500/10 text-center">
                <div className="text-4xl font-mono text-blue-400 font-bold mb-3">&beta;</div>
                <div className="text-gray-300 font-medium mb-2">Beta Attractor</div>
                <div className="text-blue-400/80 text-sm mb-2">Misalignment</div>
                <p className="text-gray-500 text-xs">Worldlines where superintelligence emerges but without alignment &mdash; powerful but uncontrollable. Capability races without safety foundations.</p>
              </div>
              <div className="bg-[#111140]/40 rounded-xl p-6 border border-green-500/20 text-center">
                <div className="text-4xl font-mono text-green-400 font-bold mb-3">SG</div>
                <div className="text-green-300 font-medium mb-2">Steins Gate</div>
                <div className="text-green-400/80 text-sm mb-2">Beneficial ASI</div>
                <p className="text-gray-500 text-xs">The narrow worldline where intelligence emerges from <em>understanding</em> &mdash; brain-inspired, grounded, aligned. The convergence of memory, reasoning, and values.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Five Choice Points */}
      <section id="routes" className="section bg-[#080820]">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="mb-4 text-white">The Five Choice Points</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Critical research questions that determine which worldline we reach. Each choice point is a fork &mdash; the answer shifts the divergence meter toward stagnation, misalignment, or Steins Gate.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">

            {/* Choice Point 1: Memory */}
            <div className="bg-gradient-to-r from-[#1a1040] to-[#0f0f30] rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-56 bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-6 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-purple-500/20">
                  <div className="font-mono text-purple-400 text-sm mb-1">Choice Point 01</div>
                  <FiAperture className="text-purple-400 mb-2" size={36} />
                  <div className="text-purple-200 font-semibold text-center">How Should AI<br />Remember?</div>
                </div>
                <div className="flex-1 p-6">
                  <h3 className="text-xl font-semibold text-purple-200 mb-3">Memory Architecture: Context Window vs. Cognitive Memory</h3>
                  <p className="text-gray-400 mb-4">
                    Current LLMs &ldquo;remember&rdquo; through context windows &mdash; a flat buffer of tokens with no structure. Humans remember through <em className="text-purple-300">layered cognitive systems</em>: episodic memory, semantic memory, working memory, each with consolidation, forgetting, and retrieval dynamics. Which architecture can scale to superintelligent memory?
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-red-500/5 rounded-lg p-3 border border-red-500/10">
                      <div className="text-red-400 text-xs font-mono mb-1">&alpha; Stagnation Path</div>
                      <p className="text-gray-500 text-xs">Keep extending context windows. Hit O(n&sup2;) scaling walls. RAG as a band-aid. Memory remains a bottleneck forever.</p>
                    </div>
                    <div className="bg-green-500/5 rounded-lg p-3 border border-green-500/10">
                      <div className="text-green-400 text-xs font-mono mb-1">SG Path</div>
                      <p className="text-gray-500 text-xs">Brain-inspired memory systems with consolidation, forgetting, and retrieval. Memory that <em>grows</em> with the agent&apos;s experience. BMAM is Step 1.</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-purple-500/10 rounded text-purple-300/80 text-xs">Open Problem</span>
                    <span className="px-2 py-1 bg-purple-500/10 rounded text-purple-300/80 text-xs">Memory Consolidation</span>
                    <span className="px-2 py-1 bg-purple-500/10 rounded text-purple-300/80 text-xs">Lifelong Learning</span>
                    <span className="px-2 py-1 bg-purple-500/10 rounded text-purple-300/80 text-xs">Forgetting as Feature</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Choice Point 2: Grounding */}
            <div className="bg-gradient-to-r from-[#10200f] to-[#0f0f30] rounded-xl overflow-hidden border border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-56 bg-gradient-to-br from-emerald-900/50 to-emerald-800/30 p-6 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-emerald-500/20">
                  <div className="font-mono text-emerald-400 text-sm mb-1">Choice Point 02</div>
                  <FiCompass className="text-emerald-400 mb-2" size={36} />
                  <div className="text-emerald-200 font-semibold text-center">How Should AI<br />Understand<br />the World?</div>
                </div>
                <div className="flex-1 p-6">
                  <h3 className="text-xl font-semibold text-emerald-200 mb-3">World Grounding: Text-Only vs. Embodied Understanding</h3>
                  <p className="text-gray-400 mb-4">
                    LLMs trained on text alone develop &ldquo;knowledge&rdquo; without grounding &mdash; they can describe pain but never feel it. True intelligence requires <em className="text-emerald-300">grounded understanding</em>: connecting language to physical reality, sensory experience, and causal models of the world.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-500/5 rounded-lg p-3 border border-blue-500/10">
                      <div className="text-blue-400 text-xs font-mono mb-1">&beta; Misalignment Path</div>
                      <p className="text-gray-500 text-xs">Superintelligent text processing without world models. Powerful language manipulation without causal understanding. Ungroundable.</p>
                    </div>
                    <div className="bg-green-500/5 rounded-lg p-3 border border-green-500/10">
                      <div className="text-green-400 text-xs font-mono mb-1">SG Path</div>
                      <p className="text-gray-500 text-xs">Domain-specific grounding (like Pain LLM) as stepping stones. Build world models from specialized embodied experience before generalizing.</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-emerald-500/10 rounded text-emerald-300/80 text-xs">Open Problem</span>
                    <span className="px-2 py-1 bg-emerald-500/10 rounded text-emerald-300/80 text-xs">Embodied Cognition</span>
                    <span className="px-2 py-1 bg-emerald-500/10 rounded text-emerald-300/80 text-xs">Causal Reasoning</span>
                    <span className="px-2 py-1 bg-emerald-500/10 rounded text-emerald-300/80 text-xs">Domain Grounding</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Choice Point 3: Emergence */}
            <div className="bg-gradient-to-r from-[#0f1040] to-[#0f0f30] rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-colors">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-56 bg-gradient-to-br from-blue-900/50 to-blue-800/30 p-6 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-blue-500/20">
                  <div className="font-mono text-blue-400 text-sm mb-1">Choice Point 03</div>
                  <FiSunrise className="text-blue-400 mb-2" size={36} />
                  <div className="text-blue-200 font-semibold text-center">How Does<br />Intelligence<br />Emerge?</div>
                </div>
                <div className="flex-1 p-6">
                  <h3 className="text-xl font-semibold text-blue-200 mb-3">Emergence: Scaling vs. Architecture vs. Interaction</h3>
                  <p className="text-gray-400 mb-4">
                    Does intelligence emerge from scale alone (&ldquo;just make it bigger&rdquo;), from architectural innovation (new structures), or from <em className="text-blue-300">interaction between multiple agents</em>? This is perhaps the most consequential fork in AI research.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-red-500/5 rounded-lg p-3 border border-red-500/10">
                      <div className="text-red-400 text-xs font-mono mb-1">&alpha; Stagnation Path</div>
                      <p className="text-gray-500 text-xs">Bet everything on scale. Hit diminishing returns. Intelligence plateaus at &ldquo;very good autocomplete.&rdquo;</p>
                    </div>
                    <div className="bg-green-500/5 rounded-lg p-3 border border-green-500/10">
                      <div className="text-green-400 text-xs font-mono mb-1">SG Path</div>
                      <p className="text-gray-500 text-xs">Emergent intelligence from multi-agent interaction with brain-inspired primitives. Not one giant model, but a <em>civilization</em> of specialized minds.</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-500/10 rounded text-blue-300/80 text-xs">Open Problem</span>
                    <span className="px-2 py-1 bg-blue-500/10 rounded text-blue-300/80 text-xs">Emergence Theory</span>
                    <span className="px-2 py-1 bg-blue-500/10 rounded text-blue-300/80 text-xs">Collective Intelligence</span>
                    <span className="px-2 py-1 bg-blue-500/10 rounded text-blue-300/80 text-xs">Agent Society</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Choice Point 4: Self-Improvement */}
            <div className="bg-gradient-to-r from-[#1a2010] to-[#0f0f30] rounded-xl overflow-hidden border border-amber-500/20 hover:border-amber-500/40 transition-colors">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-56 bg-gradient-to-br from-amber-900/50 to-amber-800/30 p-6 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-amber-500/20">
                  <div className="font-mono text-amber-400 text-sm mb-1">Choice Point 04</div>
                  <FiTrendingUp className="text-amber-400 mb-2" size={36} />
                  <div className="text-amber-200 font-semibold text-center">How Should AI<br />Improve Itself?</div>
                </div>
                <div className="flex-1 p-6">
                  <h3 className="text-xl font-semibold text-amber-200 mb-3">Self-Improvement: Supervised vs. Autonomous Recursive Growth</h3>
                  <p className="text-gray-400 mb-4">
                    The transition from human-trained AI to self-improving AI is the most dangerous and most important threshold. How do we build systems that improve recursively while remaining <em className="text-amber-300">interpretable and controllable</em>?
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-500/5 rounded-lg p-3 border border-blue-500/10">
                      <div className="text-blue-400 text-xs font-mono mb-1">&beta; Misalignment Path</div>
                      <p className="text-gray-500 text-xs">Unconstrained recursive self-improvement. Intelligence explosion without oversight. The &ldquo;paperclip maximizer&rdquo; scenario.</p>
                    </div>
                    <div className="bg-green-500/5 rounded-lg p-3 border border-green-500/10">
                      <div className="text-green-400 text-xs font-mono mb-1">SG Path</div>
                      <p className="text-gray-500 text-xs">Bounded self-improvement with reflective meta-cognition. Agents that understand <em>why</em> they improve, with built-in value alignment at the cognitive level.</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-amber-500/10 rounded text-amber-300/80 text-xs">Open Problem</span>
                    <span className="px-2 py-1 bg-amber-500/10 rounded text-amber-300/80 text-xs">Recursive Improvement</span>
                    <span className="px-2 py-1 bg-amber-500/10 rounded text-amber-300/80 text-xs">Value Alignment</span>
                    <span className="px-2 py-1 bg-amber-500/10 rounded text-amber-300/80 text-xs">Meta-Cognition</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Choice Point 5: Values */}
            <div className="bg-gradient-to-r from-[#201020] to-[#0f0f30] rounded-xl overflow-hidden border border-rose-500/20 hover:border-rose-500/40 transition-colors">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-56 bg-gradient-to-br from-rose-900/50 to-rose-800/30 p-6 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-rose-500/20">
                  <div className="font-mono text-rose-400 text-sm mb-1">Choice Point 05</div>
                  <FiTarget className="text-rose-400 mb-2" size={36} />
                  <div className="text-rose-200 font-semibold text-center">What Should AI<br />Value?</div>
                </div>
                <div className="flex-1 p-6">
                  <h3 className="text-xl font-semibold text-rose-200 mb-3">Value Formation: Programmed Rules vs. Emergent Values from Experience</h3>
                  <p className="text-gray-400 mb-4">
                    In Steins;Gate, characters develop values through <em className="text-rose-300">lived experience and emotional bonds</em>. Can AI develop genuine values the same way &mdash; not through rule-following, but through cognitive development? Is alignment a training problem or an <em>architecture</em> problem?
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-500/5 rounded-lg p-3 border border-blue-500/10">
                      <div className="text-blue-400 text-xs font-mono mb-1">&beta; Misalignment Path</div>
                      <p className="text-gray-500 text-xs">RLHF-only alignment. Surface-level compliance without understanding. Values as constraints, easily circumvented by a sufficiently intelligent system.</p>
                    </div>
                    <div className="bg-green-500/5 rounded-lg p-3 border border-green-500/10">
                      <div className="text-green-400 text-xs font-mono mb-1">SG Path</div>
                      <p className="text-gray-500 text-xs">Values that <em>emerge</em> from brain-inspired cognitive development. Personality, empathy, and moral reasoning as cognitive primitives, not post-hoc constraints.</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-rose-500/10 rounded text-rose-300/80 text-xs">Open Problem</span>
                    <span className="px-2 py-1 bg-rose-500/10 rounded text-rose-300/80 text-xs">Value Emergence</span>
                    <span className="px-2 py-1 bg-rose-500/10 rounded text-rose-300/80 text-xs">Cognitive Alignment</span>
                    <span className="px-2 py-1 bg-rose-500/10 rounded text-rose-300/80 text-xs">Moral Reasoning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Steins Gate Route - ASI Roadmap */}
      <section className="section bg-gradient-to-b from-[#080820] via-[#0a1a0a] to-[#0d2010]">
        <div className="container">
          <div className="text-center mb-14">
            <div className="inline-block mb-4">
              <div className="bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-lg px-4 py-2 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                <div className="font-mono text-green-400 text-2xl tracking-[0.3em] font-bold" style={{textShadow: '0 0 10px rgba(34,197,94,0.5)'}}>
                  1.048596
                </div>
              </div>
            </div>
            <h2 className="mb-4 text-white">The Steins Gate Route</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              If we make the right choices at each fork &mdash; this is the worldline that leads to beneficial ASI
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-green-400 to-amber-400"></div>

              {/* Milestone 1 */}
              <div className="relative pl-16 pb-12">
                <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-green-500 border-4 border-[#0d2010] shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                <div className="bg-[#0a1a0a]/80 rounded-lg p-6 border border-green-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-green-400 text-sm">Milestone 01</span>
                    <span className="px-2 py-0.5 bg-green-500/20 rounded text-green-300 text-xs">Near-term</span>
                  </div>
                  <h3 className="text-lg font-semibold text-green-200 mb-2">Cognitive Memory Architectures</h3>
                  <p className="text-gray-400 text-sm">
                    Replace flat context windows with structured, brain-inspired memory systems. Agents that consolidate, forget, and retrieve like humans. The <strong className="text-green-300">BMAM framework</strong> and <strong className="text-green-300">Project Shenshu</strong> are the first steps on this milestone.
                  </p>
                </div>
              </div>

              {/* Milestone 2 */}
              <div className="relative pl-16 pb-12">
                <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-green-400 border-4 border-[#0d2010] shadow-[0_0_8px_rgba(34,197,94,0.3)]"></div>
                <div className="bg-[#0a1a0a]/80 rounded-lg p-6 border border-green-500/15">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-green-400 text-sm">Milestone 02</span>
                    <span className="px-2 py-0.5 bg-green-500/20 rounded text-green-300 text-xs">Medium-term</span>
                  </div>
                  <h3 className="text-lg font-semibold text-green-200 mb-2">Grounded World Models</h3>
                  <p className="text-gray-400 text-sm">
                    Connect cognitive memory to physical reality through domain-specific grounding. AI that understands pain, not just describes it. Build causal world models from embodied, specialized experience before attempting general world understanding.
                  </p>
                </div>
              </div>

              {/* Milestone 3 */}
              <div className="relative pl-16 pb-12">
                <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-green-300/50 border-4 border-[#0d2010]"></div>
                <div className="bg-[#0a1a0a]/80 rounded-lg p-6 border border-green-500/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-green-400 text-sm">Milestone 03</span>
                    <span className="px-2 py-0.5 bg-gray-500/20 rounded text-gray-300 text-xs">Long-term</span>
                  </div>
                  <h3 className="text-lg font-semibold text-green-200/80 mb-2">Emergent Collective Intelligence</h3>
                  <p className="text-gray-400 text-sm">
                    Multi-agent civilizations where intelligence emerges from interaction. Individual agents with brain-inspired cognition, collectively forming something greater &mdash; like neurons forming a brain, or Fluctlights forming the Underworld&apos;s civilization.
                  </p>
                </div>
              </div>

              {/* Milestone 4 */}
              <div className="relative pl-16 pb-12">
                <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-green-200/30 border-4 border-[#0d2010]"></div>
                <div className="bg-[#0a1a0a]/80 rounded-lg p-6 border border-green-500/5 border-dashed">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-green-400 text-sm">Milestone 04</span>
                    <span className="px-2 py-0.5 bg-amber-500/10 rounded text-amber-400 text-xs">Vision</span>
                  </div>
                  <h3 className="text-lg font-semibold text-green-200/60 mb-2">Bounded Recursive Self-Improvement</h3>
                  <p className="text-gray-400 text-sm">
                    Agent civilizations that can improve their own architectures &mdash; but through reflective meta-cognition, not blind optimization. Self-improvement constrained by emergent values, not just programmed rules.
                  </p>
                </div>
              </div>

              {/* ASI */}
              <div className="relative pl-16">
                <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-amber-400 border-4 border-[#0d2010] shadow-[0_0_15px_rgba(34,197,94,0.3),0_0_15px_rgba(251,191,36,0.3)]"></div>
                <div className="bg-gradient-to-r from-[#0a1a0a]/80 to-[#1a1a0a]/80 rounded-lg p-6 border border-amber-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-green-400 text-sm">Destination</span>
                    <span className="px-2 py-0.5 bg-amber-500/20 rounded text-amber-300 text-xs">STEINS GATE</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-200 to-amber-300">
                      Beneficial Artificial Super Intelligence
                    </span>
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Intelligence that emerged from understanding, not just computation. Grounded in the physical world. Aligned through cognitive development, not constraint. A civilization of minds that chose to be wise.
                  </p>
                  <div className="mt-4 font-mono text-green-400/60 text-xs text-center">
                    El Psy Kongroo.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connection to existing work */}
      <section className="section bg-[#0a0a2e]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-white">My Position on the Star Trail</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Star Trail is the <em>map</em>. My existing research projects are the first steps on specific milestones.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#111140]/60 rounded-xl p-6 border border-purple-500/10">
              <div className="flex items-center gap-2 mb-3">
                <FiStar className="text-purple-400" size={18} />
                <h3 className="text-purple-200 font-medium">BMAM &amp; Shenshu</h3>
              </div>
              <p className="text-gray-400 text-sm mb-2">
                Addresses <strong className="text-purple-300">Choice Point 01</strong> (Memory) and <strong className="text-purple-300">Milestone 01</strong>. First implementation of cognitive memory architectures for LLM agents.
              </p>
              <div className="text-green-400/60 text-xs font-mono">Shifting divergence toward SG on memory</div>
            </div>
            <div className="bg-[#111140]/60 rounded-xl p-6 border border-emerald-500/10">
              <div className="flex items-center gap-2 mb-3">
                <FiStar className="text-emerald-400" size={18} />
                <h3 className="text-emerald-200 font-medium">Pain LLM</h3>
              </div>
              <p className="text-gray-400 text-sm mb-2">
                Addresses <strong className="text-emerald-300">Choice Point 02</strong> (Grounding) and <strong className="text-emerald-300">Milestone 02</strong>. Domain-specific AI as a stepping stone to grounded world understanding.
              </p>
              <div className="text-green-400/60 text-xs font-mono">Shifting divergence toward SG on grounding</div>
            </div>
            <div className="bg-[#111140]/60 rounded-xl p-6 border border-blue-500/10">
              <div className="flex items-center gap-2 mb-3">
                <FiStar className="text-blue-400" size={18} />
                <h3 className="text-blue-200 font-medium">CondAmbigQA</h3>
              </div>
              <p className="text-gray-400 text-sm mb-2">
                Contributes to <strong className="text-blue-300">Choice Point 05</strong> (Values). Understanding ambiguity is prerequisite to understanding context, and context is prerequisite to moral reasoning.
              </p>
              <div className="text-green-400/60 text-xs font-mono">Foundation for contextual value reasoning</div>
            </div>
            <div className="bg-[#111140]/60 rounded-xl p-6 border border-amber-500/10">
              <div className="flex items-center gap-2 mb-3">
                <FiStar className="text-amber-400" size={18} />
                <h3 className="text-amber-200 font-medium">Multi-Agent &amp; RAG Work</h3>
              </div>
              <p className="text-gray-400 text-sm mb-2">
                Addresses <strong className="text-amber-300">Choice Point 03</strong> (Emergence). Multi-agent collaboration and knowledge retrieval as building blocks for collective intelligence.
              </p>
              <div className="text-green-400/60 text-xs font-mono">Toward emergent agent societies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Gallery */}
      <section className="section bg-[#080820]">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="mb-4 text-white">Inspiration Gallery</h2>
            <p className="text-gray-400">
              The worldline that inspired a research direction
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
            <div className="relative rounded-lg overflow-hidden aspect-[3/4]">
              <img src="/llmresearchplatform/images/sg-divergence.jpg" alt="Steins;Gate" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-green-300 text-xs font-mono">Worldline Divergence</div>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-[3/4]">
              <img src="/llmresearchplatform/images/sg-key.jpg" alt="Steins;Gate Key Visual" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-amber-300 text-xs font-mono">Choice and Consequence</div>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-[3/4]">
              <img src="/llmresearchplatform/images/sg-zero.jpg" alt="Steins;Gate 0" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-blue-300 text-xs font-mono">Beta Attractor Field</div>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-[3/4]">
              <img src="/llmresearchplatform/images/sg-new.jpg" alt="Steins;Gate - Convergence" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-green-300 text-xs font-mono">Steins Gate Worldline</div>
            </div>
          </div>
          <p className="text-center text-gray-600 text-xs mt-4">
            Images from Steins;Gate &copy; 5pb./Nitroplus/MAGES.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-black">
        <img
          src="/llmresearchplatform/images/sg-drama.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2e]/90 to-black"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-green-500/30 via-transparent to-transparent"></div>
          <div className="absolute top-0 left-[40%] w-px h-full bg-gradient-to-b from-purple-500/20 via-transparent to-transparent"></div>
          <div className="absolute top-0 left-[60%] w-px h-full bg-gradient-to-b from-blue-500/20 via-transparent to-transparent"></div>
          <div className="absolute top-0 left-[80%] w-px h-full bg-gradient-to-b from-amber-500/15 via-transparent to-transparent"></div>
        </div>
        <div className="container relative z-10 section">
          <div className="text-center max-w-3xl mx-auto text-white">
            <div className="font-mono text-green-400/40 text-sm mb-4 tracking-widest">DIVERGENCE 1.048596</div>
            <h2 className="mb-4 text-white">The Choice Is Ours</h2>
            <p className="text-xl mb-8 text-gray-400">
              Every research paper, every experiment, every architectural decision shifts the divergence meter. Star Trail is the map. The question is &mdash; which worldline will we choose?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/shenshu" className="btn bg-green-500 text-black hover:bg-green-400 font-semibold px-6 py-3">
                Project Shenshu
              </Link>
              <Link href="/research" className="btn border-2 border-green-500/40 text-green-300 hover:bg-green-500/10 px-6 py-3">
                View Research
              </Link>
              <Link href="/phd" className="btn border-2 border-white/20 text-gray-300 hover:bg-white/5 px-6 py-3">
                PhD Opportunities
              </Link>
            </div>
            <div className="mt-10 font-mono text-green-500/30 text-xs">
              El Psy Kongroo.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
