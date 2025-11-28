
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

      {/* Moon - Positioned Top Right */}
      <div className={`transition-opacity duration-1000 absolute inset-0 pointer-events-none ${step >= 0 ? 'opacity-100' : 'opacity-0'}`}>
         <div className="absolute top-12 right-12 md:top-20 md:right-32 w-24 h-24 md:w-32 md:h-32 bg-[#F0F5FF] rounded-full blur-[2px] opacity-80 shadow-[0_0_60px_rgba(240,245,255,0.6)]"></div>
         <div className="absolute top-12 right-12 md:top-20 md:right-32 w-24 h-24 md:w-32 md:h-32 bg-[#F0F5FF] rounded-full blur-[40px] opacity-40 mix-blend-screen"></div>
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
    </div>
  );
};

export default Preloader;