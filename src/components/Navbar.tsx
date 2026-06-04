import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Code, Sparkles, Terminal, Compass, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
}

export default function Navbar({ activeSection, isDark, setIsDark }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Khởi đầu', icon: Compass },
    { id: 'experience', label: 'Hành trình', icon: Terminal },
    { id: 'skills', label: 'Kỹ năng', icon: Code },
    { id: 'showcase', label: 'Trải nghiệm', icon: Sparkles },
    { id: 'contact', label: 'Kết nối', icon: ArrowRight },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 bg-theme-navbar backdrop-blur-md border-b border-theme-border shadow-sm' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with moving color gradient */}
          <button 
            onClick={() => handleScrollTo('hero')}
            className="flex items-center gap-2.5 font-display font-bold text-xl tracking-tight cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center text-white scale-95 group-hover:scale-105 transition-transform">
              <span className="text-sm font-mono">&lt;/&gt;</span>
            </div>
            <span className="text-slate-900 dark:text-white font-black transition-colors duration-300">
              LE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-black">SON</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-black/5 dark:bg-white/5 border border-theme-border transition-colors">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`relative flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'text-theme-text dark:text-white' 
                      : 'text-theme-text-sec hover:text-theme-text hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-pink-500/10 border border-purple-500/20 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-pink-400' : 'text-slate-500'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Call-to-action button & Theme switch */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-black/5 dark:bg-white/5 border border-theme-border hover:bg-black/10 dark:hover:bg-white/10 text-theme-text-sec hover:text-theme-text transition-all cursor-pointer shadow-sm flex items-center justify-center"
              title={isDark ? "Chuyển sang giao diện sáng" : "Chuyển sang giao diện tối"}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-500 animate-pulse" />
              ) : (
                <Moon className="w-4 h-4 text-blue-500" />
              )}
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="px-4.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500 to-pink-500 text-white hover:opacity-90 transition-all cursor-pointer font-display"
            >
              Liên hệ ngay
            </button>
          </div>

          {/* Mobile Theme Switcher and Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-md text-theme-text-sec hover:text-theme-text hover:bg-black/5 dark:hover:bg-white/5 focus:outline-none cursor-pointer"
              title={isDark ? "Giao diện Sáng" : "Giao diện Tối"}
            >
              {isDark ? <Sun className="w-4.5 h-4.5 text-amber-500" /> : <Moon className="w-4.5 h-4.5 text-blue-500" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-theme-text-sec hover:text-theme-text hover:bg-black/5 dark:hover:bg-white/5 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[57px] left-0 right-0 z-40 md:hidden bg-theme-navbar border-b border-theme-border backdrop-blur-md overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleScrollTo(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive 
                        ? 'bg-black/5 dark:bg-white/5 text-theme-text border-l-2 border-pink-500' 
                        : 'text-theme-text-sec hover:text-theme-text hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-pink-400" />
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-theme-border">
                <button
                  onClick={() => handleScrollTo('contact')}
                  className="w-full py-2.5 rounded-lg text-center text-sm font-semibold bg-gradient-to-r from-blue-500 to-pink-500 text-white"
                >
                  Liên hệ ngay
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
