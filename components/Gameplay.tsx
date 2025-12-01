
import React from 'react';
import { ASSETS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Gameplay: React.FC = () => {
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
                   
                   {/* Gradient Mask - Only bottom half */}
                   <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-[#0c0d0e] via-[#0c0d0e]/95 to-transparent pointer-events-none"></div>

                   {/* Content */}
                   <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 pointer-events-none">
                      {/* Icon: Hidden on mobile by default to save space, shown on desktop hover */}
                      <div className="mb-auto opacity-40 group-hover:opacity-100 transition-opacity duration-500 transform -translate-y-4 group-hover:translate-y-0 hidden md:block">
                         <i className={`fa-solid ${card.icon} text-6xl text-lantern-red drop-shadow-lg`}></i>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold tracking-[0.2em] mb-2 md:mb-4 font-display text-lily-pale drop-shadow-md">{card.title}</h3>
                      <span className="text-[10px] md:text-xs font-mono text-lantern-red tracking-[0.3em] mb-4 md:mb-8 block font-bold border-l-2 border-lantern-red pl-3">{card.sub}</span>
                      
                      {/* Description */}
                      <p className="text-mist-grey text-base md:text-lg font-sans leading-loose border-t border-gray-700/50 pt-4 md:pt-8 group-hover:border-lantern-red/50 transition-colors text-shadow-sm opacity-90 md:opacity-70 md:group-hover:opacity-100">
                        {card.desc}
                      </p>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};

export default Gameplay;
