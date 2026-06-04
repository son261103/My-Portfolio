import React, { useEffect, useState } from 'react';

export default function BackgroundEffect() {
  const [stars, setStars] = useState<{ id: number; left: string; top: string; size: number; duration: number; opacity: number; colorClass: string }[]>([]);
  const [shootingStars, setShootingStars] = useState<{ id: number; left: string; top: string; delay: number }[]>([]);

  useEffect(() => {
    // Generate stable star field
    const starColors = [
      'bg-purple-400 dark:bg-purple-300 shadow-[0_0_4px_rgba(168,85,247,0.4)]',
      'bg-cyan-400 dark:bg-cyan-300 shadow-[0_0_4px_rgba(34,211,238,0.4)]',
      'bg-pink-400 dark:bg-pink-300 shadow-[0_0_4px_rgba(244,63,94,0.4)]',
      'bg-blue-400 dark:bg-blue-300 shadow-[0_0_4px_rgba(59,130,246,0.4)]',
      'bg-slate-400 dark:bg-white shadow-[0_0_3px_rgba(255,255,255,0.3)]',
    ];

    const generatedStars = Array.from({ length: 260 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2.2 + 0.6, // sizes between 0.6px and 2.8px
      duration: Math.random() * 4 + 2.5, // dynamic twinkling duration
      opacity: Math.random() * 0.8 + 0.2, // brighter stars
      colorClass: starColors[Math.floor(Math.random() * starColors.length)],
    }));
    setStars(generatedStars);

    // Generate more frequent shooting stars
    const generatedShootingStars = Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      left: `${10 + Math.random() * 80}%`,
      top: `${5 + Math.random() * 45}%`,
      delay: Math.random() * 24,
    }));
    setShootingStars(generatedShootingStars);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-gradient-to-b from-[#fafaff] via-[#f4f5fc] to-[#edf0fb] dark:from-[#02010c] dark:via-[#050416] dark:to-[#010108] transition-colors duration-500">
      <style>{`
        @keyframes cosmic-pulse {
          0%, 100% { opacity: 0.25; transform: scale(1) translate(0px, 0px); }
          50% { opacity: 0.45; transform: scale(1.1) translate(10px, -15px); }
        }
        @keyframes cosmic-pulse-reverse {
          0%, 100% { opacity: 0.15; transform: scale(1) translate(0px, 0px); }
          50% { opacity: 0.35; transform: scale(0.95) translate(-15px, 10px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: var(--star-opacity); transform: scale(1); }
          50% { opacity: 0.15; transform: scale(0.6); }
        }
        @keyframes shoot {
          0% {
            transform: translate(0, 0) rotate(-45deg) scale(0);
            opacity: 0;
          }
          1% {
            opacity: 0.8;
            transform: translate(0, 0) rotate(-45deg) scale(1);
          }
          6% {
            opacity: 0;
            transform: translate(-180px, 180px) rotate(-45deg) scale(0);
          }
          100% {
            opacity: 0;
            transform: translate(-180px, 180px) rotate(-45deg) scale(0);
          }
        }
        .animate-cosmic-pulse {
          animation: cosmic-pulse 25s ease-in-out infinite;
        }
        .animate-cosmic-pulse-rev {
          animation: cosmic-pulse-reverse 28s ease-in-out infinite;
        }
        .shooting-star-line {
          position: relative;
          background: linear-gradient(to right, rgba(168, 85, 247, 0.7), transparent);
          width: 70px;
          height: 1.5px;
          border-radius: 50%;
        }
      `}</style>

      {/* Cosmic Nebula Glow spots (Glows adapt elegantly with light/dark overlay) */}
      <div className="absolute inset-0 opacity-80 dark:opacity-100 pointer-events-none">
        {/* Nebula 1 (Purple/Pink Space Dust) */}
        <div className="absolute -top-[15%] -right-[10%] w-[650px] h-[650px] bg-purple-500/10 dark:bg-purple-600/[0.18] blur-[110px] md:blur-[140px] rounded-full animate-cosmic-pulse" />
        
        {/* Nebula 2 (Deep Cyber Cyan / Blue) */}
        <div className="absolute -bottom-[15%] -left-[10%] w-[600px] h-[600px] bg-cyan-400/5 dark:bg-cyan-500/[0.12] blur-[110px] md:blur-[140px] rounded-full animate-cosmic-pulse-rev" />
        
        {/* Nebula 3 (Center subtle pink drift) */}
        <div className="absolute top-[25%] left-[25%] w-[450px] h-[450px] bg-pink-500/5 dark:bg-pink-600/[0.08] blur-[120px] rounded-full animate-cosmic-pulse" style={{ animationDelay: '-5s' }} />
      </div>

      {/* Celestial Vectors and Orbit Grids - Giving a beautiful mathematical 3D Space feel for Three.js theme */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none overflow-hidden">
        {/* Orbital System Center (Isometric view simulation with tilted rings) */}
        <div className="absolute top-[25%] left-[50%] -translate-x-1/2 w-[800px] h-[450px] rounded-full border border-slate-300/[0.15] dark:border-white/[0.05] -rotate-12">
          {/* Inner orbit 1 */}
          <div className="absolute inset-[15%] rounded-full border border-dashed border-purple-500/15 dark:border-purple-400/10 animate-spin" style={{ animationDuration: '140s' }} />
          {/* Inner orbit 2 */}
          <div className="absolute inset-[35%] rounded-full border border-dotted border-cyan-500/20 dark:border-cyan-400/15 animate-spin" style={{ animationDuration: '90s', animationDirection: 'reverse' }} />
          {/* Node pointers */}
          <div className="absolute top-0 left-[30%] w-1.5 h-1.5 rounded-full bg-cyan-400/45 dark:bg-cyan-300/30 blur-[1px]" />
          <div className="absolute bottom-[20%] right-[10%] w-2 h-2 rounded-full bg-purple-500/40 dark:bg-purple-400/35 blur-[1px]" />
        </div>

        {/* Diagonal space grid network markers (extremely fine dots) */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(var(--border-color)_1px,transparent_1px)] bg-[size:32px_32px]" 
          style={{ maskImage: 'radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)', WebkitMaskImage: 'radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)' }}
        />
      </div>

      {/* Twinkling Starfield */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className={`absolute rounded-full ${star.colorClass}`}
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              '--star-opacity': star.opacity,
              animation: `twinkle ${star.duration}s ease-in-out infinite`,
            } as React.CSSProperties}
          />
        ))}

        {/* Shooting Stars */}
        {shootingStars.map((ss) => (
          <div
            key={ss.id}
            className="absolute z-10 pointer-events-none"
            style={{
              left: ss.left,
              top: ss.top,
              animation: `shoot 12s linear infinite`,
              animationDelay: `${ss.delay}s`,
            }}
          >
            <div className="shooting-star-line" />
          </div>
        ))}
      </div>
    </div>
  );
}
