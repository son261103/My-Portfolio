import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Github, Sparkles, BrainCircuit, ExternalLink, ArrowDown, Bot, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Absolute decorative accent spheres - Optimized: hidden on mobile to prevent layout lag */}
      <div className="absolute top-[25%] left-[10%] w-72 h-72 bg-brand-cyan/10 rounded-full blur-[80px] pointer-events-none hidden sm:block" />
      <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none hidden sm:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left"
          >
            {/* Tagline Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-theme-border w-max mx-auto lg:mx-0 mb-6 font-mono text-[11px] text-theme-text-sec uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-pink-500" />
              Junior Backend Developer & AI Engineer
            </motion.div>

            {/* Display Headings */}
            <motion.h1 variants={itemVariants} className="font-display text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter mb-6 text-center lg:text-left text-theme-text">
              <span className="text-theme-text dark:text-white uppercase not-italic text-[11px] block tracking-[0.4em] text-pink-500 font-bold mb-3">Portfolio 2026</span>
              PHẠM LÊ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-[0_2px_20px_rgba(168,85,247,0.15)]">
                SON.
              </span>
            </motion.h1>

            <motion.h2 variants={itemVariants} className="text-base sm:text-xl font-medium text-theme-text mb-6 font-display border-l-2 border-purple-500 pl-4 text-left">
              Kiến tạo nền tảng truyền thông AI hiệu năng cao & Hệ thống E-commerce tin cậy.
            </motion.h2>

            <motion.p variants={itemVariants} className="text-theme-text-sec text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 font-sans text-center lg:text-left">
              Tôi là một lập trình viên backend chuyên phát triển web và giải pháp tích hợp trí tuệ nhân tạo.
              Với kinh nghiệm thực tế xây dựng backend đa AI kết hợp tại <span className="text-blue-500 dark:text-blue-400 font-medium font-mono">redai.vn</span> 
              và tối ưu hệ thống E-commerce với Spring Boot / FastAPI, tôi cam kết mang tới sản phẩm với hiệu năng tối đa cùng trải nghiệm người dùng trọn vẹn nhất.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={() => handleScrollToSection('showcase')}
                className="group flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500 to-pink-500 text-white shadow-xl hover:opacity-95 transition-all cursor-pointer font-display"
              >
                Trải nghiệm Demo
                <Sparkles className="w-4 h-4 transition-transform group-hover:rotate-12" />
              </button>
              
              <button
                onClick={() => handleScrollToSection('experience')}
                className="flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs font-semibold bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-theme-border text-theme-text-sec hover:text-theme-text transition-all cursor-pointer font-display"
              >
                Hành trình làm việc
                <ArrowDown className="w-4 h-4" />
              </button>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 sm:p-3 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-theme-border text-theme-text-sec hover:text-theme-text transition-all cursor-pointer"
                title="GitHub"
              >
                <Github className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
              </a>
            </motion.div>

            {/* Stat badges */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 xs:gap-4 sm:gap-6 border-t border-theme-border pt-8 mt-8 sm:pt-10 sm:mt-10 max-w-lg mx-auto lg:mx-0">
              <div className="text-left">
                <div className="font-display text-base xs:text-lg sm:text-2xl md:text-3xl font-light mb-1 italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 truncate">FastAPI</div>
                <div className="text-[8px] xs:text-[10px] uppercase tracking-widest text-theme-text-sec/75 dark:text-theme-text-sec/40 font-mono font-bold truncate">Python Core</div>
              </div>
              <div className="text-left">
                <div className="font-display text-base xs:text-lg sm:text-2xl md:text-3xl font-light mb-1 italic text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 truncate">Spring 3</div>
                <div className="text-[8px] xs:text-[10px] uppercase tracking-widest text-theme-text-sec/75 dark:text-theme-text-sec/40 font-mono font-bold truncate">Java Backend</div>
              </div>
              <div className="text-left">
                <div className="font-display text-base xs:text-lg sm:text-2xl md:text-3xl font-light mb-1 italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 truncate">GraphRAG</div>
                <div className="text-[8px] xs:text-[10px] uppercase tracking-widest text-theme-text-sec/75 dark:text-theme-text-sec/40 font-mono font-bold truncate">AI Pipelines</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Right Interactive Geometric Graphic (Framer Motion specialized vector artwork) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
              className="relative w-72 h-72 sm:w-85 sm:h-85 md:w-96 md:h-96 aspect-square group"
            >
              {/* Spinning gradient outer orbit */}
              <div className="absolute inset-0 rounded-full border border-dashed border-brand-cyan/20 animate-spin" style={{ animationDuration: '30s' }} />
              
              {/* Pulsing visual glow card behind */}
              <div className="absolute inset-6 rounded-full bg-gradient-to-br from-brand-cyan via-brand-purple to-brand-pink opacity-10 blur-[30px] group-hover:opacity-20 transition-opacity duration-500" />
              
              {/* Inner animated space network circles */}
              <div className="absolute inset-10 rounded-full border border-brand-purple/10 border-solid animate-ping" style={{ animationDuration: '4s' }} />

              {/* Central Premium Tech Canvas Container */}
              <div className="absolute inset-4 rounded-3xl glass-panel glow-card flex flex-col items-center justify-center p-4 sm:p-8 text-center overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-pink" />
                
                {/* Simulated Web Developer Terminal mock */}
                <div className="w-full bg-[#050212]/90 border border-white/5 rounded-xl p-3 sm:p-4 text-left font-mono text-[10px] sm:text-xs text-brand-purple overflow-hidden mb-4 sm:mb-6 relative">
                  <div className="flex items-center gap-1.5 mb-2 border-b border-white/5 pb-1.5">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-brand-pink" />
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-brand-purple" />
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-brand-cyan" />
                    <span className="text-[9px] sm:text-[10px] text-slate-500 ml-1.5">developer_core.py</span>
                  </div>
                  
                  <div className="space-y-0.5 sm:space-y-1 text-[9.5px] sm:text-[11px] text-slate-300">
                    <p><span className="text-brand-pink">import</span> son_profile <span className="text-brand-pink">as</span> me</p>
                    <p><span className="text-slate-500"># Khởi tạo lõi AI & Backend</span></p>
                    <p>me.skills = [<span className="text-brand-cyan">&quot;FastAPI&quot;</span>, <span className="text-brand-cyan">&quot;Spring3&quot;</span>]</p>
                    <p>me.focus = [<span className="text-brand-cyan">&quot;LLMs&quot;</span>, <span className="text-brand-cyan">&quot;GraphRAG&quot;</span>]</p>
                    <p><span className="text-brand-pink">print</span>(me.get_status())</p>
                    <p className="text-brand-cyan">&gt; &quot;Ready to compile.&quot;</p>
                  </div>

                  <div className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 flex items-center gap-1 text-[8.5px] sm:text-[10px] text-brand-cyan opacity-80">
                    <Bot className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-bounce" />
                    <span>AI Model Active</span>
                  </div>
                </div>

                {/* Micro tech features highlights */}
                <h3 className="font-display font-semibold text-theme-text text-sm sm:text-base tracking-tight mb-0.5 sm:mb-1">PHẠM LÊ SƠN</h3>
                <p className="text-[10px] sm:text-xs text-theme-text-sec mb-3 sm:mb-4">&lt; Hanoi, Vietnam /&gt;</p>

                <div className="flex gap-1.5 sm:gap-2">
                  <span className="px-2 py-0.5 sm:px-2.5 rounded-md bg-black/5 dark:bg-white/5 border border-theme-border text-[9px] sm:text-[10px] text-theme-text-sec font-mono flex items-center gap-1">
                    <BrainCircuit className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-brand-cyan" /> AI RAG
                  </span>
                  <span className="px-2 py-0.5 sm:px-2.5 rounded-md bg-black/5 dark:bg-white/5 border border-theme-border text-[9px] sm:text-[10px] text-theme-text-sec font-mono flex items-center gap-1">
                    <Terminal className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-brand-purple" /> Spring Boot
                  </span>
                </div>
              </div>

              {/* Orbiting Tech Floating Dots for interactive fun */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
                className="absolute inset-0 pointer-events-none"
              >
                <div className="absolute top-1/2 -left-3 w-6 h-6 rounded-full glass-panel border border-brand-cyan flex items-center justify-center text-brand-cyan blur-[0.2px]">
                  <Code className="w-3.5 h-3.5" />
                </div>
                <div className="absolute bottom-12 right-2 w-5 h-5 rounded-full bg-gradient-to-tr from-brand-pink to-brand-purple text-white shadow-md shadow-brand-pink/20" />
              </motion.div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
