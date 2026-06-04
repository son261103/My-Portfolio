import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, Building, Server, Cpu, Award, Zap, ChevronRight, GraduationCap, ExternalLink } from 'lucide-react';
import { EXPERIENCES, PERSONAL_INFO } from '../data';
import { ExperienceItem } from '../types';

export default function Experience() {
  const [selectedExpId, setSelectedExpId] = useState<string>(EXPERIENCES[0].id);

  const selectedExp = EXPERIENCES.find(e => e.id === selectedExpId) || EXPERIENCES[0];

  const getIcon = (id: string) => {
    switch(id) {
      case 'redai': return <Zap className="w-5 h-5 text-pink-500" />;
      case 'dtn': return <Server className="w-5 h-5 text-purple-500" />;
      default: return <Cpu className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Decorative gradient spot - Hide or scale down on mobile for top tier performance */}
      <div className="absolute top-[30%] right-[5%] w-96 h-96 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section title */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 font-mono text-[11px] text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-3"
          >
            <Briefcase className="w-3.5 h-3.5" />
            Hành Trình Sự Nghiệp
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-theme-text uppercase"
          >
            Kinh nghiệm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 font-black">& Học vấn</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-theme-text-sec text-sm max-w-xl mx-auto"
          >
            Kết nối công nghệ AI hiện đại với cấu trúc phát triển vững vàng.
          </motion.p>
        </div>

        {/* Unified Layout: Interactive timeline map + Details Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Navigation Column (and Mini Roadmap) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest px-1">Lịch sử làm việc</h4>
            
            <div className="space-y-3">
              {EXPERIENCES.map((exp, idx) => {
                const isSelected = selectedExpId === exp.id;
                return (
                  <motion.button
                    key={exp.id}
                    onClick={() => setSelectedExpId(exp.id)}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ x: 6 }}
                    className={`w-full text-left p-4.5 rounded-2xl border transition-all duration-300 flex gap-4 items-start cursor-pointer relative overflow-hidden group ${
                      isSelected 
                        ? 'bg-purple-500/[0.04] border-purple-500/30' 
                        : 'bg-theme-card hover:bg-black/[0.02] dark:hover:bg-white/[0.02] border-theme-card-border hover:border-purple-500/10'
                    }`}
                  >
                    {/* Left neon border pill for selected state */}
                    {isSelected && (
                      <motion.div 
                        layoutId="activeBorder"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-pink-500" 
                      />
                    )}

                    {/* Timeline connection connector indicator (mock tech look) */}
                    <div className="flex flex-col items-center">
                      <div className={`p-2.5 rounded-xl border flex items-center justify-center transition-colors ${
                        isSelected 
                          ? 'bg-gradient-to-br from-blue-500/20 to-pink-500/20 border-purple-500/30 text-slate-800 dark:text-white' 
                          : 'bg-black/5 dark:bg-white/5 border-theme-border text-theme-text-sec group-hover:text-theme-text'
                      }`}>
                        {getIcon(exp.id)}
                      </div>
                      {idx < EXPERIENCES.length - 1 && (
                        <div className="w-0.5 h-12 bg-gradient-to-b from-theme-border to-transparent border-dashed border-l border-theme-border mt-1" />
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-1.5">
                        <span className={`text-[11px] font-mono font-medium tracking-wide ${isSelected ? 'text-purple-600 dark:text-purple-400' : 'text-slate-500'}`}>
                          {exp.period}
                        </span>
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'transform translate-x-1 text-purple-500' : 'text-slate-600 group-hover:text-slate-400'}`} />
                      </div>
                      
                      <h3 className="font-display font-bold text-sm tracking-tight text-theme-text line-clamp-1">
                        {exp.company}
                      </h3>
                      
                      <p className="text-xs text-theme-text-sec line-clamp-1 mt-0.5 font-sans">
                        {exp.role}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Academic Track Integrated below experiences */}
            <div className="mt-8 pt-6 border-t border-theme-divider space-y-4">
                <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest px-1">Đào Tạo & Học Vấn</h4>
                
                {/* EAUT block */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="p-4.5 rounded-2xl bg-theme-card border border-theme-card-border relative overflow-hidden shadow-sm transition-colors duration-300"
                >
                  <div className="flex gap-4 items-start">
                    <div className="p-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-theme-border text-pink-500">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-pink-500 dark:text-pink-400 mb-1">{PERSONAL_INFO.education.period}</div>
                      <h4 className="font-display font-semibold text-sm text-theme-text">{PERSONAL_INFO.education.school}</h4>
                      <p className="text-xs text-theme-text-sec mt-0.5">{PERSONAL_INFO.education.major} – <span className="font-mono text-blue-500 dark:text-blue-400 text-[10px] font-medium">{PERSONAL_INFO.education.status}</span></p>

                      {/* Miniature bubble tags of coursework */}
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {PERSONAL_INFO.education.courses.slice(0, 4).map((c, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 border border-theme-border text-[9px] font-mono text-slate-500 dark:text-slate-400">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Devmaster training block */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="p-4.5 rounded-2xl bg-theme-card border border-theme-card-border hover:border-purple-500/10 transition-colors duration-300 shadow-sm"
                >
                  <div className="flex gap-4 items-start">
                    <div className="p-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-theme-border text-blue-500 dark:text-blue-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-500 mb-1">{PERSONAL_INFO.additionalTraining.period}</div>
                      <h4 className="font-display font-semibold text-sm text-theme-text">{PERSONAL_INFO.additionalTraining.school}</h4>
                      <p className="text-xs text-theme-text-sec mt-0.5">Chứng chỉ chuyên sâu: {PERSONAL_INFO.additionalTraining.courses.join(' & ')}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

          {/* Interactive Detailed Display Column */}
          <div className="lg:col-span-7 h-full">
            <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest px-1 mb-4 hidden lg:block">Nội dung chi tiết kinh nghiệm</h4>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedExp.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-theme-card rounded-2xl border border-theme-card-border p-6 md:p-8 relative h-full flex flex-col shadow-sm transition-colors duration-300"
              >
                {/* Glowing status dots & indicators in corners */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
                  <span className="text-[9px] font-mono text-purple-600 dark:text-purple-300 font-semibold uppercase tracking-widest">{selectedExp.type}</span>
                </div>

                <div className="mb-6.5">
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="w-4.5 h-4.5 text-blue-500 dark:text-blue-400" />
                    <span className="font-display font-bold text-lg md:text-xl text-theme-text">
                      {selectedExp.company}
                    </span>
                    {selectedExp.link && (
                      <a 
                        href={selectedExp.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-1 rounded bg-black/5 dark:bg-white/5 border border-theme-border hover:bg-purple-500/15 text-slate-550 dark:text-slate-400 hover:text-purple-500 transition-all font-mono"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                  
                  <h3 className="text-sm font-semibold text-theme-text">
                    {selectedExp.role}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-theme-text-sec font-mono mt-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{selectedExp.period}</span>
                  </div>
                </div>

                {/* Bullets lists */}
                <div className="space-y-3.5 mb-8 flex-1">
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Đóng góp & thành quả chính:</div>
                  <ul className="space-y-3 text-theme-text-sec text-xs md:text-sm leading-relaxed">
                    {selectedExp.description.map((bullet, idx) => (
                      <motion.li 
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        key={idx} 
                        className="flex items-start gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-1.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech stacks tags */}
                <div className="pt-6 border-t border-theme-divider">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-3">Công nghệ sử dụng:</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedExp.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3.5 py-1 rounded-full bg-black/5 dark:bg-white/5 hover:bg-purple-500/10 border border-theme-border hover:border-purple-500/20 text-theme-text-sec hover:text-purple-500 text-xs font-mono transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
