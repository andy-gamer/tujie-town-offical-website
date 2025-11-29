import React, { useState } from 'react';
import { ASSETS, ITEMS } from '../constants';
import TrailerModal from './TrailerModal';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC<{ foundItems: string[], onFindItem: (id: string) => void }> = ({ foundItems, onFindItem }) => {
  const [showTrailer, setShowTrailer] = useState(false);
  const heroItem = ITEMS.find(i => i.section === 'hero');
  const isFound = heroItem && foundItems.includes(heroItem.id);
  const { t } = useLanguage();

  return (
    <>
      <section id="hero" className="relative w-full h-screen min-h-[600px] overflow-hidden bg-midnight-fog select-none flex flex-col md:block">
        
        {/* --- Background Image Section --- 
            Mobile: Flex item taking up top space.
            Desktop: Absolute full coverage.
        */}
        <div className="relative w-full flex-1 md:absolute md:inset-0 md:h-full overflow-hidden shrink-0 h-[60vh] md:h-auto">
           {/* Image Layer */}
           <img 
             src={ASSETS.heroBg} 
             className="w-full h-full object-cover md:opacity-90 animate-ken-burns object-top" 
             alt="Concept Art" 
           />
           
           {/* Dark Vignette - Shrouded Feel */}
           <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(5,6,7,0.5)] md:shadow-[inset_0_0_300px_rgba(5,6,7,0.9)] mix-blend-multiply pointer-events-none"></div>
           
           {/* Desktop Gradient Overlay */}
           <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#1D1F21] via-[#1D1F21]/40 to-transparent mix-blend-multiply"></div>
           <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#1D1F21]/90 via-transparent to-transparent"></div>
           
           {/* Fog Layers */}
           <div className="absolute inset-0 bg-repeat-x animate-fog opacity-50 mix-blend-hard-light pointer-events-none" style={{ backgroundImage: `url(${ASSETS.fog1})` }}></div>
           <div className="absolute inset-0 bg-repeat-x animate-fog-slow opacity-40 mix-blend-screen pointer-events-none" style={{ backgroundImage: `url(${ASSETS.fog2})` }}></div>

           {/* Mobile Only: Bottom fade to blend with text section */}
           <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0e1012] to-transparent md:hidden"></div>
           
           {/* --- LOGO SECTION (Moved to Right Area) --- */}
           {ASSETS.logo && (
              <div className="absolute top-16 right-4 md:top-[30%] md:right-16 z-20 flex flex-col items-end pointer-events-none mix-blend-screen opacity-90 transform md:-translate-y-1/2">
                  {/* Container for Logo */}
                  <div className="relative w-40 md:w-[550px]">
                      <img 
                         src={ASSETS.logo} 
                         alt="Logo" 
                         className="w-full h-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] filter brightness-110 contrast-125" 
                      />
                      {/* Glitch/Breath Effect Overlay */}
                      <div className="absolute inset-0 bg-lantern-red/20 mix-blend-color-dodge opacity-0 animate-ping"></div>
                  </div>
              </div>
           )}

            {/* Hidden Item */}
            {!isFound && heroItem && (
              <button
                onClick={(e) => { e.stopPropagation(); onFindItem(heroItem.id); }}
                className="absolute w-20 h-20 md:w-24 md:h-24 flex items-center justify-center text-lily-pale hover:text-lantern-red transition-all cursor-pointer animate-float z-50 group"
                style={{ top: heroItem.top, left: heroItem.left }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-lantern-red/30 rounded-full animate-ping blur-sm"></div>
                    <i className={`fa-solid ${heroItem.icon} text-4xl md:text-5xl drop-shadow-[0_0_15px_rgba(192,53,43,0.8)] opacity-90 group-hover:opacity-100 relative z-10`}></i>
                    <div className="absolute -bottom-6 text-xs text-lantern-red font-bold tracking-widest bg-black/50 px-2 py-1 rounded backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {t.hero.clickToInvestigate}
                    </div>
                </div>
              </button>
            )}
        </div>

        {/* --- Content Box ---
            Mobile: Relative block below image (Solid background)
            Desktop: Absolute overlay on bottom left
        */}
        <div className="relative md:absolute md:bottom-32 md:left-0 w-full px-0 md:px-24 pointer-events-auto z-30 flex justify-center md:justify-start bg-[#0e1012] md:bg-transparent shadow-2xl md:shadow-none border-t-2 border-lantern-red md:border-t-0">
           <div className="p-8 md:p-12 md:border-l-4 md:border-lantern-red/60 bg-[#0e1012] md:bg-[#1D1F21]/60 md:backdrop-blur-sm max-w-full md:max-w-2xl w-full relative overflow-hidden group pb-12 md:pb-12">
              {/* Subtle sheen effect */}
              <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <div className="mb-4 md:mb-8 relative flex items-baseline gap-2 md:block">
                <span className="block text-lantern-red font-display font-black tracking-[0.2em] text-4xl md:text-[8rem] leading-none drop-shadow-red-glow glitch opacity-90" data-text="2026">
                  2026
                </span>
                <span className="block text-mist-grey font-mono font-bold tracking-[0.2em] md:tracking-[0.6em] text-xs md:text-3xl md:mt-2 md:ml-1 opacity-80">
                  {t.hero.comingSoon}
                </span>
              </div>
              <p className="text-lily-pale font-serif leading-loose text-sm md:text-2xl shadow-black drop-shadow-md mb-8 md:mb-12 font-medium tracking-wide">
                {t.hero.description_1}<br/>
                {t.hero.description_2}<br/>
                {t.hero.description_3}<br/>
                {t.hero.description_4}<br className="md:hidden" />
                <span className="text-lantern-red font-bold font-display text-base md:text-3xl md:mx-2 border-b-2 border-lantern-red inline-block mt-2 md:mt-0">{t.hero.description_punchline}</span>
              </p>
              <div className="flex flex-col md:flex-row gap-8">
                <button onClick={() => setShowTrailer(true)} className="group flex items-center gap-4 text-sm md:text-lg tracking-widest text-moon-silver hover:text-lantern-red transition-colors w-full md:w-auto justify-center md:justify-start">
                  <span className="w-10 h-10 md:w-16 md:h-16 border border-mist-grey/50 flex items-center justify-center group-hover:border-lantern-red group-hover:bg-lantern-red/10 transition-all">
                    <i className="fa-solid fa-play ml-1 text-lg md:text-2xl"></i>
                  </span>
                  <span className="border-b border-transparent group-hover:border-lantern-red pb-1 font-display font-bold">{t.hero.watchTrailer}</span>
                </button>
              </div>
           </div>
        </div>

      </section>
      {showTrailer && <TrailerModal onClose={() => setShowTrailer(false)} />}
    </>
  );
};

export default Hero;