
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
      <section id="hero" className="relative w-full h-screen min-h-[600px] overflow-hidden bg-midnight-fog select-none">
        {/* Background Image - Optimized for full color art */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
           {/* Removed grayscale and mix-blend-overlay to let the red lanterns and moon shine */}
           <img 
             src={ASSETS.heroBg} 
             className="w-full h-full object-cover opacity-80 animate-ken-burns" 
             alt="Concept Art" 
           />
           
           {/* Gradient Overlay for Text Readability - Adjusted to be darker at bottom/left */}
           <div className="absolute inset-0 bg-gradient-to-t from-[#1D1F21] via-[#1D1F21]/40 to-transparent mix-blend-multiply"></div>
           <div className="absolute inset-0 bg-gradient-to-r from-[#1D1F21]/80 via-transparent to-transparent"></div>
           
           {/* Fog Layers - Reduced opacity slightly to not wash out the art */}
           <div className="absolute inset-0 bg-repeat-x animate-fog opacity-30 mix-blend-hard-light" style={{ backgroundImage: `url(${ASSETS.fog1})` }}></div>
           <div className="absolute inset-0 bg-repeat-x animate-fog-slow opacity-20 mix-blend-screen" style={{ backgroundImage: `url(${ASSETS.fog2})` }}></div>
           
           {/* Vignette */}
           <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.8)]"></div>
        </div>

        {/* Content */}
        <div className="absolute bottom-20 md:bottom-32 left-0 w-full px-6 md:px-24 pointer-events-auto z-10 flex justify-center md:justify-start">
           <div className="p-6 md:p-12 border-l-0 md:border-l-4 border-lantern-red/60 bg-[#1D1F21]/60 backdrop-blur-sm max-w-2xl w-full shadow-2xl">
              <div className="mb-4 md:mb-8">
                <span className="block text-lantern-red font-display font-black tracking-[0.2em] text-4xl md:text-[8rem] leading-none drop-shadow-red-glow glitch opacity-90" data-text="2026">
                  2026
                </span>
                <span className="block text-mist-grey font-mono font-bold tracking-[0.4em] md:tracking-[0.6em] text-sm md:text-3xl mt-2 ml-1 opacity-80">
                  {t.hero.comingSoon}
                </span>
              </div>
              <p className="text-lily-pale font-serif leading-loose text-base md:text-2xl shadow-black drop-shadow-md mb-8 md:mb-12 font-medium tracking-wide">
                {t.hero.description_1}<br/>
                {t.hero.description_2}<br/>
                {t.hero.description_3}<br/>
                {t.hero.description_4}<br className="md:hidden" />
                <span className="text-lantern-red font-bold font-display text-lg md:text-3xl md:mx-2 border-b-2 border-lantern-red inline-block mt-2 md:mt-0">{t.hero.description_punchline}</span>
              </p>
              <div className="flex flex-col md:flex-row gap-8">
                <button onClick={() => setShowTrailer(true)} className="group flex items-center gap-4 text-base md:text-lg tracking-widest text-moon-silver hover:text-lantern-red transition-colors">
                  <span className="w-12 h-12 md:w-16 md:h-16 border border-mist-grey/50 flex items-center justify-center group-hover:border-lantern-red group-hover:bg-lantern-red/10 transition-all">
                    <i className="fa-solid fa-play ml-1 text-xl md:text-2xl"></i>
                  </span>
                  <span className="border-b border-transparent group-hover:border-lantern-red pb-1 font-display font-bold">{t.hero.watchTrailer}</span>
                </button>
              </div>
           </div>
        </div>

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
      </section>
      {showTrailer && <TrailerModal onClose={() => setShowTrailer(false)} />}
    </>
  );
};

export default Hero;
