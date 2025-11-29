
import React from 'react';
import { ASSETS, ITEMS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const MonsterIndex: React.FC<{ foundItems: string[] }> = ({ foundItems }) => {
  const allFound = foundItems.length === ITEMS.length;
  const progress = Math.round((foundItems.length / ITEMS.length) * 100);
  const { t } = useLanguage();
  const steamUrl = "https://store.steampowered.com/app/4209230/?utm_source=officialsite&utm_campaign=tujietown";
  
  return (
    <section id="collection" className="py-24 md:py-40 bg-[#151719] relative overflow-hidden border-t border-lily-shadow flex justify-center">
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url(${ASSETS.textureWood})` }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

      <div className="w-full max-w-[95%] md:max-w-[90%] relative z-10">
        <div className="text-center mb-12 md:mb-20">
           <h2 className="text-2xl md:text-5xl font-display font-bold tracking-[0.2em] text-lily-pale mb-6 md:mb-8 drop-shadow-lg">{t.monster.title}</h2>
           <p className="text-white/60 font-serif text-base md:text-xl max-w-3xl mx-auto leading-loose mb-8 md:mb-10 opacity-70 px-4">
             {t.monster.subtitle}
           </p>
        </div>

        {/* File Folder Container - Darker, Older Paper Look */}
        <div className="relative bg-[#5c554b] p-1 md:p-2 rounded-sm shadow-[0_50px_100px_rgba(0,0,0,0.9)] mx-auto w-full max-w-[1200px] transform md:rotate-[0.5deg]">
           {/* Tab */}
           <div className="absolute -top-8 md:-top-10 left-4 md:left-10 bg-[#5c554b] px-8 md:px-12 py-2 md:py-3 rounded-t-md border-t border-l border-r border-[#4a443b] shadow-sm z-0">
              <span className="text-red-900/60 font-mono font-bold tracking-widest text-sm md:text-lg">{t.monster.caseId}</span>
           </div>
           
           <div className="bg-[#c2b59b] p-6 md:p-12 relative overflow-hidden min-h-[auto] md:min-h-[700px] shadow-[inset_0_0_100px_rgba(0,0,0,0.3)] border border-[#4a443b]" style={{ backgroundImage: `url(${ASSETS.texturePaper})` }}>
              <div className="absolute inset-0 bg-orange-900/10 mix-blend-multiply pointer-events-none"></div>

              {!allFound && (
                 // Locked State: Archive / Sealed Document Aesthetic
                 <div className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center bg-[#151719] p-6 md:p-8 transition-all duration-500 shadow-[inset_0_0_100px_black]">
                     {/* Paper Texture Overlay */}
                     <div className="absolute inset-0 opacity-20 pointer-events-none bg-repeat" style={{ backgroundImage: `url(${ASSETS.textureCork})` }}></div>
                     
                     {/* Sealed Content Box */}
                     <div className="relative max-w-2xl w-full border-4 border-dashed border-white/10 p-6 md:p-12 bg-[#0b0c0d] shadow-2xl flex flex-col items-center">
                        <div className="absolute -top-6 -right-6 w-32 h-32 opacity-20 pointer-events-none">
                            <i className="fa-solid fa-stamp text-8xl text-white transform -rotate-12"></i>
                        </div>

                        {/* Top Secret Stamp */}
                        <div className="mb-8 md:mb-10 border-4 border-lantern-red p-3 md:p-4 transform -rotate-2 opacity-90 mix-blend-screen shadow-[0_0_20px_rgba(192,53,43,0.3)]">
                            <h3 className="text-3xl md:text-5xl font-display font-black text-lantern-red tracking-[0.2em] uppercase">
                                {t.monster.lockedOverlay.topSecret}
                            </h3>
                            <div className="text-lantern-red font-mono text-center text-[10px] md:text-xs tracking-[0.5em] mt-2 border-t border-lantern-red pt-1">
                                {t.monster.lockedOverlay.doNotOpen}
                            </div>
                        </div>

                        <p className="text-mist-grey font-serif text-base md:text-xl mb-8 md:mb-12 tracking-widest opacity-60">
                           {t.monster.lockedOverlay.desc}
                        </p>
                        
                        <p className="text-lantern-red/70 font-mono text-xs md:text-sm tracking-widest mb-8 animate-pulse">
                           {t.monster.lockedOverlay.hint}
                        </p>
                       
                        <div className="flex justify-center gap-6 md:gap-12 mb-10 md:mb-12 w-full">
                          {ITEMS.map((item, idx) => (
                            <div key={idx} className={`flex flex-col items-center gap-4 transition-all duration-500 relative group/item`}>
                               <div className={`w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center border-2 transition-transform hover:scale-105 ${foundItems.includes(item.id) ? 'bg-valley-teal border-mist-grey text-mist-grey' : 'bg-black/50 text-lantern-red/50 border-lantern-red/30 dashed-border'}`}>
                                  <i className={`fa-solid ${item.icon} text-xl md:text-3xl`}></i>
                               </div>
                               <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden mt-1">
                                   <div className={`h-full ${foundItems.includes(item.id) ? 'bg-white' : 'bg-transparent'} transition-all duration-500`}></div>
                               </div>
                            </div>
                          ))}
                        </div>

                        {/* Progress Bar - Minimal */}
                        <div className="w-full max-w-md mx-auto">
                           <div className="flex justify-between text-mist-grey/40 font-mono text-xs font-bold mb-2 tracking-widest">
                             <span>{t.monster.lockedOverlay.status}</span>
                             <span>{progress}%</span>
                           </div>
                           <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                             <div 
                               className="h-full bg-lantern-red shadow-[0_0_10px_rgba(192,53,43,0.5)] transition-all duration-700 ease-out"
                               style={{ width: `${progress}%` }}
                             ></div>
                           </div>
                        </div>

                     </div>
                 </div>
              )}

              <div className={`transition-all duration-1000 w-full h-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative z-10 ${allFound ? 'opacity-100 blur-0' : 'opacity-10 blur-sm grayscale'}`}>
                  
                  {/* Left Column: Photo & Evidence Slots */}
                  <div className="md:col-span-4 flex flex-col gap-6 md:gap-8">
                      {/* Photo */}
                      <div className="bg-white p-3 md:p-4 pb-12 md:pb-16 shadow-md transform -rotate-1 md:-rotate-2 border border-gray-300 relative">
                          <img src={ASSETS.monsterSketch} className="w-full h-64 md:h-80 object-contain mix-blend-multiply grayscale contrast-125" alt="Subject" />
                          <div className="absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20 border-4 border-lantern-red rounded-full opacity-30"></div>
                      </div>

                      {/* Residual Items List */}
                      <div className="bg-[#b0a48f]/50 p-4 md:p-6 border border-[#9c917e]">
                          <h4 className="text-[#4a443b] font-mono font-bold tracking-widest mb-4 border-b border-[#9c917e] pb-2 text-sm md:text-base">
                            {t.monster.file.items.title}
                          </h4>
                          <ul className="text-[#2b2520] text-sm md:text-base space-y-3 list-disc pl-5 font-serif">
                             {t.monster.file.items.list.map((item, idx) => (
                               <li key={idx} className={foundItems.length <= idx ? 'opacity-50 blur-[2px]' : ''}>{item}</li>
                             ))}
                          </ul>
                          <p className="mt-4 text-[#7A2321] text-xs font-bold opacity-80">{t.monster.file.items.note}</p>
                      </div>
                  </div>

                  {/* Right Column: Detailed Report */}
                  <div className="md:col-span-8 font-serif text-[#2b2520] relative flex flex-col h-full gap-6 md:gap-8">
                      
                      {/* Confidential Stamp */}
                      <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 border-4 border-lantern-red rounded-full flex items-center justify-center opacity-20 transform rotate-12 pointer-events-none mix-blend-multiply">
                          <span className="text-lantern-red font-black text-sm md:text-xl uppercase transform -rotate-12">CONFIDENTIAL</span>
                      </div>

                      {/* Basic Info */}
                      <div>
                          <h4 className="text-[#4a443b] font-bold text-lg md:text-xl border-b-2 border-[#4a443b] pb-2 mb-3 inline-block">
                             {t.monster.file.basic.title}
                          </h4>
                          <p className="text-base md:text-lg leading-relaxed">
                             {t.monster.file.basic.content}
                          </p>
                      </div>

                      {/* Event Summary */}
                      <div className="bg-[#a39985]/20 p-4 border-l-4 border-[#4a443b]">
                          <h4 className="text-[#4a443b] font-bold text-lg mb-2">
                             {t.monster.file.event.title}
                          </h4>
                          <p className="text-base md:text-lg leading-loose text-justify">
                             {t.monster.file.event.content}
                          </p>
                      </div>

                      {/* Observation Log */}
                      <div>
                           <h4 className="text-lantern-red font-bold text-lg md:text-xl border-b-2 border-lantern-red/50 pb-2 mb-4 inline-block">
                             {t.monster.file.observation.title}
                           </h4>
                           
                           <div className="space-y-4">
                              <p className="font-bold text-[#4a443b]">{t.monster.file.observation.section1_title}</p>
                              <p className="pl-4 border-l border-[#4a443b]/30">{t.monster.file.observation.section1_content}</p>
                              
                              <div className="pl-6 space-y-2 italic text-[#4a443b]/80">
                                 {t.monster.file.observation.quotes.map((q, i) => (
                                   <p key={i}>{q}</p>
                                 ))}
                              </div>

                              <p className="font-bold text-[#4a443b] mt-6">{t.monster.file.observation.section2_title}</p>
                              <p className="pl-4 border-l border-[#4a443b]/30">{t.monster.file.observation.section2_content}</p>
                           </div>
                      </div>

                      <div className="mt-auto pt-4 text-right text-lantern-red font-bold font-mono tracking-widest">
                         {t.monster.file.status}
                      </div>
                  </div>
              </div>

              {/* Wishlist CTA */}
              <div className="mt-12 pt-8 border-t-2 border-[#4a443b] border-dashed flex flex-col md:flex-row items-center justify-between gap-6 opacity-90 relative z-20">
                  <div className="flex flex-col gap-2 text-center md:text-left">
                      <span className="font-mono font-bold text-[#4a443b] tracking-widest text-xs md:text-sm uppercase flex items-center justify-center md:justify-start">
                          <i className="fa-solid fa-triangle-exclamation mr-2"></i> {t.monster.actionRequired}
                      </span>
                      <p className="font-serif text-[#2b2520] font-bold text-lg md:text-xl">
                          {t.monster.actionDesc}
                      </p>
                  </div>
                  <a href={steamUrl} target="_blank" rel="noreferrer" className="bg-[#1a1714] text-[#c2b59b] hover:bg-lantern-red hover:text-white px-6 py-3 font-bold tracking-widest transition-all shadow-lg flex items-center gap-3 group w-full md:w-auto justify-center">
                      <i className="fa-brands fa-steam text-xl group-hover:rotate-12 transition-transform"></i>
                      <span>{t.monster.addToWishlist}</span>
                  </a>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default MonsterIndex;
