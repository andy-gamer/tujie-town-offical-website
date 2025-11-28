
import React, { useState } from 'react';
import { ASSETS, ITEMS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Town: React.FC<{ foundItems: string[], onFindItem: (id: string) => void }> = ({ foundItems, onFindItem }) => {
  const [activeRule, setActiveRule] = useState<number | null>(null);
  const townItem = ITEMS.find(i => i.section === 'town');
  const isFound = townItem && foundItems.includes(townItem.id);
  const { t } = useLanguage();

  const rules = [
    t.town.rule1,
    t.town.rule2,
    t.town.rule3,
    "RULE_4_PLACEHOLDER" // Handled specially below
  ];

  // Logic to handle both hover (desktop) and click (mobile)
  const handleRuleInteraction = (idx: number) => {
    if (activeRule === idx) {
        setActiveRule(null); // Toggle off if clicked again
    } else {
        setActiveRule(idx);
    }
  };

  return (
    <section id="town" className="relative py-12 md:py-48 bg-valley-teal overflow-hidden">
      {/* Texture Overlay - Wood (Existing) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url(${ASSETS.textureWood})` }}></div>
      
      {/* Texture Overlay - Paper (New) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-repeat" style={{ backgroundImage: `url(${ASSETS.texturePaper})` }}></div>

      <div className="absolute inset-0 bg-gradient-to-b from-midnight-fog via-valley-teal to-midnight-fog/90 mix-blend-overlay"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
        <div className="relative w-full max-w-7xl flex flex-col lg:flex-row gap-0 shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
          {/* Top Label */}
          <div className="absolute -top-8 md:-top-10 left-0 bg-lily-pale px-6 md:px-8 py-1 md:py-2 z-0 border border-mist-grey shadow-lg transform -rotate-1">
             <span className="text-ui-dim-red font-mono text-sm md:text-base tracking-[0.2em] font-bold">{t.town.topSecret}</span>
          </div>

          {/* Left Panel: Image & World View */}
          <div className="w-full lg:w-5/12 bg-lily-pale border-r border-mist-grey/30 p-6 md:p-14 relative flex flex-col shadow-[inset_0_0_60px_rgba(0,0,0,0.1)]" style={{ backgroundImage: `url(${ASSETS.texturePaper})` }}>
             <div className="relative z-10 w-full mx-auto transform rotate-1 hover:rotate-0 duration-700 mb-8 md:mb-12 group">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 md:w-32 h-6 bg-mist-grey/30 rotate-1 shadow-sm z-20 backdrop-blur-sm"></div>
                <div className="bg-white p-2 md:p-3 pb-8 md:pb-12 shadow-lg border border-gray-200">
                  <img src={ASSETS.townImage} className="w-full h-56 md:h-72 object-cover grayscale contrast-125 sepia-[0.3] brightness-90 group-hover:sepia-[0.1] transition-all" alt="Teahouse" />
                  <div className="absolute bottom-2 md:bottom-3 right-4 text-forgotten-ink font-mono font-bold text-[10px] md:text-xs tracking-widest opacity-70">{t.town.fig1}</div>
                </div>
             </div>
             <div className="relative z-10 mt-2 md:mt-4 flex flex-col h-full">
                <h3 className="text-2xl md:text-4xl font-display font-bold text-valley-teal mb-6 md:mb-8 border-b-2 border-lantern-red/50 pb-4 inline-block tracking-widest">{t.town.aboutTitle}</h3>
                <p className="font-serif text-forgotten-ink leading-relaxed text-justify text-base md:text-lg font-medium">
                  {t.town.aboutDesc_1}<br/>
                  {t.town.aboutDesc_2}<br/>
                  {t.town.aboutDesc_3}<br/>
                  {t.town.aboutDesc_4}<br/>
                  {t.town.aboutDesc_5}
                </p>
                
                {/* Revised Quote Design: Left aligned */}
                <div className="mt-6 self-start relative py-2 w-full">
                   <div className="text-left font-display font-bold text-lg md:text-2xl text-valley-teal tracking-[0.2em] animate-ghost-dark leading-relaxed">
                     {t.town.quote}
                   </div>
                </div>
             </div>
          </div>

          {/* Right Panel: Survival Guide */}
          <div className="w-full lg:w-7/12 bg-[#F9F7F5] p-6 md:p-16 relative border-t lg:border-t-0 lg:border-l border-mist-grey shadow-[inset_0_0_80px_rgba(0,0,0,0.05)] animate-survival-glow" style={{ backgroundImage: `url(${ASSETS.texturePaper})` }}>
             <div className="absolute top-0 right-4 md:right-10 w-24 h-24 md:w-32 md:h-32 opacity-10 pointer-events-none mix-blend-multiply">
                 <div className="w-full h-full border-4 border-ui-dim-red rounded-full flex items-center justify-center transform rotate-12">
                     <span className="text-ui-dim-red font-display font-black text-base md:text-xl text-center" dangerouslySetInnerHTML={{ __html: t.town.taboo.replace('\n', '<br/>') }}></span>
                 </div>
             </div>
             
             <div className="h-full relative z-10 flex flex-col">
                <div className="flex justify-between items-end border-b-4 border-double border-valley-teal pb-4 md:pb-6 mb-6 md:mb-10 mt-4 md:mt-0">
                  <h3 className="text-2xl md:text-5xl font-display font-bold text-valley-teal tracking-[0.2em]">{t.town.guideTitle}</h3>
                  <span className="font-mono text-xs md:text-base text-ui-dim-red font-bold tracking-widest">{t.town.guideVer}</span>
                </div>
                
                {/* Rules List */}
                <ul className="space-y-4 md:space-y-6 font-display text-valley-teal text-base md:text-2xl pl-1 md:pl-2">
                  {rules.map((rule, idx) => (
                    <li 
                      key={idx}
                      onClick={() => handleRuleInteraction(idx)}
                      onMouseEnter={() => setActiveRule(idx)} 
                      onMouseLeave={() => setActiveRule(null)} 
                      className={`relative p-2 md:p-3 transition-all duration-300 ease-out cursor-pointer tap-highlight-transparent flex items-start gap-3 md:gap-4
                        hover:scale-[1.02] origin-left
                        ${idx === 3 ? 'group' : 'hover:text-lantern-red'}
                      `}
                    >
                      <span className={`font-black font-mono text-lg md:text-2xl mt-[-2px] transition-colors duration-300 ${activeRule === idx ? 'text-lantern-red opacity-100' : 'opacity-60'}`}>{idx + 1}.</span>
                      
                      {idx === 3 ? (
                          <div className="relative inline-block w-full">
                            {/* Base text with hover interactions */}
                            <div className="transition-all duration-300 flex flex-wrap items-center">
                               <span>{t.town.rule4_prefix}</span>
                               <span className={`mx-1 px-1 transition-all duration-300 relative inline-block ${activeRule === 3 ? 'text-lantern-red font-black scale-110 drop-shadow-red-glow' : ''}`}>
                                 {t.town.rule4_highlight}
                               </span>
                               <span>{t.town.rule4_suffix}</span>
                               {/* Hover Hint */}
                               <span className={`ml-3 text-sm md:text-base text-lantern-red opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse flex items-center gap-1`}>
                                 <i className="fa-solid fa-hand-pointer"></i>
                               </span>
                            </div>
                            
                            {/* Overlay Interaction (SHE IS WATCHING YOU) */}
                            <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-200 ${activeRule === 3 ? 'opacity-100' : 'opacity-0'}`}>
                               {/* Background Eye - Adjusted for mobile */}
                               <i className="fa-solid fa-eye absolute right-0 md:right-10 text-lantern-red/10 text-6xl md:text-8xl animate-pulse transform rotate-12"></i>
                               
                               {/* Glitchy Text Overlay - Fixed Mobile Positioning */}
                               <div className="absolute top-[-10px] left-0 md:top-auto md:left-20 md:-mt-10 z-20 w-full">
                                  <div className="inline-block bg-black text-lantern-red text-[10px] md:text-sm font-mono font-bold px-2 py-1 md:px-3 tracking-widest glitch border border-lantern-red shadow-[0_0_15px_rgba(192,53,43,0.5)] transform -rotate-2 whitespace-nowrap" data-text={t.town.rule4_hover}>
                                     {t.town.rule4_hover}
                                  </div>
                               </div>
                            </div>
                          </div>
                      ) : (
                          <span>{rule}</span>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Wishlist CTA inside Survival Guide */}
                <div className="mt-8 md:mt-auto pt-6 md:pt-8 border-t border-mist-grey/30 flex flex-col items-center justify-center text-center">
                   <p className="font-serif text-valley-teal/80 text-sm md:text-base font-bold mb-3 md:mb-4">
                     {t.town.notReady}
                   </p>
                   <a 
                     href="https://store.steampowered.com/" 
                     target="_blank" 
                     rel="noreferrer" 
                     className="bg-lantern-red hover:bg-[#a02a21] text-moon-silver px-6 py-2 md:px-8 md:py-3 text-sm md:text-base font-bold shadow-lg hover:shadow-xl transition-all tracking-widest flex items-center gap-2 md:gap-3 rounded-sm group w-full md:w-auto justify-center"
                   >
                     <i className="fa-brands fa-steam text-lg md:text-xl group-hover:scale-110 transition-transform"></i>
                     {t.nav.wishlist}
                   </a>
                </div>

                {!isFound && townItem && (
                  <button onClick={() => onFindItem(townItem.id)} className="absolute bottom-4 right-4 md:bottom-32 md:right-10 transform rotate-12 hover:rotate-0 hover:scale-105 transition-all z-30 group" title={t.town.pickupTicket}>
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-lantern-red/30 animate-ping opacity-75"></div>
                      <div className="bg-[#e8e4dc] border-2 border-lantern-red/50 p-2 md:p-4 shadow-[0_0_20px_rgba(192,53,43,0.5)] flex flex-col items-center gap-1 md:gap-2 w-24 h-16 md:w-32 md:h-20 justify-center group-hover:bg-white transition-colors relative overflow-hidden z-10 opacity-90 group-hover:opacity-100 ring-2 ring-lantern-red ring-offset-2 ring-offset-valley-teal">
                         <div className="absolute top-0 left-0 w-full h-1 md:h-2 bg-valley-teal"></div>
                         <div className="flex items-center gap-2">
                             <i className={`fa-solid ${townItem.icon} text-lantern-red text-base md:text-xl animate-bounce`}></i> 
                             <span className="font-display font-bold text-valley-teal text-sm md:text-lg">{t.town.pickupTicket}</span>
                         </div>
                         <span className="text-[8px] md:text-[10px] font-mono text-forgotten-ink tracking-widest">{t.town.pickupTicketSub}</span>
                      </div>
                    </div>
                  </button>
                )}
             </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes survivalGlow {
          0%, 100% {
            box-shadow: inset 0 0 80px rgba(0,0,0,0.05), 0 0 0 rgba(192,53,43,0);
            border-color: rgba(212, 217, 221, 0.3);
          }
          50% {
            box-shadow: inset 0 0 80px rgba(0,0,0,0.05), 0 0 25px rgba(192,53,43,0.2);
            border-color: rgba(192,53,43,0.4);
          }
        }
        .animate-survival-glow {
          animation: survivalGlow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Town;
