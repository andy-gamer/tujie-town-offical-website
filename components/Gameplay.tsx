
import React from 'react';
import { ASSETS, ITEMS } from '../constants';

const Gameplay: React.FC<{ foundItems: string[], onFindItem: (id: string) => void }> = ({ foundItems, onFindItem }) => {
  const item = ITEMS.find(i => i.section === 'gameplay');
  const isFound = item && foundItems.includes(item.id);

  const cards = [
    { title: '懷舊探索', sub: 'EXPLORATION', desc: '穿梭於 1970 年代的台灣街景、廢棄糖廠與老式車站。', icon: 'fa-map-location-dot', img: ASSETS.gameplayExplore },
    { title: '看取能力', sub: 'THE SIGHT', desc: '觸摸舊物讀取殘留的記憶碎片，還原被掩蓋的真相。', icon: 'fa-eye', img: ASSETS.gameplaySight },
    { title: '異界生存', sub: 'SURVIVAL', desc: '當月亮變色，面對擬態成人類的「花倀」，利用弱點求生。', icon: 'fa-person-running', img: ASSETS.gameplaySurvival },
  ];

  return (
    <section id="gameplay" className="py-20 md:py-32 bg-[#0c0d0e] text-moon-silver relative border-t border-lily-shadow shadow-[inset_0_0_100px_black]">
       <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16 md:mb-24 text-lily-pale tracking-[0.3em] drop-shadow-lg opacity-90">核心玩法</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
             {cards.map((card, idx) => (
                <div key={idx} className="group relative h-[450px] md:h-[600px] bg-valley-teal border border-ui-blue-grey/20 overflow-hidden hover:border-lantern-red/50 transition-colors duration-500 flex flex-col shadow-2xl">
                   {/* Image Background with Filters */}
                   <div className="absolute inset-0 opacity-40 group-hover:opacity-20 transition-opacity duration-500">
                      <img src={card.img} className="w-full h-full object-cover grayscale contrast-125 brightness-75" alt={card.title} />
                      <div className="absolute inset-0 bg-valley-teal mix-blend-multiply"></div>
                   </div>
                   
                   <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 bg-gradient-to-t from-[#0c0d0e] via-valley-teal/90 to-transparent">
                      <div className="mb-auto opacity-20 group-hover:opacity-100 transition-opacity duration-500 transform -translate-y-4 group-hover:translate-y-0 hidden md:block">
                         <i className={`fa-solid ${card.icon} text-6xl text-lantern-red`}></i>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold tracking-[0.2em] mb-2 md:mb-4 font-display text-lily-pale">{card.title}</h3>
                      <span className="text-[10px] md:text-xs font-mono text-lantern-red tracking-[0.3em] mb-4 md:mb-8 block font-bold border-l-2 border-lantern-red pl-3">{card.sub}</span>
                      
                      <p className="text-mist-grey text-base md:text-lg font-sans leading-loose border-t border-gray-800 pt-4 md:pt-8 group-hover:border-lantern-red/30 transition-colors">
                        {card.desc}
                      </p>
                   </div>
                </div>
             ))}
          </div>
          
          {!isFound && item && (
             <div className="absolute right-10 bottom-20 md:right-20 md:bottom-40 z-20">
                <button onClick={() => onFindItem(item.id)} className="text-mist-grey hover:text-white transition-colors p-4 md:p-6 transform hover:scale-110 opacity-90 hover:opacity-100 relative group" title="發現碎片">
                   <div className="absolute inset-0 bg-lantern-red/20 rounded-full animate-ping blur-md"></div>
                   <div className="absolute inset-0 border-2 border-lantern-red rounded-full opacity-60 animate-pulse"></div>
                   <i className={`fa-solid ${item.icon} text-3xl md:text-5xl -rotate-12 drop-shadow-[0_0_10px_rgba(192,53,43,0.8)] relative z-10 text-lily-pale`}></i>
                   <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-lantern-red font-bold tracking-widest bg-black/80 px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      點擊拾取
                   </div>
                </button>
             </div>
          )}
       </div>
    </section>
  );
};

export default Gameplay;
