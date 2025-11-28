
import React from 'react';
import { ASSETS, ITEMS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Gameplay: React.FC<{ foundItems: string[], onFindItem: (id: string) => void }> = ({ foundItems, onFindItem }) => {
  const item = ITEMS.find(i => i.section === 'gameplay');
  const isFound = item && foundItems.includes(item.id);
  const { t } = useLanguage();

  const cards = [
    { ...t.gameplay.card1, icon: 'fa-map-location-dot', img: ASSETS.gameplayExplore },
    { ...t.gameplay.card2, icon: 'fa-eye', img: ASSETS.gameplaySight },
    { ...t.gameplay.card3, icon: 'fa-person-running', img: ASSETS.gameplaySurvival },
  ];

  return (
    <section id="gameplay" className="py-20 md:py-32 bg-[#0c0d0e] text-moon-silver relative border-t border-lily-shadow shadow-[inset_0_0_100px_black]">
       <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16 md:mb-24 text-lily-pale tracking-[0.3em] drop-shadow-lg opacity-90">{t.gameplay.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
             {cards.map((card, idx) => (
                <div key={idx} className="group relative h-[450px] md:h-[600px] bg-[#0c0d0e] border border-ui-blue-grey/20 overflow-hidden hover:border-lantern-red/50 transition-colors duration-500 flex flex-col shadow-2xl">
                   {/* Image Background - High Visibility Update */}
                   <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
                        <img 
                          src={card.img} 
                          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" 
                          alt={card.title} 
                        />
                        {/* Subtle dark overlay for text contrast, fades on hover */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
                      </div>
                   </div>
                   
                   {/* Gradient for text readability */}
                   <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 bg-gradient-to-t from-[#0c0d0e] via-[#0c0d0e]/90 to-transparent pointer-events-none">
                      {/* Icon: Hidden on mobile by default to save space, shown on desktop hover */}
                      <div className="mb-auto opacity-40 group-hover:opacity-100 transition-opacity duration-500 transform -translate-y-4 group-hover:translate-y-0 hidden md:block">
                         <i className={`fa-solid ${card.icon} text-6xl text-lantern-red drop-shadow-lg`}></i>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold tracking-[0.2em] mb-2 md:mb-4 font-display text-lily-pale drop-shadow-md">{card.title}</h3>
                      <span className="text-[10px] md:text-xs font-mono text-lantern-red tracking-[0.3em] mb-4 md:mb-8 block font-bold border-l-2 border-lantern-red pl-3">{card.sub}</span>
                      
                      {/* Description: Always visible on mobile, faint on desktop until hover */}
                      <p className="text-mist-grey text-base md:text-lg font-sans leading-loose border-t border-gray-700/50 pt-4 md:pt-8 group-hover:border-lantern-red/50 transition-colors text-shadow-sm opacity-90 md:opacity-70 md:group-hover:opacity-100">
                        {card.desc}
                      </p>
                   </div>
                </div>
             ))}
          </div>
          
          {!isFound && item && (
             <div className="absolute right-6 bottom-12 md:right-20 md:bottom-40 z-20">
                <button onClick={() => onFindItem(item.id)} className="text-mist-grey hover:text-white transition-colors p-4 md:p-6 transform hover:scale-110 opacity-90 hover:opacity-100 relative group" title="發現碎片">
                   <div className="absolute inset-0 bg-lantern-red/20 rounded-full animate-ping blur-md"></div>
                   <div className="absolute inset-0 border-2 border-lantern-red rounded-full opacity-60 animate-pulse"></div>
                   <i className={`fa-solid ${item.icon} text-3xl md:text-5xl -rotate-12 drop-shadow-[0_0_10px_rgba(192,53,43,0.8)] relative z-10 text-lily-pale`}></i>
                   <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-lantern-red font-bold tracking-widest bg-black/80 px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      {t.gameplay.pickupLabel}
                   </div>
                </button>
             </div>
          )}
       </div>
    </section>
  );
};

export default Gameplay;
