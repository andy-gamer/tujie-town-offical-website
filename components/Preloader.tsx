
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ASSETS } from '../constants';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    // Reduced timing for faster loading
    const sequence = [
      { time: 500, action: () => setStep(1) },
      { time: 1500, action: () => setStep(2) },
      { time: 3000, action: () => setStep(3) },
      { time: 3500, action: onComplete },
    ];

    let timeouts: ReturnType<typeof setTimeout>[] = [];
    sequence.forEach(({ time, action }) => {
      timeouts.push(setTimeout(action, time));
    });

    return () => timeouts.forEach(clearTimeout);
  }, [onComplete]);

  if (step === 3) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-b from-[#050607] via-[#1a1c20] to-[#050607] flex flex-col items-center justify-center overflow-hidden">
      {/* Fog Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-40 mix-blend-screen animate-fog" style={{ backgroundImage: `url(${ASSETS.fog1})`, backgroundSize: 'cover' }}></div>
      <div className="absolute inset-0 z-20 pointer-events-none opacity-30 mix-blend-screen animate-fog-slow" style={{ backgroundImage: `url(${ASSETS.fog2})` }}></div>

      {/* Moon & Grass Animation */}
      <div className={`transition-opacity duration-1000 absolute inset-0 flex items-end justify-center pointer-events-none opacity-60 ${step >= 0 ? 'opacity-100' : 'opacity-0'}`}>
         {/* Large Hazy Moon Glow */}
         <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#F0F5FF] rounded-full blur-[100px] opacity-10"></div>

         <svg viewBox="0 0 400 300" className="w-full h-full max-w-3xl absolute bottom-0 z-10">
            <defs>
              <filter id="moonGlow">
                <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            {/* Moon - Hazy Edge */}
            <circle cx="200" cy="80" r="30" fill="#F0F5FF" filter="url(#moonGlow)" opacity="0.8" className="animate-pulse drop-shadow-[0_0_20px_rgba(240,245,255,0.3)]" />
            
            {/* Swaying Grass & Lily */}
            <g className="animate-sway origin-bottom text-white/20" style={{ transformOrigin: '50% 100%' }}>
               {/* Grass Blades */}
               <path d="M50 300 Q 60 250 40 200" stroke="currentColor" strokeWidth="1" fill="none" />
               <path d="M70 300 Q 60 240 80 180" stroke="currentColor" strokeWidth="1" fill="none" />
               <path d="M300 300 Q 310 240 290 190" stroke="currentColor" strokeWidth="0.5" fill="none" />
               <path d="M350 300 Q 340 260 360 220" stroke="currentColor" strokeWidth="0.8" fill="none" />
               
               {/* Lily Flower (Stylized) */}
               <path d="M200 300 Q 200 200 180 150" stroke="currentColor" strokeWidth="1.5" fill="none" />
               <path d="M180 150 C 170 160 160 155 155 145" stroke="#C0352B" strokeWidth="2" fill="none" opacity="0.6" /> {/* Petal */}
               <path d="M180 150 C 190 160 200 155 205 145" stroke="#C0352B" strokeWidth="2" fill="none" opacity="0.6" /> {/* Petal */}
               <path d="M180 150 Q 180 130 170 120" stroke="#C0352B" strokeWidth="2" fill="none" opacity="0.6" /> {/* Petal */}
            </g>
         </svg>
      </div>

      <div className={`relative z-30 text-center px-6 transition-all duration-1000 transform ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h1 className="text-lily-pale font-display text-4xl md:text-7xl font-black tracking-[0.5em] mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          土界鎮
        </h1>
        <p className="text-lantern-red font-mono tracking-[0.3em] text-xs md:text-sm uppercase opacity-90 text-shadow-sm">
          TUJIE TOWN
        </p>
      </div>
      
      <div className={`absolute bottom-20 z-30 transition-opacity duration-1000 delay-200 ${step === 2 ? 'opacity-100' : 'opacity-0'}`}>
         <p className="text-mist-grey/80 font-serif text-sm md:text-lg tracking-widest border-l-2 border-lantern-red pl-4 italic drop-shadow-md">
           {t.preloader.line1}
         </p>
      </div>
      
      <style>{`
        @keyframes sway {
          0% { transform: rotate(-2deg); }
          100% { transform: rotate(2deg); }
        }
        .animate-sway {
          animation: sway 5s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default Preloader;
