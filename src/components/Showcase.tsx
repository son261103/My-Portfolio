import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, FolderGit2, Github, ExternalLink, Zap, Terminal, Play, Eye, EyeOff, Check, 
  Trash2, ShoppingBag, ShieldCheck, Heart, ArrowRight, Layers, Bot, Sliders, ServerCrash
} from 'lucide-react';
import { PROJECTS } from '../data';
import { ProjectItem } from '../types';

export default function Showcase() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  
  // Interactive Sandbox states
  const [activeSandboxTab, setActiveSandboxTab] = useState<'ai' | 'yolo' | 'ecommerce'>('ai');

  // AI Sandbox states
  const [aiPrompt, setAiPrompt] = useState('Chân dung lập trình viên Phạm Lê Sơn phong cách cyberpunk, đèn cực tím neon huyền ảo');
  const [aiProvider, setAiProvider] = useState<'siliconflow' | 'fal' | 'wavespeed'>('siliconflow');
  const [aiLogLines, setAiLogLines] = useState<string[]>([]);
  const [isGeneratingAi, setIsGeneratingAi] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  // YOLO Sandbox states
  const [isYoloActive, setIsYoloActive] = useState(false);
  const [yoloThreshold, setYoloThreshold] = useState<number>(0.5);

  // E-Commerce Sandbox states
  const [cartItems, setCartItems] = useState<{ id: string; name: string; price: number; qty: number }[]>([]);
  const [isCheckoutCompleted, setIsCheckoutCompleted] = useState(false);
  const [checkoutPayload, setCheckoutPayload] = useState<string | null>(null);

  // Trigger AI Sandbox generation
  const handleAiGenerate = () => {
    setIsGeneratingAi(true);
    setGeneratedImage(null);
    setAiLogLines([]);

    const steps = [
      { delay: 400, log: '⚙️ [FASTAPI REST] Nhận yêu cầu POST /api/v1/media/generate...' },
      { delay: 800, log: '🔑 [SECURITY] Xác thực JWT Token của User... [OK]' },
      { delay: 1400, log: `📡 [ORCHESTRATION] Định tuyến yêu cầu đến cụm GPU Provider: [${aiProvider.toUpperCase()}]` },
      { delay: 2000, log: aiProvider === 'siliconflow' 
          ? '⚠️ [FALLBACK ENGINE] SiliconFlow quá tải (504 Gateway Timeout). Tự động kích hoạt chuỗi dự phòng (Fallback Chain)...' 
          : '⚡ [PROVIDER] Kết nối thành công tới GPU Server...' },
      { delay: 2800, log: aiProvider === 'siliconflow' 
          ? '🔄 [RETRY] Chuyển đổi thành công sang Provider dự phòng [FAL.AI]...' 
          : '🧠 [MODEL] Tối ưu hóa prompt với Prompt Engineering...' },
      { delay: 3500, log: '🎨 [RENDER] Mô hình khuếch tán (Diffusion Model) đang vẽ khung hình... (45% | 75% | 100%)' },
      { delay: 4100, log: '💾 [VECTOR STORE] Ingesting metadata into Vector Database...' },
      { delay: 4500, log: '✅ [DONE] Xử lý hoàn tất! Trả về luồng URL hình ảnh an toàn.' }
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setAiLogLines(prev => [...prev, step.log]);
        if (idx === steps.length - 1) {
          setIsGeneratingAi(false);
          // Set beautiful placeholder corresponding to prompt theme
          setGeneratedImage('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600');
        }
      }, step.delay);
    });
  };

  // YOLO items mock database
  const yoloObjects = [
    { name: 'Lập trình viên Phạm Lê Sơn', conf: 0.94, box: 'top-[10%] left-[25%] w-[50%] h-[65%] border-emerald-500' },
    { name: 'Macbook Laptop', conf: 0.89, box: 'bottom-[12%] left-[15%] w-[45%] h-[35%] border-blue-500' },
    { name: 'Coffee Mug', conf: 0.72, box: 'bottom-[18%] right-[22%] w-[12%] h-[15%] border-brand-pink' },
    { name: 'Smart Keyboard', conf: 0.65, box: 'bottom-[5%] left-[30%] w-[35%] h-[12%] border-amber-500' }
  ];

  // E-Commerce simulation methods
  const productsList = [
    { id: '1', name: 'Hoodie Oversized Cyber', price: 420000 },
    { id: '2', name: 'T-Shirt Spring Aura Pro', price: 290000 },
    { id: '3', name: 'Techwear Belt v2', price: 180000 }
  ];

  const addToCart = (prod: typeof productsList[0]) => {
    setCartItems(prev => {
      const exists = prev.find(i => i.id === prod.id);
      if (exists) {
        return prev.map(i => i.id === prod.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...prod, qty: 1 }];
    });
    setIsCheckoutCompleted(false);
    setCheckoutPayload(null);
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  const handleCheckout = () => {
    setIsCheckoutCompleted(true);
    // Print highly secure detailed Spring representation
    const samplePayload = {
      timestamp: new Date().toISOString(),
      principal: {
        username: 'client_session_827a',
        role: 'ROLE_CUSTOMER',
        authorized: true
      },
      orderContent: cartItems,
      springSecurityContext: 'AUTHENTICATED_JWT_TOKEN',
      databaseResponse: {
        status: 'COMMIT_SUCCESSFUL',
        rowsAffected: cartItems.length,
        transactionId: 'TX_SpringSecurity6_' + Math.random().toString(36).substr(2, 9).toUpperCase()
      }
    };
    setCheckoutPayload(JSON.stringify(samplePayload, null, 2));
    setCartItems([]);
  };

  return (
    <section id="showcase" className="py-24 relative overflow-hidden">
      {/* Decorative gradient spot - Hide or scale down on mobile */}
      <div className="absolute bottom-[20%] left-[5%] w-[450px] h-[450px] bg-brand-pink/5 rounded-full blur-[100px] pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 font-mono text-[11px] text-pink-600 dark:text-pink-400 uppercase tracking-widest mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Trải nghiệm Thực tế
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-theme-text uppercase"
          >
            Dự án <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 font-black">& Phòng Thí nghiệm AI</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-theme-text-sec text-sm max-w-xl mx-auto"
          >
            Khám phá các dự án lập trình thực tế kết hợp với phòng thí nghiệm mô phỏng tương tác mã nguồn cực kì chân thực.
          </motion.p>
        </div>

        {/* Dynamic Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Projects lists */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-4 px-1 flex items-center gap-2">
                <FolderGit2 className="w-4 h-4 text-[#bf5af2]" />
                Dự án tâm huyết
              </h3>
              
              <div className="space-y-4">
                {PROJECTS.map((pj, idx) => (
                  <motion.div
                    key={pj.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -4 }}
                    className="p-5 rounded-2xl bg-theme-card border border-theme-card-border hover:border-purple-500/10 flex gap-4 items-start cursor-pointer group relative shadow-sm transition-colors duration-300"
                    onClick={() => setSelectedProject(pj)}
                  >
                    <div className="w-20 md:w-24 h-20 md:h-24 rounded-xl overflow-hidden bg-[#0d0a1b] border border-theme-border relative flex-shrink-0">
                      <img 
                        src={pj.image} 
                        alt={pj.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-mono text-purple-600 dark:text-purple-300 uppercase tracking-wider">{pj.category}</span>
                      <h4 className="font-display font-bold text-theme-text text-base mt-1 mb-1.5 group-hover:text-pink-500 transition-colors truncate">
                        {pj.title}
                      </h4>
                      <p className="text-xs text-theme-text-sec leading-snug line-clamp-2 mb-3 font-sans">
                        {pj.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {pj.tags.slice(0, 3).map((tg) => (
                          <span key={tg} className="px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 border border-theme-border text-[9px] font-mono text-theme-text-sec">
                            {tg}
                          </span>
                        ))}
                        {pj.tags.length > 3 && (
                          <span className="px-2 py-0.5 rounded bg-white/5 text-[9px] font-mono text-slate-400">
                            +{pj.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech stack brief certification badge */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-transparent border border-theme-border flex items-center gap-3">
              <Bot className="w-8 h-8 text-blue-500 dark:text-blue-400 flex-shrink-0 animate-bounce" />
              <div className="text-xs text-theme-text-sec">
                <span className="text-theme-text font-semibold">Tích hợp API:</span> Tất cả mã nguồn đều kết nối trực tiếp với API thực của WaveSpeed, fal.ai, Spring-Context và PyTorch Engine.
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Simulator Sandbox */}
          <div className="lg:col-span-12 xl:col-span-7">
            <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-4 px-1 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-pink-500" />
              Hội trường Trải nghiệm (Simulator Hub)
            </h3>

            <div className="rounded-2xl bg-theme-card border border-theme-card-border overflow-hidden h-full flex flex-col min-h-[500px] shadow-sm">
              
              {/* Simulator Tabs */}
              <div className="flex border-b border-theme-divider bg-black/5 dark:bg-[#050505]/95 p-1.5 gap-1.5 relative">
                <button
                  onClick={() => setActiveSandboxTab('ai')}
                  className={`flex-1 py-3 rounded-xl text-[11px] sm:text-xs font-semibold cursor-pointer relative transition-colors flex items-center justify-center gap-1.5 z-10 select-none focus:outline-none focus:ring-0 ${
                    activeSandboxTab === 'ai' 
                      ? 'text-theme-text' 
                      : 'text-theme-text-sec hover:text-theme-text'
                  }`}
                >
                  {activeSandboxTab === 'ai' && (
                    <motion.div
                      layoutId="activeSandboxTabPill"
                      className="absolute inset-0 bg-white dark:bg-white/5 rounded-xl border-b-2 border-pink-500 shadow-sm"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                  <Bot className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 relative z-10" />
                  <span className="relative z-10"><span className="hidden sm:inline">Mô phỏng </span>AI Media<span className="hidden sm:inline"> API</span></span>
                </button>
                <button
                  onClick={() => setActiveSandboxTab('yolo')}
                  className={`flex-1 py-3 rounded-xl text-[11px] sm:text-xs font-semibold cursor-pointer relative transition-colors flex items-center justify-center gap-1.5 z-10 select-none focus:outline-none focus:ring-0 ${
                    activeSandboxTab === 'yolo' 
                      ? 'text-theme-text' 
                      : 'text-theme-text-sec hover:text-theme-text'
                  }`}
                >
                  {activeSandboxTab === 'yolo' && (
                    <motion.div
                      layoutId="activeSandboxTabPill"
                      className="absolute inset-0 bg-white dark:bg-white/5 rounded-xl border-b-2 border-pink-500 shadow-sm"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                  <Sliders className="w-3.5 h-3.5 text-purple-500 dark:text-purple-400 relative z-10" />
                  <span className="relative z-10"><span className="hidden sm:inline">Nhận Diện </span>YOLO11x</span>
                </button>
                <button
                  onClick={() => setActiveSandboxTab('ecommerce')}
                  className={`flex-1 py-3 rounded-xl text-[11px] sm:text-xs font-semibold cursor-pointer relative transition-colors flex items-center justify-center gap-1.5 z-10 select-none focus:outline-none focus:ring-0 ${
                    activeSandboxTab === 'ecommerce' 
                      ? 'text-theme-text' 
                      : 'text-theme-text-sec hover:text-theme-text'
                  }`}
                >
                  {activeSandboxTab === 'ecommerce' && (
                    <motion.div
                      layoutId="activeSandboxTabPill"
                      className="absolute inset-0 bg-white dark:bg-white/5 rounded-xl border-b-2 border-pink-500 shadow-sm"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                  <ShoppingBag className="w-3.5 h-3.5 text-pink-500 relative z-10" />
                  <span className="relative z-10"><span className="hidden sm:inline">Spring </span>JWT Shop</span>
                </button>
              </div>

              {/* Sandbox Contents viewport */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-black/[0.01] dark:bg-[#050505]/95 overflow-hidden min-h-[380px]">
                <AnimatePresence mode="wait">
                  {/* 1. AI MEDIA synthesize TAB */}
                  {activeSandboxTab === 'ai' && (
                    <motion.div 
                      key="ai"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-4 flex-1 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <label className="text-[10px] font-mono text-theme-text-sec uppercase">Input Text Prompt (Mô tả hình ảnh)</label>
                          <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400">POST /api/v1/media</span>
                        </div>
                        
                        <textarea
                          value={aiPrompt}
                          onChange={(e) => setAiPrompt(e.target.value)}
                          disabled={isGeneratingAi}
                          className="w-full p-3 rounded-lg bg-theme-bg-sec border border-theme-border text-xs text-theme-text focus:outline-none focus:border-purple-500 font-sans transition-all resize-none h-18 shadow-inner"
                        />

                        <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mt-3">
                          {(['siliconflow', 'fal', 'wavespeed'] as const).map((prov) => (
                            <button
                              key={prov}
                              onClick={() => setAiProvider(prov)}
                              disabled={isGeneratingAi}
                              className={`py-1.5 rounded-md text-[10px] font-mono capitalize transition-all cursor-pointer border ${
                                aiProvider === prov 
                                  ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20 font-bold' 
                                  : 'bg-theme-bg-sec text-theme-text-sec hover:text-theme-text border-theme-border hover:bg-black/[0.02] dark:hover:bg-white/[0.02]'
                              }`}
                            >
                              <span>{prov}</span>
                              <span className="hidden xs:inline"> Provider</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* API Logs Output Terminal box */}
                      <div className="bg-slate-50 border border-slate-200 dark:bg-[#050212] dark:border-[#a855f7]/20 rounded-xl p-3 font-mono text-[9px] sm:text-[10px] text-slate-800 dark:text-slate-300 max-h-36 overflow-y-auto space-y-1 h-32 scrollbar-thin shadow-inner">
                        {aiLogLines.length === 0 ? (
                          <p className="text-slate-400 dark:text-slate-500 italic text-center pt-5">Vui lòng nhấn nút &quot;Khởi chạy Sinh Ảnh AI&quot; để quan sát luồng logic.</p>
                        ) : (
                          aiLogLines.map((line, i) => (
                            <p key={i} className={line.includes('[DONE]') ? 'text-blue-600 dark:text-blue-400 font-bold' : line.includes('FALLBACK') ? 'text-pink-600 dark:text-pink-400 font-bold' : 'text-slate-700 dark:text-slate-300'}>
                              {line}
                            </p>
                          ))
                        )}
                      </div>

                      {/* Result placeholder block */}
                      <div className="flex items-center gap-4.5 pt-2">
                        <button
                          onClick={handleAiGenerate}
                          disabled={isGeneratingAi}
                          className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-500 to-pink-500 text-white hover:opacity-90 disabled:opacity-40 select-none cursor-pointer font-display"
                        >
                          {isGeneratingAi ? 'Đang chạy Sinh...' : 'Khởi chạy Sinh Ảnh AI'}
                          <Play className="w-3.5 h-3.5" />
                        </button>

                        <div className="flex-1 h-20 rounded-xl bg-theme-bg-sec border border-theme-border flex items-center justify-center relative overflow-hidden shadow-inner">
                          <AnimatePresence mode="wait">
                            {isGeneratingAi && (
                              <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-theme-bg-sec/80 backdrop-blur-sm flex flex-col items-center justify-center z-10"
                              >
                                <div className="w-4 h-4 border-2 border-pink-500 border-t-transparent rounded-full animate-spin mb-1" />
                                <span className="text-[9px] font-mono text-theme-text-sec">CONNECTING...</span>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {generatedImage ? (
                            <motion.img 
                              initial={{ filter: 'blur(10px)', opacity: 0 }}
                              animate={{ filter: 'blur(0)', opacity: 1 }}
                              src={generatedImage} 
                              alt="AI generated result mockup" 
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <span className="text-[10px] text-theme-text-sec font-mono">Chưa có ảnh kết quả</span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* 2. YOLO OBJECT DETECTION TAB */}
                  {activeSandboxTab === 'yolo' && (
                    <motion.div 
                      key="yolo"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-4 flex-1 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Phát hiện vật thể máy ảnh (YOLO11x Model)</span>
                          <span className="text-[10px] font-mono text-purple-400">FPS: 28 ms</span>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 bg-black/[0.03] dark:bg-[#050505] p-3 rounded-lg border border-theme-border">
                          <div className="flex-1 w-full">
                            <div className="flex justify-between text-[11px] font-mono text-theme-text-sec mb-1">
                              <span>Ngưỡng nhận diện (Confidence Target)</span>
                              <span className="text-purple-600 dark:text-purple-400 font-bold">{Math.round(yoloThreshold * 100)}%</span>
                            </div>
                            <input
                              type="range"
                              min="0.3"
                              max="0.9"
                              step="0.05"
                              value={yoloThreshold}
                              onChange={(e) => setYoloThreshold(parseFloat(e.target.value))}
                              className="w-full accent-pink-600 cursor-pointer"
                            />
                          </div>

                          <button
                            onClick={() => setIsYoloActive(!isYoloActive)}
                            className={`w-full sm:w-auto px-4 py-2.5 rounded-lg text-xs font-semibold font-display shadow cursor-pointer select-none transition-all flex items-center justify-center gap-1.5 ${
                              isYoloActive 
                                ? 'bg-pink-500 text-white hover:opacity-90' 
                                : 'bg-purple-600 text-white hover:opacity-95'
                            }`}
                          >
                            {isYoloActive ? 'Dừng Nhận Diện' : 'Kích hoạt YOLO'}
                          </button>
                        </div>
                      </div>

                      {/* Camera view simulation screen */}
                      <div className="relative aspect-video w-full max-w-md mx-auto rounded-xl border border-theme-border bg-theme-bg-sec overflow-hidden flex items-center justify-center shadow-inner">
                        <img 
                          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600" 
                          alt="Workspace screen mockup" 
                          className="absolute inset-0 w-full h-full object-cover opacity-80"
                          referrerPolicy="no-referrer"
                        />

                        {/* Screen Scan Ambient Overlay Line */}
                        {isYoloActive && (
                          <div className="absolute inset-x-0 h-0.5 bg-pink-500/50 shadow-md shadow-pink-500/20 animate-bounce top-0 pointer-events-none" style={{ animationDuration: '6s' }} />
                        )}

                        {/* Dynamic rendered bounding boxes */}
                        <AnimatePresence>
                          {isYoloActive && yoloObjects.map((obj) => {
                            const aboveThreshold = obj.conf >= yoloThreshold;
                            if (!aboveThreshold) return null;
                            return (
                              <motion.div
                                key={obj.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className={`absolute border-2 rounded ${obj.box} pointer-events-none flex flex-col justify-between p-1`}
                              >
                                <span className="absolute -top-4.5 left-0 px-1.5 py-0.5 rounded bg-slate-900 border border-inherit text-[8px] font-mono text-white leading-none">
                                  {obj.name} ({Math.round(obj.conf * 100)}%)
                                </span>
                              </motion.div>
                            );
                          })}
                        </AnimatePresence>

                        {!isYoloActive && (
                          <div className="absolute inset-0 bg-theme-bg-sec/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-4 z-10 text-theme-text">
                            <EyeOff className="w-8 h-8 text-theme-text-sec mb-2" />
                            <p className="text-xs font-semibold mb-1">Mô phỏng mô hình YOLO11x</p>
                            <p className="text-[10px] text-theme-text-sec max-w-xs leading-normal">Bấm chuột vào nút &quot;Kích hoạt YOLO&quot; ở trên để xuất các bounding box dò tìm vật thể theo thuật toán máy ảnh.</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* 3. SPRING BOOT JWT CART */}
                  {activeSandboxTab === 'ecommerce' && (
                    <motion.div 
                      key="ecommerce"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-4 flex-1 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[10px] font-mono text-theme-text-sec uppercase">Trực quan hóa Spring Security 6 & JWT Checkout</span>
                          <span className="text-[10px] font-mono text-pink-600 dark:text-pink-400 font-bold">AUTH: JWT_STATE</span>
                        </div>

                        {/* Micro Products list */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                          {productsList.map((prod) => (
                            <div key={prod.id} className="p-3 rounded-lg bg-theme-bg-sec border border-theme-border flex flex-col justify-between gap-1.5 text-left shadow-sm">
                              <div>
                                <div className="text-[11px] font-bold text-theme-text line-clamp-1">{prod.name}</div>
                                <div className="text-[10px] font-mono text-theme-text-sec mt-0.5">{prod.price.toLocaleString('vi-VN')} đ</div>
                              </div>
                              <button
                                onClick={() => addToCart(prod)}
                                className="px-2.5 py-1 rounded bg-pink-500/10 hover:bg-pink-500/20 text-pink-600 dark:text-pink-400 text-[10px] text-center font-bold font-display transition-all cursor-pointer select-none border border-pink-500/10"
                              >
                                + Thêm vào Giỏ
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Integrated Cart list & Logs side-by-side */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        
                        {/* Cart lists view */}
                        <div className="bg-theme-bg-sec border border-theme-border rounded-xl p-3 flex flex-col justify-between h-36 shadow-inner">
                          <div className="text-[10px] font-bold font-display text-theme-text border-b border-theme-border pb-1 mb-1.5">Giỏ Hàng Đương Thời</div>
                          
                          <div className="flex-1 overflow-y-auto space-y-1.5 scrollbar-thin">
                            {cartItems.length === 0 ? (
                              <p className="text-[10px] text-theme-text-sec/60 italic text-center pt-4">Giỏ hàng rỗng.</p>
                            ) : (
                              cartItems.map((item) => (
                                <div key={item.id} className="flex items-center justify-between gap-1 text-[11px]">
                                  <span className="text-theme-text-sec truncate flex-1">{item.name} x{item.qty}</span>
                                  <button 
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-theme-text-sec hover:text-red-500 p-0.5 cursor-pointer"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              ))
                            )}
                          </div>

                          {cartItems.length > 0 && (
                            <button
                              onClick={handleCheckout}
                              className="w-full mt-2 py-1.5 rounded bg-purple-600 hover:bg-purple-700 text-white text-[10px] font-bold tracking-wider uppercase font-display cursor-pointer"
                            >
                              🚀 Gửi yêu cầu CHECKOUT (JWT)
                            </button>
                          )}
                        </div>

                        {/* Spring Output payloads terminal */}
                        <div className="bg-slate-50 border border-slate-200 dark:bg-[#050212] dark:border-[#a855f7]/20 rounded-xl p-3 font-mono text-[9px] text-blue-600 dark:text-[#2ebdff] overflow-auto h-36 shadow-inner">
                          <div className="text-slate-400 dark:text-slate-500 text-[8px] uppercase tracking-wider mb-1.5">RESPONSE PAYLOAD (SPRING SECURITY):</div>
                          {isCheckoutCompleted && checkoutPayload ? (
                            <pre className="leading-tight text-emerald-600 dark:text-emerald-400 font-sans whitespace-pre-wrap">{checkoutPayload}</pre>
                          ) : (
                            <p className="text-slate-400 dark:text-slate-500 italic text-center pt-8">Nhấn Checkout JWT để nhận về Payload phản hồi từ Server.</p>
                          )}
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Render beautiful floating modal with absolute smooth animation */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-[#050505]/95 backdrop-blur-md"
          >
            {/* Modal Box wrapper */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="w-full max-w-2xl bg-theme-bg-sec border border-theme-border rounded-xl md:rounded-2xl overflow-hidden shadow-2xl relative transition-all duration-300"
            >
              {/* Core Banner Hero image */}
              <div className="w-full h-44 sm:h-56 relative bg-slate-900 border-b border-theme-border">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-theme-bg-sec to-transparent" />
                
                {/* Micro tech label */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/40 dark:bg-white/5 w-max text-[10px] font-mono text-purple-300 uppercase tracking-widest border border-theme-border">
                  {selectedProject.category}
                </span>

                {/* Close Button top-right */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/60 hover:bg-slate-950 border border-theme-border text-slate-400 hover:text-white cursor-pointer"
                >
                  <Trash2 className="w-4 h-4 rotate-45 transform" />
                </button>
              </div>

              {/* Modal Body Info details */}
              <div className="p-6 sm:p-8 space-y-5">
                <div>
                  <div className="text-[10px] font-mono text-slate-500 mb-1">{selectedProject.period}</div>
                  <h3 className="font-display font-bold text-lg md:text-2xl text-theme-text">{selectedProject.title}</h3>
                  <p className="text-xs md:text-sm text-theme-text-sec leading-relaxed font-sans mt-2">{selectedProject.description}</p>
                </div>

                {/* Action lists highlights bullet */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">Tính năng & Thiết kế nổi bật</span>
                  <ul className="space-y-1.5 text-xs text-theme-text-sec leading-normal">
                    {selectedProject.highlights.map((hlt, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{hlt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tg) => (
                    <span key={tg} className="px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/5 border border-theme-border text-[10px] font-mono text-theme-text-sec font-medium">
                      {tg}
                    </span>
                  ))}
                </div>

                {/* Modal actions / github links */}
                <div className="flex items-center gap-3 pt-4 border-t border-theme-border">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2.5 rounded-lg text-center text-xs font-semibold bg-black/5 dark:bg-white/5 border border-theme-border text-theme-text-sec hover:text-theme-text flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <Github className="w-4 h-4" />
                      Mã nguồn Github
                    </a>
                  )}

                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2.5 rounded-lg text-center text-xs font-semibold bg-gradient-to-r from-blue-500 to-pink-500 text-white hover:opacity-90 flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Mã nguồn Front-end
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
