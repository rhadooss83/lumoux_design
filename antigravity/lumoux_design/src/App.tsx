import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Monitor,
  Smartphone,
  Palette,
  Layout,
  ArrowRight,
  Mail,
  Linkedin,
  ExternalLink,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  type: 'Web' | 'Mobile' | 'Branding';
}

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

// --- Data ---
const PROJECTS: Project[] = [
  { id: 1, title: "Quantum Wealth", category: "Fintech Web App", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1074", type: 'Web' },
  { id: 2, title: "EcoTrack", category: "Sustainability Mobile UI", image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=1170", type: 'Mobile' },
  { id: 3, title: "Lumina Brand", category: "Identity & Strategy", image: "https://images.unsplash.com/photo-1572044162444-ad60f128bde2?auto=format&fit=crop&q=80&w=1170", type: 'Branding' },
  { id: 4, title: "Nova Analytics", category: "Data Visualization", image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=1170", type: 'Web' },
];

const FEATURES: Feature[] = [
  { id: 1, title: "UI/UX Design", description: "Creating intuitive interfaces that users love to navigate.", icon: <Layout size={24} />, color: "var(--accent-soft-blue)" },
  { id: 2, title: "Brand Identity", description: "Crafting memorable brands that stand out in the noise.", icon: <Palette size={24} />, color: "var(--accent-soft-purple)" },
  { id: 3, title: "Development", description: "Turning pixel-perfect designs into high-performance code.", icon: <Monitor size={24} />, color: "var(--accent-soft-mint)" },
];

// --- Components ---

const StickyHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-6'}`}>
      <div className={`mx-4 lg:mx-auto max-w-7xl px-6 py-4 rounded-full liquid-glass flex items-center justify-between border-b border-divider transition-all`}>
        <div className="flex items-center gap-2">
          <span className="font-jockey text-2xl lg:text-3xl font-bold tracking-tight text-dark">LumoUX</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Home', 'Portfolio', 'About', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray hover:text-dark transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:block px-6 py-2 rounded-full bg-dark text-white text-sm font-semibold hover:bg-opacity-90 transition-all">
            Request a Design
          </button>
          <button
            className="md:hidden p-2 text-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 liquid-glass rounded-3xl p-6 md:hidden shadow-xl"
          >
            <nav className="flex flex-col gap-4">
              {['Home', 'Portfolio', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-dark border-b border-divider pb-2"
                >
                  {item}
                </a>
              ))}
              <button className="mt-4 w-full py-4 rounded-2xl bg-dark text-white font-bold text-center">
                Request a Design
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 px-6 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-accent-soft-blue rounded-full blur-[120px] opacity-40 z-[-1] animate-pulse" style={{ backgroundColor: 'var(--accent-soft-blue)' }} />
      <div className="absolute bottom-[5%] left-[-10%] w-[35%] h-[50%] bg-accent-soft-purple rounded-full blur-[100px] opacity-30 z-[-1]" style={{ backgroundColor: 'var(--accent-soft-purple)' }} />

      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent-soft-mint text-xs font-bold text-dark mb-6 tracking-widest uppercase" style={{ backgroundColor: 'var(--accent-soft-mint)' }}>
            LumoUX Studio
          </span>
          <h1 className="text-5xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            Clarity Through <br /> <span className="text-gray-400">Design.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg lg:text-xl text-text-gray mb-12">
            We transform complex problems into minimal, high-performing digital experiences. Since 2009, we've been helping brands illuminate their true potential.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-dark text-white font-bold flex items-center justify-center gap-2 group hover:scale-105 transition-transform">
              View My Work <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-divider font-bold hover:bg-divider transition-colors">
              Our Process
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-[2.5rem] bg-divider h-[500px]"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
      />
      <div className="absolute inset-x-6 bottom-6 p-6 liquid-glass rounded-[2rem] flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-dark opacity-60 mb-1 block">{project.category}</span>
          <h3 className="text-2xl font-bold">{project.title}</h3>
        </div>
        <div className="w-12 h-12 rounded-full bg-dark text-white flex items-center justify-center">
          {project.type === 'Mobile' ? <Smartphone size={20} /> : project.type === 'Web' ? <Monitor size={20} /> : <Palette size={20} />}
        </div>
      </div>
    </motion.div>
  );
};

