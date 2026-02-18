
import React, { useState } from 'react';
import NeuralBackground from './components/NeuralBackground';
import BrainLogo from './components/BrainLogo';
import { getOperationalAudit } from './services/geminiService';
import { PartnerForm, AnalysisResult } from './types';
import { 
  ShieldIcon, 
  BlueprintIcon, 
  RocketIcon, 
  CalendarIcon, 
  ToolIcon, 
  LayerIcon 
} from './components/Icons';

const App: React.FC = () => {
  const [form, setForm] = useState<PartnerForm>({
    name: '',
    email: '',
    phone: '',
    budget: '',
    bottlenecks: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [auditResult, setAuditResult] = useState<AnalysisResult | null>(null);
  const [isAuditing, setIsAuditing] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleAudit = async () => {
    if (!form.bottlenecks) return;
    setIsAuditing(true);
    const result = await getOperationalAudit(form.bottlenecks);
    setAuditResult(result);
    setIsAuditing(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <NeuralBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/40 backdrop-blur-2xl">
        <div className="max-w-screen-xl mx-auto px-8 h-20 flex items-center justify-between">
          <button onClick={() => scrollTo('#home')} className="flex items-center gap-3 group">
            <BrainLogo size={32} className="group-hover:scale-110 transition-transform" />
            <span className="text-lg font-medium tracking-tight font-display text-white">HyzaLabs</span>
          </button>
          <div className="hidden md:flex items-center gap-10 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            <button onClick={() => scrollTo('#protocol')} className="hover:text-white transition-colors">The Protocol</button>
            <button onClick={() => scrollTo('#intelligence')} className="hover:text-white transition-colors">Core Intelligence</button>
            <button onClick={() => scrollTo('#genesis')} className="text-white border-b border-white/20 pb-1 hover:border-white transition-all">
              Genesis Intake
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-64 pb-32 px-8 cinematic-fade">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-[5.5rem] font-bold tracking-tighter leading-[1] mb-12 text-white text-glow">
              Build Once. <br />
              <span className="text-white/40">Scale Automatically.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-16 leading-relaxed font-light">
              We design and deploy custom AI agents that automate revenue recovery, 
              retention intelligence, and operational workflows for high-performance fitness facilities.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button 
                onClick={() => scrollTo('#genesis')}
                className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-full font-semibold transition-all hover:scale-105 active:scale-95 text-center"
              >
                Secure Early Access
              </button>
              <button 
                onClick={() => scrollTo('#audit')}
                className="w-full sm:w-auto px-10 py-5 glass text-white rounded-full font-medium transition-all hover:bg-white/5 text-center"
              >
                Request Infrastructure Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="line-accent"></div>

      {/* Redesigned Approach: The Protocol */}
      <section id="protocol" className="py-40 px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-24">
            <span className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-4 block">Deployment Lifecycle</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white">The Protocol.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { step: "01", title: "Diagnostic Mapping", text: "We perform a forensic analysis of your current membership lifecycle, identifying precise failure points where manual effort is leaking revenue." },
              { step: "02", title: "Agent Synthesis", text: "Custom intelligence nodes are engineered to mirror your brand's logic, handling member interactions with deterministic precision." },
              { step: "03", title: "Autonomous Scaling", text: "The system is activated across your facility, executing retention and recovery protocols 24/7 without requiring oversight." }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="text-[10rem] font-bold text-white/5 absolute -top-24 -left-8 pointer-events-none select-none">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-6 font-display text-white relative z-10">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light relative z-10">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned Capabilities: Core Intelligence */}
      <section id="intelligence" className="py-40 px-8 bg-[#030308]">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 items-end mb-32">
            <div>
              <span className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-4 block">System Capabilities</span>
              <h2 className="text-4xl md:text-6xl font-bold font-display leading-tight text-white">Engineering <br /> Operational Certainty.</h2>
            </div>
            <p className="text-gray-400 text-xl font-light leading-relaxed">
              Our infrastructure provides a deterministic layer for gym operations. 
              We replace variable human performance with consistent AI execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
            {[
              { label: "Revenue Recovery", desc: "Autonomous handling of failed recurring billing with high-empathy retry logic." },
              { label: "Retention Guard", desc: "Predictive analysis of member usage patterns to prevent churn before it happens." },
              { label: "Lead Conditioning", desc: "Automated, personalized nurturing that moves prospects from inquiry to first visit." },
              { label: "Workflow Logic", desc: "Standardizing facility tasks through automated staff assignment protocols." }
            ].map((target, i) => (
              <div key={i} className="glass p-10 hover:bg-white/[0.04] transition-all cursor-default group border-transparent hover:border-blue-500/20">
                <h4 className="text-lg font-bold mb-4 font-display group-hover:text-blue-400 transition-colors text-white">{target.label}</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{target.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Section */}
      <section id="audit" className="py-40 px-8">
        <div className="max-w-screen-md mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 font-display text-white">Infrastructure Audit</h2>
            <p className="text-gray-400 font-light">Identify your most critical bottleneck. We will architect an automated counter-measure.</p>
          </div>
          
          <div className="glass p-12 rounded-[2rem] shadow-2xl relative overflow-hidden border-white/10">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <BrainLogo size={140} />
            </div>
            <textarea 
              className="w-full bg-white/5 border border-white/5 rounded-2xl p-8 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/30 transition-all mb-8 min-h-[160px] text-lg font-light"
              placeholder="e.g. 15% of membership dues are failing monthly with zero follow-up..."
              value={form.bottlenecks}
              onChange={(e) => setForm({...form, bottlenecks: e.target.value})}
            />
            <button 
              onClick={handleAudit}
              disabled={isAuditing || !form.bottlenecks}
              className={`w-full py-5 rounded-full font-semibold tracking-wide transition-all ${isAuditing ? 'bg-white/5 text-gray-500' : 'bg-white text-black hover:scale-[1.02]'}`}
            >
              {isAuditing ? 'Processing Structural Data...' : 'Generate Strategic Analysis'}
            </button>

            {auditResult && (
              <div className="mt-12 p-8 rounded-2xl bg-blue-500/5 border border-blue-500/10 animate-fade-in">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Protocol v4.0 Active</span>
                </div>
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold text-gray-600 uppercase mb-2 block text-white">Engineering Strategy</span>
                    <p className="text-white leading-relaxed">{auditResult.strategy}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/5">
                    <div>
                      <span className="text-xs font-bold text-gray-600 uppercase mb-1 block">Criticality</span>
                      <p className="text-sm font-medium text-blue-400 uppercase tracking-widest">{auditResult.priority}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gray-600 uppercase mb-1 block">Expected Yield</span>
                      <p className="text-sm font-medium text-white">{auditResult.potentialImpact}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bridging Section: Verification Layer */}
      <section className="py-24 px-8 relative overflow-hidden bg-gradient-to-b from-transparent via-blue-900/5 to-transparent">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center">
          <div className="w-px h-24 bg-gradient-to-b from-blue-500/50 to-transparent mb-12"></div>
          
          <div className="text-center mb-24 max-w-2xl">
            <h3 className="text-3xl font-bold font-display text-white mb-6">Operational Integrity.</h3>
            <p className="text-gray-400 font-light text-lg">
              We design for reliability. Automation isn't about replacing the human touch—it's about ensuring the critical tasks that scale your business never get missed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 w-full">
            <div className="text-center group p-8 glass rounded-3xl border-transparent hover:border-blue-500/10 transition-all">
              <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/10 transition-all">
                <LayerIcon />
              </div>
              <h4 className="text-white font-bold mb-2 font-display">Neural Routing</h4>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">L1 Architecture</p>
            </div>
            <div className="text-center group p-8 glass rounded-3xl border-transparent hover:border-blue-500/10 transition-all">
              <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/10 transition-all">
                <ToolIcon />
              </div>
              <h4 className="text-white font-bold mb-2 font-display">Custom Tooling</h4>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Bespoke Engines</p>
            </div>
            <div className="text-center group p-8 glass rounded-3xl border-transparent hover:border-blue-500/10 transition-all">
              <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/10 transition-all">
                <ShieldIcon />
              </div>
              <h4 className="text-white font-bold mb-2 font-display">Security Protocol</h4>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Deterministic Data</p>
            </div>
          </div>

          <div className="w-px h-24 bg-gradient-to-t from-blue-500/50 to-transparent mt-12"></div>
        </div>
      </section>

      {/* Redesigned Genesis Intake */}
      <section id="genesis" className="py-40 px-8 bg-[#020205] border-t border-white/5">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-32">
          <div>
            <span className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-4 block">Deployment Queue</span>
            <h2 className="text-5xl md:text-6xl font-bold mb-10 font-display text-white">Genesis Intake.</h2>
            <p className="text-gray-400 text-xl font-light leading-relaxed mb-12">
              We operate at a limited capacity to ensure every deployment meets our technical standard. 
              We are currently selecting three partners for the next operational cycle.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 group cursor-default">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-500/10 transition-colors">
                  <CalendarIcon />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Architectural Session</h4>
                  <p className="text-sm text-gray-500 font-light">A technical review to determine if your current tech stack can support autonomous agent integration.</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group cursor-default">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-500/10 transition-colors">
                  <BlueprintIcon />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Synthesized Logic</h4>
                  <p className="text-sm text-gray-500 font-light">We don't sell templates. Your agents are custom-engineered for your specific facility's DNA.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-12 rounded-[2.5rem] border-white/5">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-8">
                  <RocketIcon />
                </div>
                <h3 className="text-3xl font-bold mb-4 font-display text-white">Transmission Received.</h3>
                <p className="text-gray-400 font-light">An infrastructure lead will review your application. Expect a response within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <h3 className="text-2xl font-bold mb-4 font-display text-white">Intake Application</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/30" placeholder="Elias Vance" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Work Email</label>
                    <input required type="email" className="w-full bg-white/5 border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/30" placeholder="e.vance@studio.com" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Contact</label>
                    <input required type="tel" className="w-full bg-white/5 border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/30" placeholder="+1..." value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">System Tier</label>
                    <select required className="w-full bg-white/5 border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/30 appearance-none cursor-pointer" value={form.budget} onChange={(e) => setForm({...form, budget: e.target.value})}>
                      <option value="" className="bg-[#050510]">Select Budget</option>
                      <option value="5k-15k" className="bg-[#050510]">$5,000 — $15,000</option>
                      <option value="15k-30k" className="bg-[#050510]">$15,000 — $30,000</option>
                      <option value="enterprise" className="bg-[#050510]">$30,000+</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Inertia Analysis</label>
                  <textarea required className="w-full bg-white/5 border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/30 min-h-[120px]" placeholder="What part of your operation is currently failing to scale?" value={form.bottlenecks} onChange={(e) => setForm({...form, bottlenecks: e.target.value})} />
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full py-5 bg-white text-black rounded-full font-bold transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50">
                  {isSubmitting ? 'Transmitting Data...' : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-8 border-t border-white/5">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <button onClick={() => scrollTo('#home')} className="flex items-center gap-4 transition-opacity hover:opacity-80">
            <BrainLogo size={32} />
            <div>
              <span className="text-xl font-bold font-display block text-white">HyzaLabs</span>
              <span className="text-[9px] text-gray-600 tracking-[0.4em] uppercase font-bold">Autonomous Infrastructure</span>
            </div>
          </button>
          <div className="flex gap-20 text-[11px] text-gray-600 font-bold uppercase tracking-widest">
            <div className="space-y-4">
              <p className="text-gray-400">Headquarters</p>
              <p className="text-gray-500">San Francisco, CA</p>
              <p className="text-gray-500">partners@hyzalabs.ai</p>
            </div>
            <div className="space-y-4">
              <p className="text-gray-400">Nodes</p>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                <span className="text-gray-500">Protocol Active</span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between text-[10px] text-gray-700 font-medium uppercase tracking-widest">
          <span>© {new Date().getFullYear()} HyzaLabs AI. Built for the future of gym operations.</span>
          <span className="mt-4 md:mt-0">Strategic Automation. Deterministic Yield. No Hype.</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
