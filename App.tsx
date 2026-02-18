
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
        <div className="max-w-screen-xl mx-auto px-8 h-24 flex items-center justify-between">
          <button onClick={() => scrollTo('#home')} className="flex items-center gap-6 group">
            <BrainLogo size={56} className="group-hover:scale-105 transition-transform" />
            <div className="flex flex-col text-left">
              <span className="text-2xl font-bold tracking-tight font-display text-white leading-none">HyzaLabs</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-1.5 font-bold">Autonomous Systems</span>
            </div>
          </button>
          <div className="hidden md:flex items-center gap-12 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            <button onClick={() => scrollTo('#protocol')} className="hover:text-white transition-colors">The Protocol</button>
            <button onClick={() => scrollTo('#intelligence')} className="hover:text-white transition-colors">Core Intelligence</button>
            <button 
                onClick={() => scrollTo('#genesis')} 
                className="text-white bg-white/5 hover:bg-white/10 px-6 py-2.5 border border-white/10 rounded-full transition-all"
            >
              Genesis Intake
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-80 pb-48 px-8 cinematic-fade">
        <div className="max-w-screen-xl mx-auto flex flex-col items-start">
          <div className="mb-14 glass px-5 py-2.5 rounded-full border border-blue-500/20 inline-flex items-center gap-4">
             <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></div>
             <span className="text-[11px] font-bold text-blue-400 uppercase tracking-widest">V4.0 Infrastructure Live</span>
          </div>
          <div className="max-w-5xl">
            <h1 className="text-6xl md:text-[7rem] font-bold tracking-tighter leading-[0.85] mb-14 text-white text-glow">
              Build Once. <br />
              <span className="text-white/25">Scale Automatically.</span>
            </h1>
            <p className="text-2xl md:text-4xl text-gray-400 max-w-4xl mb-20 leading-relaxed font-light">
              We engineer custom AI infrastructure for high-performance fitness facilities, 
              replacing manual effort with deterministic autonomous execution.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <button 
                onClick={() => scrollTo('#genesis')}
                className="w-full sm:w-auto px-14 py-7 bg-white text-black rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 text-center shadow-2xl shadow-white/5"
              >
                Secure Early Access
              </button>
              <button 
                onClick={() => scrollTo('#audit')}
                className="w-full sm:w-auto px-14 py-7 glass text-white rounded-full font-bold text-lg transition-all hover:bg-white/5 text-center border border-white/10"
              >
                Request Infrastructure Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="line-accent"></div>

      {/* Protocol Section */}
      <section id="protocol" className="py-52 px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-28">
            <span className="text-xs font-bold text-blue-500 uppercase tracking-[0.5em] mb-5 block">Operational Roadmap</span>
            <h2 className="text-5xl md:text-7xl font-bold font-display text-white">The Protocol.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-24">
            {[
              { step: "01", title: "Diagnostic Mapping", text: "Forensic analysis of your member lifecycle to identify points of recurring revenue leakage and manual friction." },
              { step: "02", title: "Agent Synthesis", text: "Engineering custom intelligence nodes tailored to your brand voice and specific facility logic." },
              { step: "03", title: "Autonomous Scaling", text: "Activating 24/7 background agents that manage retention, recovery, and lead nurturing without human oversight." }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="text-[14rem] font-bold text-white/[0.02] absolute -top-40 -left-16 pointer-events-none select-none group-hover:text-blue-500/[0.04] transition-colors duration-1000">
                  {item.step}
                </div>
                <h3 className="text-4xl font-bold mb-8 font-display text-white relative z-10">{item.title}</h3>
                <p className="text-gray-400 text-xl leading-relaxed font-light relative z-10">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence Section */}
      <section id="intelligence" className="py-52 px-8 bg-[#04040a]">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-40 items-end mb-44">
            <div>
              <span className="text-xs font-bold text-blue-500 uppercase tracking-[0.5em] mb-5 block">System Core</span>
              <h2 className="text-5xl md:text-8xl font-bold font-display leading-tight text-white">Engineering <br /> Operational Certainty.</h2>
            </div>
            <p className="text-gray-400 text-3xl font-light leading-relaxed">
              We build the deterministic layer for gym operations, replacing variable human output with machine reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
            {[
              { label: "Revenue Recovery", desc: "Automated handling of failed recurring billing with personalized retry logic." },
              { label: "Retention Guard", desc: "Predictive usage analysis to intervene before a member decides to cancel." },
              { label: "Lead Conditioning", desc: "Sophisticated nurturing that converts cold inquiries into studio visits." },
              { label: "Workflow Logic", desc: "Standardizing facility management tasks through intelligent staff protocols." }
            ].map((target, i) => (
              <div key={i} className="glass p-14 hover:bg-white/[0.03] transition-all cursor-default group border-transparent hover:border-blue-500/10">
                <h4 className="text-2xl font-bold mb-6 font-display group-hover:text-blue-400 transition-colors text-white">{target.label}</h4>
                <p className="text-gray-500 text-lg font-light leading-relaxed">{target.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Section */}
      <section id="audit" className="py-52 px-8">
        <div className="max-w-screen-md mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-bold mb-8 font-display text-white">Infrastructure Audit</h2>
            <p className="text-gray-400 text-2xl font-light">Define your most critical bottleneck. We will architect the automated counter-measure.</p>
          </div>
          
          <div className="glass p-20 rounded-[4rem] shadow-2xl relative overflow-hidden border-white/5">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
              <BrainLogo size={320} />
            </div>
            <textarea 
              className="w-full bg-white/5 border border-white/10 rounded-[2rem] p-12 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/30 transition-all mb-12 min-h-[260px] text-2xl font-light"
              placeholder="Describe your current friction point..."
              value={form.bottlenecks}
              onChange={(e) => setForm({...form, bottlenecks: e.target.value})}
            />
            <button 
              onClick={handleAudit}
              disabled={isAuditing || !form.bottlenecks}
              className={`w-full py-8 rounded-full font-bold text-xl tracking-wider transition-all ${isAuditing ? 'bg-white/5 text-gray-500' : 'bg-white text-black hover:scale-[1.01]'}`}
            >
              {isAuditing ? 'Analyzing Structural Integrity...' : 'Analyze My Infrastructure'}
            </button>

            {auditResult && (
              <div className="mt-20 p-12 rounded-[2.5rem] bg-blue-500/5 border border-blue-500/10 animate-fade-in">
                <div className="flex items-center gap-5 mb-10">
                  <span className="w-4 h-4 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.4em]">Audit Output v4.0</span>
                </div>
                <div className="space-y-12">
                  <div>
                    <span className="text-[11px] font-bold text-gray-500 uppercase mb-4 block text-white tracking-[0.2em]">Engineering Strategy</span>
                    <p className="text-white text-2xl leading-relaxed">{auditResult.strategy}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-16 pt-10 border-t border-white/5">
                    <div>
                      <span className="text-[11px] font-bold text-gray-500 uppercase mb-3 block tracking-[0.2em]">Criticality</span>
                      <p className="text-2xl font-bold text-blue-400 uppercase tracking-widest">{auditResult.priority}</p>
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-gray-500 uppercase mb-3 block tracking-[0.2em]">Expected Impact</span>
                      <p className="text-2xl font-bold text-white tracking-tight">{auditResult.potentialImpact}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Verification Layer Section */}
      <section className="py-40 px-8 relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center">
          <div className="w-px h-40 bg-gradient-to-b from-blue-500/40 to-transparent mb-20"></div>
          
          <div className="text-center mb-40 max-w-4xl">
            <h3 className="text-5xl md:text-6xl font-bold font-display text-white mb-10">Systemic Reliability.</h3>
            <p className="text-gray-400 font-light text-3xl leading-relaxed">
              Our agents handle the mission-critical workflows that human staff often deprioritize, 
              ensuring your facility operates with elite efficiency at all times.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-20 w-full">
            {[
                { icon: <LayerIcon />, title: "Neural Logic", label: "L1 Architecture" },
                { icon: <ToolIcon />, title: "Bespoke Ops", label: "Custom Engines" },
                { icon: <ShieldIcon />, title: "Cyber Protocol", label: "Encrypted Recovery" }
            ].map((box, i) => (
                <div key={i} className="text-center group p-16 glass rounded-[3rem] border-transparent hover:border-blue-500/10 transition-all">
                <div className="w-24 h-24 glass rounded-[2rem] flex items-center justify-center mx-auto mb-10 group-hover:bg-blue-500/10 transition-all border border-white/5">
                    {box.icon}
                </div>
                <h4 className="text-3xl font-bold mb-4 font-display text-white">{box.title}</h4>
                <p className="text-xs text-gray-500 uppercase tracking-[0.4em] font-bold">{box.label}</p>
                </div>
            ))}
          </div>

          <div className="w-px h-40 bg-gradient-to-t from-blue-500/40 to-transparent mt-20"></div>
        </div>
      </section>

      {/* Genesis Section */}
      <section id="genesis" className="py-52 px-8 bg-[#020205] border-t border-white/5">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-48">
          <div>
            <span className="text-xs font-bold text-blue-500 uppercase tracking-[0.5em] mb-5 block">Onboarding Queue</span>
            <h2 className="text-6xl md:text-8xl font-bold mb-14 font-display text-white leading-[0.9]">Genesis Intake.</h2>
            <p className="text-gray-400 text-3xl font-light leading-relaxed mb-20">
              We limit partnerships to three facilities per quarter to maintain deployment precision.
            </p>
            
            <div className="space-y-16">
              <div className="flex items-start gap-10 group cursor-default">
                <div className="w-20 h-20 glass rounded-[2rem] flex items-center justify-center shrink-0 group-hover:bg-blue-500/10 transition-colors border border-white/5">
                  <CalendarIcon />
                </div>
                <div>
                  <h4 className="text-3xl font-bold mb-4 font-display text-white">Technical Discovery</h4>
                  <p className="text-xl text-gray-500 font-light">Mapping your existing tech ecosystem to ensure seamless integration of autonomous nodes.</p>
                </div>
              </div>
              <div className="flex items-start gap-10 group cursor-default">
                <div className="w-20 h-20 glass rounded-[2rem] flex items-center justify-center shrink-0 group-hover:bg-blue-500/10 transition-colors border border-white/5">
                  <BlueprintIcon />
                </div>
                <div>
                  <h4 className="text-3xl font-bold mb-4 font-display text-white">Architectural Build</h4>
                  <p className="text-xl text-gray-500 font-light">Custom coding of your facility's operational logic into high-performance digital workers.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-20 rounded-[5rem] border-white/5 shadow-3xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-24">
                <div className="w-28 h-28 bg-blue-500/10 rounded-full flex items-center justify-center mb-12 border border-blue-500/20">
                  <RocketIcon />
                </div>
                <h3 className="text-5xl font-bold mb-8 font-display text-white">Intake Started.</h3>
                <p className="text-gray-400 text-2xl font-light">Your application is in the queue. Expect a technical brief within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <h3 className="text-4xl font-bold mb-8 font-display text-white">Application</h3>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-5">
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-white focus:outline-none focus:border-blue-500/30 text-xl" placeholder="Elias Vance" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
                  </div>
                  <div className="space-y-5">
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Work Email</label>
                    <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-white focus:outline-none focus:border-blue-500/30 text-xl" placeholder="e.vance@studio.com" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-5">
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Direct Contact</label>
                    <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-white focus:outline-none focus:border-blue-500/30 text-xl" placeholder="+1..." value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} />
                  </div>
                  <div className="space-y-5">
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Deployment Scale</label>
                    <select required className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-white focus:outline-none focus:border-blue-500/30 appearance-none cursor-pointer text-xl" value={form.budget} onChange={(e) => setForm({...form, budget: e.target.value})}>
                      <option value="" className="bg-[#050510]">Select Scale</option>
                      <option value="5k-15k" className="bg-[#050510]">$5k — $15k / mo Recovery</option>
                      <option value="15k-30k" className="bg-[#050510]">$15k — $30k / mo Recovery</option>
                      <option value="enterprise" className="bg-[#050510]">Enterprise Multi-Location</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-5">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Operational Friction Analysis</label>
                  <textarea required className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-white focus:outline-none focus:border-blue-500/30 min-h-[180px] text-xl" placeholder="Describe your primary bottleneck..." value={form.bottlenecks} onChange={(e) => setForm({...form, bottlenecks: e.target.value})} />
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full py-8 bg-white text-black rounded-full font-bold text-2xl transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 shadow-2xl shadow-white/10">
                  {isSubmitting ? 'Transmitting Data...' : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-40 px-8 border-t border-white/5">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-24">
          <button onClick={() => scrollTo('#home')} className="flex items-center gap-10 transition-all hover:opacity-80">
            <BrainLogo size={80} />
            <div className="flex flex-col text-left">
              <span className="text-4xl font-bold font-display block text-white tracking-tighter leading-none">HyzaLabs</span>
              <span className="text-[11px] text-gray-600 tracking-[0.6em] uppercase font-bold mt-3">Infrastructure Engineering</span>
            </div>
          </button>
          <div className="flex gap-28 text-[13px] text-gray-600 font-bold uppercase tracking-[0.3em]">
            <div className="space-y-8">
              <p className="text-gray-400 font-display text-lg normal-case tracking-normal">Global HQ</p>
              <p className="text-gray-500">San Francisco, CA</p>
              <p className="text-gray-500">partners@hyzalabs.ai</p>
            </div>
            <div className="space-y-8">
              <p className="text-gray-400 font-display text-lg normal-case tracking-normal">Status</p>
              <div className="flex items-center gap-4">
                <span className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.7)]" />
                <span className="text-gray-500">Active Nodes</span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto mt-40 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between text-[12px] text-gray-700 font-medium uppercase tracking-[0.4em]">
          <span>© {new Date().getFullYear()} HyzaLabs AI. All Systems Modular.</span>
          <span className="mt-8 md:mt-0">Built for high-performance fitness operations.</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