const Showcase = () => {
  return (
    <section id="portfolio" className="py-20 lg:py-40 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 px-4">
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-4">Selected Work</h2>
            <p className="text-gray font-medium">A glimpse into our creative kitchen.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 font-bold text-dark hover:gap-4 transition-all uppercase tracking-widest text-xs">
            Show all projects <ChevronRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 remarkable-scroll">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Categories = () => {
  return (
    <section className="py-24 px-6 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16">Creative Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="p-10 rounded-[2.5rem] transition-all hover:-translate-y-2"
              style={{ backgroundColor: feature.color }}
            >
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm text-dark">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-48 px-6 bg-dark text-white rounded-t-[3rem] lg:rounded-t-[5rem]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl lg:text-8xl font-bold mb-12 tracking-tight">Ready to bring <br /> <span className="text-white/40">clarity</span> to your <br /> vision?</h2>
        <p className="text-xl text-white/60 mb-16 max-w-2xl mx-auto">
          Currently taking on new projects for Summer 2026. Let's create something extraordinary together.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20">
          <a href="mailto:hello@lumoux.com" className="group flex items-center gap-4 text-2xl font-bold hover:text-accent-soft-mint transition-colors">
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-dark transition-all">
              <Mail size={24} />
            </div>
            hello@lumoux.com
          </a>
          <a href="#" className="group flex items-center gap-4 text-2xl font-bold hover:text-accent-soft-blue transition-colors">
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-dark transition-all">
              <Linkedin size={24} />
            </div>
            LinkedIn
          </a>
        </div>

        <div className="pt-20 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-white/40 text-sm font-medium">
          <p>© 2026 LumoUX Studio. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Behance</a>
            <a href="#" className="hover:text-white transition-colors">Dribbble</a>
          </div>
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="bg-white min-h-screen">
      {/* Tailwind in JS for layout because we don't have tailwind compiled yet */}
      <style>{`
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .flex-row { flex-direction: row; }
        .items-center { align-items: center; }
        .items-end { align-items: flex-end; }
        .justify-between { justify-content: space-between; }
        .justify-center { justify-content: center; }
        .gap-2 { gap: 0.5rem; }
        .gap-4 { gap: 1rem; }
        .gap-6 { gap: 1.5rem; }
        .gap-8 { gap: 2rem; }
        .gap-12 { gap: 3rem; }
        .fixed { position: fixed; }
        .relative { position: relative; }
        .absolute { position: absolute; }
        .inset-x-6 { left: 1.5rem; right: 1.5rem; }
        .top-0 { top: 0; }
        .top-24 { top: 6rem; }
        .left-0 { left: 0; }
        .right-0 { right: 0; }
        .z-50 { z-index: 50; }
        .mx-4 { margin-left: 1rem; margin-right: 1rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .max-w-7xl { max-width: 80rem; }
        .max-w-4xl { max-width: 56rem; }
        .max-w-2xl { max-width: 42rem; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .px-8 { padding-left: 2rem; padding-right: 2rem; }
        .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
        .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
        .py-10 { padding-top: 2.5rem; padding-bottom: 2.5rem; }
        .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
        .py-24 { padding-top: 6rem; padding-bottom: 6rem; }
        .pt-20 { padding-top: 5rem; }
        .pt-40 { padding-top: 10rem; }
        .pb-20 { padding-bottom: 5rem; }
        .rounded-full { border-radius: 9999px; }
        .rounded-t-[3rem] { border-top-left-radius: 3rem; border-top-right-radius: 3rem; }
        .rounded-t-[5rem] { border-top-left-radius: 5rem; border-top-right-radius: 5rem; }
        .rounded-[2.5rem] { border-radius: 2.5rem; }
        .rounded-[2rem] { border-radius: 2rem; }
        .rounded-2xl { border-radius: 1rem; }
        .rounded-3xl { border-radius: 1.5rem; }
        .grid { display: grid; }
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        .hidden { display: none; }
        .block { display: block; }
        .w-full { width: 100%; }
        .w-12 { width: 3rem; }
        .w-14 { width: 3.5rem; }
        .w-16 { width: 4rem; }
        .h-12 { height: 3rem; }
        .h-14 { height: 3.5rem; }
        .h-16 { height: 4rem; }
        .h-[500px] { height: 500px; }
        .object-cover { object-fit: cover; }
        .grayscale { filter: grayscale(100%); }
        .bg-white { background-color: white; }
        .bg-dark { background-color: #1A1A1A; }
        .text-white { color: white; }
        .text-dark { color: #1A1A1A; }
        .text-gray { color: #666666; }
        .text-sm { font-size: 0.875rem; }
        .text-lg { font-size: 1.125rem; }
        .text-2xl { font-size: 1.5rem; }
        .text-3xl { font-size: 1.875rem; }
        .text-4xl { font-size: 2.25rem; }
        .text-5xl { font-size: 3rem; }
        .text-8xl { font-size: 6rem; }
        .font-bold { font-weight: 700; }
        .font-medium { font-weight: 500; }
        .font-semibold { font-weight: 600; }
        .tracking-tight { letter-spacing: -0.025em; }
        .tracking-widest { letter-spacing: 0.1em; }
        .uppercase { text-transform: uppercase; }
        .text-center { text-align: center; }
        .opacity-0 { opacity: 0; }
        .opacity-30 { opacity: 0.3; }
        .opacity-40 { opacity: 0.4; }
        .opacity-60 { opacity: 0.6; }
        .z-[-1] { z-index: -1; }
        .overflow-hidden { overflow: hidden; }
        .blur-[120px] { filter: blur(120px); }
        .blur-[100px] { filter: blur(100px); }
        .transition-all { transition-property: all; }
        .duration-300 { transition-duration: 300ms; }
        .duration-500 { transition-duration: 500ms; }
        
        @media (min-width: 768px) {
          .md\\:flex { display: flex; }
          .md\\:hidden { display: none; }
          .md\\:block { display: block; }
          .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        
        @media (min-width: 1024px) {
          .lg\\:mx-auto { margin-left: auto; margin-right: auto; }
          .lg\\:pt-56 { padding-top: 14rem; }
          .lg\\:pb-32 { padding-bottom: 8rem; }
          .lg\\:py-40 { padding-top: 10rem; padding-bottom: 10rem; }
          .lg\\:py-48 { padding-top: 12rem; padding-bottom: 12rem; }
          .lg\\:text-3xl { font-size: 1.875rem; }
          .lg\\:text-6xl { font-size: 3.75rem; }
          .lg\\:text-8xl { font-size: 6rem; }
        }
      `}</style>

      <StickyHeader />
      <main>
        <Hero />
        <Showcase />
        <Categories />
      </main>
      <Contact />
    </div>
  );
}

export default App;
