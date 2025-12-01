
import React, { useState } from 'react';
import { ASSETS, ITEMS } from '../constants';
import TrailerModal from './TrailerModal';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC<{ foundItems: string[], onFindItem: (id: string) => void }> = ({ foundItems, onFindItem }) => {
  const [showTrailer, setShowTrailer] = useState(false);
  // Hidden item logic disabled
  // const heroItem = ITEMS.find(i => i.section === 'hero');
  // const isFound = heroItem && foundItems.includes(heroItem.id);
  const { t } = useLanguage();

  const renderItemContent = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-lantern-red/30 rounded-full animate-ping blur-sm"></div>
        {/* Icon - Scaled up slightly for mobile visibility */}
        {/* <i className={`fa-solid ${heroItem?.icon} text-5xl md:text-5xl drop-shadow-[0_0_15px_rgba(192,53,43,0.8)] opacity-90 group-hover:opacity-100 relative z-10`}></i> */}
        <div className="absolute -bottom-6 text-xs text-lantern-red font-bold tracking-widest bg-black/50 px-2 py-1 rounded backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
            {t.hero.clickToInvestigate}
        </div>
    </div>
  );

  return (
    <>
      <section id="hero" className="relative w-full h-[100dvh] md:h-screen md:min-h-[600px] overflow-hidden bg-midnight-fog select-none">
        
        {/* --- Background Layer (Full Screen for both Mobile & Desktop) --- */}
        <div className="absolute inset-0 w-full h-full z-0">
           {/* Main Image */}
           <img 
             src={ASSETS.heroBg} 
             className="w-full h-full object-cover md:opacity-90 animate-ken-burns object-top md:object-center" 
             alt="Concept Art" 
           />
           
           {/* Mobile Gradient Overlay (Bottom Up Fade) - Adjusted to support Logo+Text stack */}
           <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-[#050607]/60 to-transparent md:hidden mix-blend-multiply opacity-60"></div>
           
           {/* Desktop Overlays */}
           <div className="hidden md:block absolute inset-0 shadow-[inset_0_0_100px_rgba(5,6,7,0.5)] md:shadow-[inset_0_0_300px_rgba(5,6,7,0.9)] mix-blend-multiply pointer-events-none"></div>
           <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#1D1F21] via-[#1D1F21]/40 to-transparent mix-blend-multiply"></div>
           <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#1D1F21]/90 via-transparent to-transparent"></div>
           
           {/* Fog Layers - Reduced opacity on mobile to let image show through */}
           <div className="absolute inset-0 bg-repeat-x animate-fog opacity-30 md:opacity-50 mix-blend-hard-light pointer-events-none" style={{ backgroundImage: `url(${ASSETS.fog1})` }}></div>
           <div className="absolute inset-0 bg-repeat-x animate-fog-slow opacity-20 md:opacity-40 mix-blend-screen pointer-events-none" style={{ backgroundImage: `url(${ASSETS.fog2})` }}></div>
        </div>

        {/* Hidden Item Temporarily Disabled */}
        {/*
        {!isFound && heroItem && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); onFindItem(heroItem.id); }}
              className="md:hidden absolute w-24 h-24 top-[45%] right-6 flex items-center justify-center text-lily-pale hover:text-lantern-red transition-all cursor-pointer animate-float z-50 group p-4"
            >
                {renderItemContent()}
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); onFindItem(heroItem.id); }}
              className="hidden md:flex absolute w-24 h-24 items-center justify-center text-lily-pale hover:text-lantern-red transition-all cursor-pointer animate-float z-50 group p-4"
              style={{ top: heroItem.top, left: heroItem.left }}
            >
                {renderItemContent()}
            </button>
          </>
        )}
        */}

        {/* --- LOGO SECTION --- 
            Mobile: MOVED inside Content Box below
            Desktop: Right Side (Fixed)
        */}
        {ASSETS.logo && (
          <div className="hidden md:flex absolute top-24 left-1/2 -translate-x-1/2 md:top-[30%] md:right-16 md:left-auto md:translate-x-0 z-20 flex-col items-center md:items-end pointer-events-none mix-blend-screen opacity-90 w-full md:w-auto px-4">
              <div className="relative w-48 md:w-[550px]">
                  <img 
                      src={ASSETS.logo} 
                      alt="Logo" 
                      className="w-full h-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] filter brightness-110 contrast-125" 
                  />
                  <div className="absolute inset-0 bg-lantern-red/20 mix-blend-color-dodge opacity-0 animate-ping"></div>
              </div>
          </div>
        )}

        {/* --- Content Box ---
            Mobile: Absolute Bottom, Logo + Text Stacked
            Desktop: Absolute Bottom-Left, Boxed
        */}
        <div className="absolute bottom-0 left-0 w-full md:w-auto md:bottom-32 md:left-0 z-30 flex justify-center md:justify-start pointer-events-auto">
           <div className="w-full md:max-w-2xl 
                           bg-gradient-to-t from-[#050607] via-[#050607]/80 to-transparent 
                           md:bg-transparent md:from-transparent md:to-transparent
                           pt-24 pb-12 px-6
                           md:p-0
                           flex flex-col items-center md:items-start text-center md:text-left">
              
              {/* Mobile Logo: Inserted here for cohesive bottom layout */}
              {ASSETS.logo && (
                <div className="md:hidden w-48 mb-4 relative z-10 animate-fade-in opacity-100 mix-blend-screen">
                    <img 
                        src={ASSETS.logo} 
                        alt="Logo" 
                        className="w-full h-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] filter brightness-110 contrast-125" 
                    />
                </div>
              )}

              <div className="w-full md:p-12 md:border-l-4 md:border-lantern-red/60 md:bg-[#1D1F21]/60 md:backdrop-blur-sm relative group">
                  <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  <div className="mb-4 md:mb-8 relative flex flex-col md:block items-center md:items-baseline">
                    <span className="block text-lantern-red font-display font-black tracking-[0.2em] text-5xl md:text-[8rem] leading-none drop-shadow-red-glow glitch opacity-90" data-text="2026">
                      2026
                    </span>
                    <span className="block text-mist-grey font-mono font-bold tracking-[0.3em] md:tracking-[0.6em] text-sm md:text-3xl mt-2 md:mt-2 md:ml-1 opacity-80">
                      {t.hero.comingSoon}
                    </span>
                  </div>
                  
                  <p className="text-lily-pale font-serif leading-loose text-sm md:text-2xl shadow-black drop-shadow-md mb-8 md:mb-12 font-medium tracking-wide max-w-sm md:max-w-full mx-auto md:mx-0">
                    {t.hero.description_1}<br/>
                    {t.hero.description_2}<br/>
                    {t.hero.description_3}<br/>
                    {t.hero.description_4}<br className="md:hidden" />
                    <span className="text-lantern-red font-bold font-display text-base md:text-3xl md:mx-2 border-b-2 border-lantern-red inline-block mt-4 md:mt-0">{t.hero.description_punchline}</span>
                  </p>
                  
                  <div className="flex flex-col md:flex-row gap-8 w-full md:w-auto items-center md:items-start">
                    <button onClick={() => setShowTrailer(true)} className="group flex items-center gap-4 text-base md:text-lg tracking-widest text-moon-silver hover:text-lantern-red transition-colors">
                      <span className="w-12 h-12 md:w-16 md:h-16 border border-mist-grey/50 flex items-center justify-center group-hover:border-lantern-red group-hover:bg-lantern-red/10 transition-all rounded-full md:rounded-none">
                        <i className="fa-solid fa-play ml-1 text-xl md:text-2xl"></i>
                      </span>
                      <span className="border-b border-transparent group-hover:border-lantern-red pb-1 font-display font-bold">{t.hero.watchTrailer}</span>
                    </button>
                  </div>
              </div>
           </div>
        </div>

      </section>
      {showTrailer && <TrailerModal onClose={() => setShowTrailer(false)} />}
    </>
  );
};

export default Hero;
