import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Brain, Database, Layers, Sparkles, Star, Cpu } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data';

export default function Skills() {
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState<number>(0);
  const [hoveredSkill, setHoveredSkill] = useState<{ name: string; level: number; info?: string } | null>(null);

  const getCategoryIcon = (title: string) => {
    if (title.toLowerCase().includes('ai')) return <Brain className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
    if (title.toLowerCase().includes('backend')) return <Cpu className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
    if (title.toLowerCase().includes('database')) return <Database className="w-4 h-4 text-pink-600 dark:text-pink-400" />;
    return <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
  };

  const activeCategory = SKILL_CATEGORIES[selectedCategoryIdx];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#8b5cf6]/[0.01] dark:bg-slate-950/20">
      {/* Decorative center grid beam - Hide on mobile for extreme performance */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section title */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 font-mono text-[11px] text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3"
          >
            <Code className="w-3.5 h-3.5" />
            Năng Lực Công Nghệ
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-theme-text uppercase"
          >
            KỸ NĂNG <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 font-black">& CÔNG CỤ</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-theme-text-sec text-sm max-w-xl mx-auto"
          >
            Làm chủ các công cụ tối tân từ nền tảng Trí tuệ Nhân tạo đến hạ tầng hệ thống Backend mạnh mẽ.
          </motion.p>
        </div>

        {/* Section Structure: Left category selectors, Right grid of skill bars and interactive details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left domain tab selector */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest px-1 mb-2">Phân loại chuyên môn</h4>
            {SKILL_CATEGORIES.map((cat, idx) => {
              const isSelected = selectedCategoryIdx === idx;
              return (
                <button
                  key={cat.title}
                  onClick={() => {
                    setSelectedCategoryIdx(idx);
                    setHoveredSkill(null);
                  }}
                  className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 cursor-pointer relative group ${
                    isSelected 
                      ? 'border-purple-500/30 text-theme-text shadow-sm bg-purple-500/[0.02]' 
                      : 'bg-theme-card hover:bg-black/[0.02] dark:hover:bg-white/[0.02] border-theme-card-border hover:border-purple-500/10 text-theme-text-sec hover:text-theme-text'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeSkillCategory"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                  
                  <div className="flex items-center gap-3 relative z-10">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-gradient-to-br from-blue-500/10 to-pink-500/10' : 'bg-black/5 dark:bg-white/5'}`}>
                      {getCategoryIcon(cat.title)}
                    </div>
                    <span className="font-display text-sm font-semibold tracking-tight">{cat.title}</span>
                  </div>

                  <span className="text-[11px] font-mono text-slate-500 relative z-10 group-hover:text-slate-400 transition-colors">
                    {cat.skills.length} skills
                  </span>
                </button>
              );
            })}

            {/* Quick interactive note */}
            <div className="mt-6 p-4 rounded-xl bg-theme-card border border-theme-border text-[11px] text-theme-text-sec font-sans leading-relaxed shadow-sm transition-colors duration-300">
              <span className="text-purple-600 dark:text-purple-450 font-semibold">💡 Gợi ý:</span> Di chuột hoặc nhấn vào từng thanh kỹ năng ở bên phải để khám phá thông tin chi tiết về kinh nghiệm và dự án thực tế của tôi liên quan đến công nghệ đó.
            </div>
          </div>

          {/* Right dynamic list detailing meters and detailed hover popup overlay */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Category header */}
            <div className="flex items-center justify-between border-b border-theme-divider pb-3 animate-none">
              <h3 className="font-display text-base font-bold text-theme-text uppercase tracking-wider flex items-center gap-2">
                <span>{activeCategory.title}</span>
                <Sparkles className="w-4 h-4 text-pink-500 animate-pulse" />
              </h3>
              <span className="text-[11px] font-mono text-pink-500 dark:text-pink-400 font-bold">LEVEL CHUYÊN MÔN</span>
            </div>

            {/* Skills dynamic grids */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeCategory.skills.map((skill, index) => {
                const isHovered = hoveredSkill?.name === skill.name;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onClick={() => setHoveredSkill(skill)}
                    className={`p-4 rounded-xl border transition-all cursor-crosshair group relative overflow-hidden ${
                      isHovered 
                        ? 'bg-purple-500/[0.04] border-purple-500/40 shadow-sm shadow-purple-500/5' 
                        : 'bg-theme-card border-theme-card-border hover:border-purple-500/10'
                    }`}
                  >
                    {/* Glowing card border hover effect - Hidden on mobile for peak performance */}
                    {isHovered && (
                      <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/20 rounded-full blur-[25px] pointer-events-none hidden md:block" />
                    )}

                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs md:text-sm font-semibold tracking-tight text-theme-text group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono font-medium text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Clean Gradient Loading Bar */}
                    <div className="w-full h-1.5 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: index * 0.05 }}
                        className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Extra Dynamic contextual feedback on hovered/focused skill */}
            <AnimatePresence mode="wait">
              {hoveredSkill ? (
                <motion.div
                  key={hoveredSkill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="p-5 rounded-xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 border border-purple-500/30 dark:border-purple-500/40 shadow-sm"
                >
                  <div className="flex items-center gap-1.5 mb-2">
                    <Star className="w-4 h-4 text-purple-600 dark:text-purple-400 fill-purple-400" />
                    <span className="text-xs font-mono text-pink-500 dark:text-pink-400 uppercase tracking-widest font-semibold">Kinh nghiệm thực tiễn:</span>
                  </div>
                  <h4 className="font-display font-bold text-theme-text text-base mb-1.5">{hoveredSkill.name}</h4>
                  <p className="text-xs text-theme-text-sec leading-relaxed font-sans">{hoveredSkill.info || 'Được ứng dụng thành thạo và liên tục tối ưu trong các dự án web thương mại điện tử thực tế và giải pháp AI thông minh.'}</p>
                </motion.div>
              ) : (
                <div className="p-5 rounded-xl bg-theme-card border border-theme-card-border flex items-center justify-center py-8 shadow-sm">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest text-center">Chạm để xem năng lực thực tế tương ứng</span>
                </div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
