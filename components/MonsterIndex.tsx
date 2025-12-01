
import React from 'react';
import { ASSETS, ITEMS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const MonsterIndex: React.FC<{ foundItems: string[] }> = ({ foundItems }) => {
  // Feature temporarily disabled: Always treated as locked/incomplete
  const allFound = false; 
  // const progress = Math.round((foundItems.length / ITEMS.length) * 100); // Progress not shown
  const { t } = useLanguage();
  const steamUrl = "https://store.steampowered.com/app/4209230/?utm_source=officialsite&utm_campaign=tujietown";
  
  return (
    <section id="collection" className="py-12 md:py-24 bg-[#151719] relative overflow-hidden border-t border-lily-shadow flex justify-center">
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url(${ASSETS.textureWood})` }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

      <div className="w-full max-w-[95%] md:max-w-[90%] relative z-10">
        <div className="text-center mb-10 md:mb-16">
           <h2 className="text-2xl md:text-5xl font-display font-bold tracking-[0.2em] text-lily-pale mb-4 md:mb-6 drop-shadow-lg">{t.monster.title}</h2>
           <p className="text-white/60 font-serif text-base md:text-lg max-w-3xl mx-auto leading-loose opacity-70 px-4 whitespace-pre-wrap">
             {t.monster.subtitle}
           </p>
        </div>

        {/* File Folder Container */}
        <div className={`relative bg-[#5c554b] p-1 md:p-2 rounded-sm shadow-[0_50px_100px_rgba(0,0,0,0.9)] mx-auto w-full max-w-[1200px] transform md:rotate-[0.5deg] transition-all duration-700`}>
           {/* Tab */}
           <div className="absolute -top-8 md:-top-10 left-4 md:left-10 bg-[#5c554b] px-6 md:px-12 py-2 md:py-3 rounded-t-md border-t-2 border-l border-r border-[#4a443b] shadow-sm z-0">
              <span className="text-red-900/60 font-mono font-bold tracking-widest text-sm md:text-lg">{t.monster.caseId}</span>
           </div>
           
           <div 
             className={`bg-[#c2b59b] p-4 md:p-12 relative overflow-hidden shadow-[inset_0_0_100px_rgba(0,0,0,0.3)] border border-[#4a443b] transition-all duration-700 ease-in-out h-auto py-20 md:py-24`} 
             style={{ backgroundImage: `url(${ASSETS.texturePaper})` }}
           >
              <div className="absolute inset-0 bg-orange-900/5 mix-blend-multiply pointer-events-none"></div>

              {/* Locked View (Always Visible) */}
              <div className="relative z-40 flex flex-col items-center justify-center text-center w-full">
                {/* Security Tape */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-32 border-t-4 border-b-4 border-[#7A2321]/20 bg-[#7A2321]/5 -rotate-6 pointer-events-none flex items-center justify-center overflow-hidden">
                    <div className="text-[#7A2321]/10 font-black text-6xl md:text-8xl tracking-[0.5em] whitespace-nowrap animate-pulse">
                        CONFIDENTIAL
                    </div>
                </div>

                {/* Paper Note Card */}
                {/* Adjusted padding (p-6) for mobile to give more width for content */}
                <div className="relative w-full max-w-lg bg-[#e3dac9] p-6 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-[#b0a48f] transform rotate-1">
                        <div className="absolute inset-0 opacity-40 pointer-events-none bg-repeat" style={{ backgroundImage: `url(${ASSETS.texturePaper})` }}></div>
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#dcd3c1]/80 shadow-sm border border-white/40 transform -rotate-2"></div>

                        <div className="relative z-10 flex flex-col items-center">
                        <div className="mb-4 text-[#7A2321]">
                            <i className="fa-solid fa-file-circle-xmark text-5xl md:text-6xl drop-shadow-sm opacity-90"></i>
                        </div>

                        <h3 className="text-xl md:text-3xl font-display font-black text-[#4a443b] tracking-[0.2em] uppercase mb-2 border-b-2 border-[#4a443b] pb-2">
                            {t.monster.lockedOverlay.topSecret}
                        </h3>
                        
                        <p className="text-[#5c554b] font-serif font-bold text-sm md:text-base mb-4 tracking-widest mt-4 leading-relaxed">
                            {t.monster.lockedOverlay.desc}
                        </p>
                        
                        <p className="text-[#7A2321] font-serif font-bold text-sm md:text-base tracking-widest leading-relaxed whitespace-pre-wrap">
                            {t.monster.lockedOverlay.hint}
                        </p>

                        <div className="mt-8 flex flex-col md:flex-row gap-4 w-full">
                            <a href="https://www.facebook.com/orizengames" target="_blank" rel="noreferrer" className="flex-1 text-[#4a443b] hover:text-[#7A2321] flex items-center justify-center gap-2 transition-colors p-2 border border-[#4a443b]/20 hover:border-[#7A2321]/50 bg-[#4a443b]/5 hover:bg-[#7A2321]/10 text-sm font-bold">
                                <i className="fa-brands fa-facebook"></i> 
                                <span>Facebook</span>
                            </a>
                            <a href="https://www.instagram.com/tujietown.offical" target="_blank" rel="noreferrer" className="flex-1 text-[#4a443b] hover:text-[#7A2321] flex items-center justify-center gap-2 transition-colors p-2 border border-[#4a443b]/20 hover:border-[#7A2321]/50 bg-[#4a443b]/5 hover:bg-[#7A2321]/10 text-sm font-bold">
                                <i className="fa-brands fa-instagram"></i> 
                                <span>Instagram</span>
                            </a>
                        </div>
                        
                        {/* Status Bar */}
                        <div className="w-full mt-8 pt-4 border-t border-[#4a443b]/20">
                            <div className="flex justify-between text-[#4a443b] font-mono text-xs font-bold tracking-widest uppercase">
                                <span>{t.monster.lockedOverlay.status}</span>
                            </div>
                        </div>
                        </div>
                </div>
              </div>

           </div>
        </div>
      </div>
    </section>
  );
};

export default MonsterIndex;
