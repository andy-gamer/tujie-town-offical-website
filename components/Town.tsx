
import React, { useState } from 'react';
import { ASSETS, ITEMS } from '../constants';

const Town: React.FC<{ foundItems: string[], onFindItem: (id: string) => void }> = ({ foundItems, onFindItem }) => {
  const [activeRule, setActiveRule] = useState<number | null>(null);
  const townItem = ITEMS.find(i => i.section === 'town');
  const isFound = townItem && foundItems.includes(townItem.id);

  const rules = [
    "看到蝸牛請繞道而行，切勿傷害。",
    "太陽下山後，請勿在戶外逗留。",
    "若看見不存在的車站，請立即閉上眼睛。",
    "絕對不要把「九姑娘花」帶出鎮外。"
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
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url(${ASSETS.textureWood})` }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-fog via-valley-teal to-midnight-fog/90 mix-blend-overlay"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
        <div className="relative w-full max-w-7xl flex flex-col lg:flex-row gap-0 shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
          {/* Top Label */}
          <div className="absolute -top-8 md:-top-10 left-0 bg-lily-pale px-6 md:px-8 py-1 md:py-2 z-0 border border-mist-grey shadow-lg transform -rotate-1">
             <span className="text-ui-dim-red font-mono text-sm md:text-base tracking-[0.2em] font-bold">TOP SECRET // 檔案</span>
          </div>

          {/* Left Panel: Image & World View */}
          <div className="w-full lg:w-5/12 bg-lily-pale border-r border-mist-grey/30 p-6 md:p-14 relative flex flex-col shadow-[inset_0_0_60px_rgba(0,0,0,0.1)]" style={{ backgroundImage: `url(${ASSETS.texturePaper})` }}>
             <div className="relative z-10 w-full mx-auto transform rotate-1 hover:rotate-0 duration-700 mb-8 md:mb-12 group">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 md:w-32 h-6 bg-mist-grey/30 rotate-1 shadow-sm z-20 backdrop-blur-sm"></div>
                <div className="bg-white p-2 md:p-3 pb-8 md:pb-12 shadow-lg border border-gray-200">
                  <img src={ASSETS.townImage} className="w-full h-56 md:h-72 object-cover grayscale contrast-125 sepia-[0.3] brightness-90 group-hover:sepia-[0.1] transition-all" alt="Teahouse" />
                  <div className="absolute bottom-2 md:bottom-3 right-4 text-forgotten-ink font-mono font-bold text-[10px] md:text-xs tracking-widest opacity-70">FIG. 1: THE TEA HOUSE</div>
                </div>
             </div>
             <div className="relative z-10 mt-2 md:mt-4 flex flex-col h-full">
                <h3 className="text-2xl md:text-4xl font-display font-bold text-valley-teal mb-6 md:mb-8 border-b-2 border-lantern-red/50 pb-4 inline-block tracking-widest">關於「土界鎮」</h3>
                <p className="font-serif text-forgotten-ink leading-relaxed text-justify text-base md:text-lg font-medium">
                  土界鎮是一座被山霧包住的小鎮。<br/>
                  三面環山，一面臨河，老街與廢鐵道交錯在谷地裡。<br/>
                  白天一切都顯得過於平靜；<br/>
                  到了夜晚，整個小鎮彷彿變了模樣。<br/>
                  鎮民從不說明原因，只會提醒：
                </p>
                
                {/* Revised Quote Design: Vertical Traditional Style */}
                <div className="mt-8 self-center relative py-2">
                   <div className="flex flex-col items-center">
                     <div className="vertical-text font-display font-black text-2xl md:text-4xl text-lantern-red tracking-[0.3em] leading-tight opacity-90 drop-shadow-sm border-r-2 border-lantern-red/30 pr-4">
                       「遵守規矩，你就能平安。」
                     </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Right Panel: Survival Guide */}
          <div className="w-full lg:w-7/12 bg-[#F9F7F5] p-6 md:p-16 relative border-t lg:border-t-0 lg:border-l border-mist-grey shadow-[inset_0_0_80px_rgba(0,0,0,0.05)]" style={{ backgroundImage: `url(${ASSETS.texturePaper})` }}>
             <div className="absolute top-0 right-4 md:right-10 w-24 h-24 md:w-32 md:h-32 opacity-10 pointer-events-none mix-blend-multiply">
                 <div className="w-full h-full border-4 border-ui-dim-red rounded-full flex items-center justify-center transform rotate-12">
                     <span className="text-ui-dim-red font-display font-black text-base md:text-xl text-center">禁忌<br/>TABOO</span>
                 </div>
             </div>
             
             <div className="h-full relative z-10 flex flex-col">
                <div className="flex justify-between items-end border-b-4 border-double border-valley-teal pb-4 md:pb-6 mb-6 md:mb-10 mt-4 md:mt-0">
                  <h3 className="text-2xl md:text-5xl font-display font-bold text-valley-teal tracking-[0.2em]">鎮民生存指南</h3>
                  <span className="font-mono text-xs md:text-base text-ui-dim-red font-bold tracking-widest">VER. 2.0</span>
                </div>
                
                {/* Rules List */}
                <ol className="space-y-2 md:space-y-4 font-display text-valley-teal text-base md:text-2xl list-decimal list-inside pl-1 md:pl-2">
                  {rules.map((rule, idx) => (
                    <li 
                      key={idx}
                      onClick={() => handleRuleInteraction(idx)}
                      onMouseEnter={() => setActiveRule(idx)} 
                      onMouseLeave={() => setActiveRule(null)} 
                      className={`relative p-2 md:p-3 transition-all duration-300 cursor-pointer tap-highlight-transparent
                        ${idx === 3 ? 'group' : 'hover:text-lantern-red'}
                      `}
                    >
                      {idx === 3 ? (
                          <div className="relative inline-block whitespace-nowrap">
                            <span className={`relative z-10 transition-all duration-300 ${activeRule === 3 ? 'text-lantern-red tracking-widest blur-[0.5px]' : ''}`}>
                               絕對不要把
                               <span className={`inline-block mx-1 transition-all duration-100 ${activeRule === 3 ? 'text-red-600 scale-110 font-black animate-pulse' : 'text-valley-teal'}`}>
                                 「九姑娘花」
                               </span>
                               帶出鎮外。
                            </span>
                            
                            {/* Visual Strike-through / Blood effect on hover */}
                            <div className={`absolute top-1/2 left-0 w-full h-[2px] bg-red-800 transition-all duration-500 origin-left ${activeRule === 3 ? 'scale-x-100 opacity-80' : 'scale-x-0 opacity-0'}`}></div>
                            
                            {/* "Watching" subtitle that appears below */}
                            <div className={`absolute -bottom-6 left-0 text-xs md:text-sm text-red-700 font-mono font-bold tracking-[0.3em] transition-opacity duration-300 ${activeRule === 3 ? 'opacity-100' : 'opacity-0'}`}>
                               SHE IS WATCHING YOU
                            </div>
                          </div>
                      ) : (
                          <span>{rule}</span>
                      )}
                    </li>
                  ))}
                </ol>

                {/* Wishlist CTA inside Survival Guide */}
                <div className="mt-8 md:mt-auto pt-6 md:pt-8 border-t border-mist-grey/30 flex flex-col items-center justify-center text-center">
                   <p className="font-serif text-valley-teal/80 text-sm md:text-base font-bold mb-3 md:mb-4">
                     還沒準備好遵守這些規矩嗎？
                   </p>
                   <a 
                     href="https://store.steampowered.com/" 
                     target="_blank" 
                     rel="noreferrer" 
                     className="bg-lantern-red hover:bg-[#a02a21] text-moon-silver px-6 py-2 md:px-8 md:py-3 text-sm md:text-base font-bold shadow-lg hover:shadow-xl transition-all tracking-widest flex items-center gap-2 md:gap-3 rounded-sm group"
                   >
                     <i className="fa-brands fa-steam text-lg md:text-xl group-hover:scale-110 transition-transform"></i>
                     加入願望清單
                   </a>
                </div>

                {!isFound && townItem && (
                  <button onClick={() => onFindItem(townItem.id)} className="absolute bottom-4 right-4 md:bottom-32 md:right-10 transform rotate-12 hover:rotate-0 hover:scale-105 transition-all z-30 group" title="撿起車票">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-lantern-red/30 animate-ping opacity-75"></div>
                      <div className="bg-[#e8e4dc] border-2 border-lantern-red/50 p-2 md:p-4 shadow-[0_0_20px_rgba(192,53,43,0.5)] flex flex-col items-center gap-1 md:gap-2 w-24 h-16 md:w-32 md:h-20 justify-center group-hover:bg-white transition-colors relative overflow-hidden z-10 opacity-90 group-hover:opacity-100 ring-2 ring-lantern-red ring-offset-2 ring-offset-valley-teal">
                         <div className="absolute top-0 left-0 w-full h-1 md:h-2 bg-valley-teal"></div>
                         <div className="flex items-center gap-2">
                             <i className={`fa-solid ${townItem.icon} text-lantern-red text-base md:text-xl animate-bounce`}></i> 
                             <span className="font-display font-bold text-valley-teal text-sm md:text-lg">車票</span>
                         </div>
                         <span className="text-[8px] md:text-[10px] font-mono text-forgotten-ink tracking-widest">TICKET</span>
                      </div>
                    </div>
                  </button>
                )}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Town;
