import React, { useState, useEffect } from 'react';
import BackgroundEffect from './components/BackgroundEffect';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Showcase from './components/Showcase';
import Contact from './components/Contact';
import { Sparkles, ArrowUp, Code, Terminal, BrainCircuit, Heart, Server } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
    }
    return true; // Default to modern premium dark mode, toggleable to crisp white mode
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const sections = ['hero', 'experience', 'skills', 'showcase', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300; // offset trigger
      setShowBackToTop(window.scrollY > 800);

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative text-theme-text font-sans antialiased overflow-x-hidden selection:bg-brand-cyan/30 selection:text-white transition-colors duration-300">
      {/* Dynamic ambient particles & floating mesh gradients */}
      <BackgroundEffect />

      {/* Nav bar */}
      <Navbar activeSection={activeSection} isDark={isDark} setIsDark={setIsDark} />

      {/* Structured Sections list */}
      <main className="relative">
        <Hero />
        
        {/* Decorative Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[1px] w-full bg-theme-divider" />
        </div>

        <Experience />

        {/* Decorative Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[1px] w-full bg-theme-divider" />
        </div>

        <Skills />

        {/* Decorative Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[1px] w-full bg-theme-divider" />
        </div>

        <Showcase />

        {/* Decorative Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[1px] w-full bg-theme-divider" />
        </div>

        <Contact />
      </main>

      {/* Footer Block */}
      <footer className="py-12 border-t border-theme-border bg-theme-bg-sec relative z-10 text-center text-slate-500 text-xs text-sans transition-colors duration-300 overflow-hidden">
        {/* Matching grid (caro) background pattern */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60 pointer-events-none" 
        />
        
        {/* Soft premium radial blur for depth */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-brand-purple/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="flex items-center justify-center gap-2 font-display text-theme-text font-bold tracking-wider">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-brand-cyan to-brand-purple flex items-center justify-center text-white scale-90">
              <span className="text-[10px] font-mono">&lt;&gt;</span>
            </div>
            PHẠM LÊ SƠN
          </div>
          
          <p className="max-w-md mx-auto text-theme-text-sec">
            Kiến tạo giải pháp công nghệ hiện đại phục vụ sự nghiệp tự động hóa và tối ưu nguồn lực doanh nghiệp.
          </p>

          <div className="flex justify-center gap-6 text-slate-500 font-mono text-[10px]">
            <span className="flex items-center gap-1"><BrainCircuit className="w-3.5 h-3.5 text-brand-cyan" /> FastAPI AI</span>
            <span className="flex items-center gap-1"><Server className="w-3.5 h-3.5 text-brand-purple" /> Spring Boot</span>
            <span className="flex items-center gap-1"><Code className="w-3.5 h-3.5 text-brand-pink" /> React Web</span>
          </div>

          <div className="pt-6 border-t border-theme-border max-w-sm mx-auto flex items-center justify-center gap-1 text-[11px] text-slate-600 font-sans">
            <span>Thiết kế bởi</span>
            <Heart className="w-3.5 h-3.5 text-brand-pink fill-brand-pink animate-pulse" />
            <span>Phạm Lê Sơn © {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>

      {/* Back to top dynamic button */}
      <div className={`fixed bottom-6 right-6 z-40 transition-all duration-300 transform ${showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'}`}>
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-gradient-to-r from-brand-cyan to-brand-purple text-white hover:opacity-90 shadow-lg shadow-brand-cyan/20 transition-all cursor-pointer"
          title="Về đầu trang"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
