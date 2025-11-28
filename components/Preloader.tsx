
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    // Reduced timing for faster loading
    const sequence = [
      { time: 500, action: () => setStep(1) },
      { time: 1500, action: () => setStep(2) },
      { time: 2500, action: () => setStep(3) },
      { time: 3000, action: onComplete },
    ];

    let timeouts: ReturnType<typeof setTimeout>[] = [];
    sequence.forEach(({ time, action }) => {
      timeouts.push(setTimeout(action, time));
    });

    return () => timeouts.forEach(clearTimeout);
  }, [onComplete]);

  if (step === 3) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#050607] flex flex-col items-center justify-center overflow-hidden">
      {/* Moon & Grass Animation */}
      <div className={`transition-opacity duration-1000 absolute inset-0 flex items-end justify-center pointer-events-none opacity-60 ${step >= 0 ? 'opacity-100' : 'opacity-0'}`}>
         <svg viewBox="0 0 400 300" className="w-full h-full max-w-3xl absolute bottom-0">
            <defs>
              <filter id="moonGlow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            {/* Moon */}
            <circle cx="320" cy="60" r="25" fill="#F0F5FF" filter="url(#moonGlow)" opacity="0.1" className="animate-pulse" />
            
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

      <div className={`relative z-10 text-center px-6 transition-all duration-1000 transform ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h1 className="text-lily-pale font-display text-4xl md:text-7xl font-black tracking-[0.5em] mb-4 drop-shadow-lg">
          土界鎮
        </h1>
        <p className="text-lantern-red font-mono tracking-[0.3em] text-xs md:text-sm uppercase opacity-80">
          TUJIE TOWN
        </p>
      </div>
      
      <div className={`absolute bottom-20 transition-opacity duration-1000 delay-200 ${step === 2 ? 'opacity-100' : 'opacity-0'}`}>
         <p className="text-mist-grey/60 font-serif text-sm md:text-xl tracking-widest border-l-2 border-lantern-red pl-4 italic">
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
